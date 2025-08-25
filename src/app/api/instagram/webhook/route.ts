import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Instagram webhook verification
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  const verifyToken = process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('Instagram webhook verified')
    return new NextResponse(challenge)
  }

  return new NextResponse('Forbidden', { status: 403 })
}

// Handle Instagram webhook events
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Process Instagram webhook events
    for (const entry of body.entry || []) {
      for (const change of entry.changes || []) {
        if (change.field === 'messages') {
          await handleMessageEvent(change.value)
        }
      }
    }

    return new NextResponse('OK')
  } catch (error) {
    console.error('Instagram webhook error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

async function handleMessageEvent(messageData: any) {
  try {
    const { messages, metadata } = messageData
    
    for (const message of messages || []) {
      // Find or create conversation
      const conversation = await findOrCreateConversation(
        metadata.phone_number_id,
        message.from
      )

      // Store message
      await prisma.message.create({
        data: {
          conversationId: conversation.id,
          content: message.text?.body || message.type,
          messageType: getMessageType(message),
          direction: 'INBOUND',
          instagramId: message.id,
          metadata: message,
          sentAt: new Date(parseInt(message.timestamp) * 1000)
        }
      })

      // Process automation flows
      await processAutomationFlows(conversation, message)
    }
  } catch (error) {
    console.error('Error handling message event:', error)
  }
}

async function findOrCreateConversation(phoneNumberId: string, fromId: string) {
  // Find existing conversation
  let conversation = await prisma.conversation.findFirst({
    where: {
      instagramAccount: {
        instagramId: phoneNumberId
      },
      contact: {
        instagramId: fromId
      }
    },
    include: {
      contact: true,
      instagramAccount: true
    }
  })

  if (!conversation) {
    // Create new contact and conversation
    const contact = await prisma.contact.create({
      data: {
        instagramId: fromId,
        workspaceId: 'default-workspace' // TODO: Get from Instagram account
      }
    })

    conversation = await prisma.conversation.create({
      data: {
        workspaceId: 'default-workspace',
        contactId: contact.id,
        status: 'OPEN'
      },
      include: {
        contact: true,
        instagramAccount: true
      }
    })
  }

  return conversation
}

async function processAutomationFlows(conversation: any, message: any) {
  // Get active flows for the workspace
  const flows = await prisma.flow.findMany({
    where: {
      workspaceId: conversation.workspaceId,
      isActive: true
    }
  })

  for (const flow of flows) {
    // Check if flow should be triggered
    if (shouldTriggerFlow(flow, message)) {
      await executeFlow(flow, conversation, message)
    }
  }
}

function shouldTriggerFlow(flow: any, message: any): boolean {
  const messageText = message.text?.body?.toLowerCase() || ''
  
  switch (flow.trigger) {
    case 'KEYWORD':
      // Check if message contains trigger keywords
      const keywords = flow.nodes?.trigger?.keywords || []
      return keywords.some((keyword: string) => 
        messageText.includes(keyword.toLowerCase())
      )
    
    case 'WELCOME_MESSAGE':
      // Trigger for new contacts (first message)
      return true // TODO: Check if this is first message from contact
    
    default:
      return false
  }
}

async function executeFlow(flow: any, conversation: any, message: any) {
  try {
    // Execute flow nodes
    const nodes = flow.nodes || {}
    
    // For now, send a simple automated response
    if (nodes.response?.message) {
      await sendAutomatedResponse(conversation, nodes.response.message)
    }
  } catch (error) {
    console.error('Error executing flow:', error)
  }
}

async function sendAutomatedResponse(conversation: any, responseText: string) {
  // Store the automated response in database
  await prisma.message.create({
    data: {
      conversationId: conversation.id,
      content: responseText,
      messageType: 'TEXT',
      direction: 'OUTBOUND',
      metadata: { automated: true }
    }
  })

  // TODO: Send actual message via Instagram API
  console.log('Automated response sent:', responseText)
}

function getMessageType(message: any): string {
  if (message.text) return 'TEXT'
  if (message.image) return 'IMAGE'
  if (message.video) return 'VIDEO'
  if (message.audio) return 'AUDIO'
  return 'TEXT'
}
