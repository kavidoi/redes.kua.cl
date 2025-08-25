'use client'

import { useState, useCallback } from 'react'
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
} from '@reactflow/core'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Plus, Save, Play, ArrowLeft } from "lucide-react"
import Link from "next/link"

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Trigger: New Follower' },
    position: { x: 250, y: 25 },
    style: { background: '#e1f5fe', border: '2px solid #0277bd' }
  },
]

const initialEdges: Edge[] = []

const nodeTypes = {
  trigger: { label: 'Trigger', color: '#e1f5fe', borderColor: '#0277bd' },
  message: { label: 'Send Message', color: '#f3e5f5', borderColor: '#7b1fa2' },
  condition: { label: 'Condition', color: '#fff3e0', borderColor: '#f57c00' },
  delay: { label: 'Delay', color: '#e8f5e8', borderColor: '#388e3c' },
  action: { label: 'Action', color: '#fce4ec', borderColor: '#c2185b' },
}

export default function FlowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [flowName, setFlowName] = useState('New Flow')
  const [selectedNodeType, setSelectedNodeType] = useState<keyof typeof nodeTypes>('message')

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const addNode = useCallback(() => {
    const newNode: Node = {
      id: `${nodes.length + 1}`,
      type: 'default',
      data: { label: nodeTypes[selectedNodeType].label },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      style: { 
        background: nodeTypes[selectedNodeType].color, 
        border: `2px solid ${nodeTypes[selectedNodeType].borderColor}` 
      }
    }
    setNodes((nds) => nds.concat(newNode))
  }, [nodes.length, selectedNodeType, setNodes])

  const saveFlow = useCallback(() => {
    const flowData = {
      name: flowName,
      nodes,
      edges,
    }
    console.log('Saving flow:', flowData)
    // TODO: Save to database
  }, [flowName, nodes, edges])

  return (
    <div className="h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/flows">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Flows
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <Input
                  value={flowName}
                  onChange={(e) => setFlowName(e.target.value)}
                  className="text-lg font-semibold border-none bg-transparent p-0 h-auto focus:ring-0"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Test Flow
              </Button>
              <Button onClick={saveFlow}>
                <Save className="h-4 w-4 mr-2" />
                Save Flow
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r p-4 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Add Nodes</h3>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(nodeTypes).map(([type, config]) => (
                  <Button
                    key={type}
                    variant={selectedNodeType === type ? "default" : "outline"}
                    className="justify-start h-auto p-3"
                    onClick={() => setSelectedNodeType(type as keyof typeof nodeTypes)}
                  >
                    <div className="text-left">
                      <div className="font-medium">{config.label}</div>
                    </div>
                  </Button>
                ))}
              </div>
              <Button onClick={addNode} className="w-full mt-3">
                <Plus className="h-4 w-4 mr-2" />
                Add {nodeTypes[selectedNodeType].label}
              </Button>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Flow Settings</h3>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Trigger Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-gray-600">Trigger Type</label>
                    <select className="w-full mt-1 p-2 border rounded text-sm">
                      <option>New Follower</option>
                      <option>Keyword Match</option>
                      <option>Story Mention</option>
                      <option>Comment Reply</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600">Keywords (comma separated)</label>
                    <Input placeholder="hello, hi, info" className="mt-1 text-sm" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Node Properties</h3>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Message Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-gray-600">Message Text</label>
                    <textarea 
                      className="w-full mt-1 p-2 border rounded text-sm resize-none"
                      rows={3}
                      placeholder="Enter your message..."
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600">Delay (seconds)</label>
                    <Input type="number" placeholder="0" className="mt-1 text-sm" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Flow Canvas */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
    </div>
  )
}
