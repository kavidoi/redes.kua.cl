import { Server as NetServer } from 'http'
import { NextApiRequest } from 'next'
import { Server as ServerIO } from 'socket.io'
import { NextApiResponseServerIO } from '@/types/socket'

export const config = {
  api: {
    bodyParser: false,
  },
}

const SocketHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new ServerIO(res.socket.server)
    res.socket.server.io = io

    io.on('connection', (socket) => {
      console.log('Client connected:', socket.id)

      // Join user to their workspace rooms
      socket.on('join-workspace', (workspaceId: string) => {
        socket.join(`workspace-${workspaceId}`)
        console.log(`Socket ${socket.id} joined workspace-${workspaceId}`)
      })

      // Join conversation room
      socket.on('join-conversation', (conversationId: string) => {
        socket.join(`conversation-${conversationId}`)
        console.log(`Socket ${socket.id} joined conversation-${conversationId}`)
      })

      // Handle typing indicators
      socket.on('typing-start', (data: { conversationId: string; userId: string }) => {
        socket.to(`conversation-${data.conversationId}`).emit('user-typing', {
          userId: data.userId,
          typing: true
        })
      })

      socket.on('typing-stop', (data: { conversationId: string; userId: string }) => {
        socket.to(`conversation-${data.conversationId}`).emit('user-typing', {
          userId: data.userId,
          typing: false
        })
      })

      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id)
      })
    })
  }
  res.end()
}

export default SocketHandler

// Helper functions for emitting events
export const emitNewMessage = (io: ServerIO, conversationId: string, message: any) => {
  io.to(`conversation-${conversationId}`).emit('new-message', message)
}

export const emitConversationUpdate = (io: ServerIO, workspaceId: string, conversation: any) => {
  io.to(`workspace-${workspaceId}`).emit('conversation-updated', conversation)
}
