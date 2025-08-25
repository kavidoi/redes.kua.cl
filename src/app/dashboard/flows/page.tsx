import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Plus, Play, Pause, Edit, Trash2, Zap, Users, MessageCircle } from "lucide-react"

export default function Flows() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">ChatFlow</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
                <a href="/dashboard/conversations" className="text-gray-600 hover:text-gray-900">Conversations</a>
                <a href="/dashboard/flows" className="text-blue-600 font-medium">Flows</a>
                <a href="/dashboard/contacts" className="text-gray-600 hover:text-gray-900">Contacts</a>
                <a href="/dashboard/analytics" className="text-gray-600 hover:text-gray-900">Analytics</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Automation Flows</h1>
            <p className="text-gray-600 mt-2">Create and manage automated conversation flows for your Instagram DMs</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Flow
          </Button>
        </div>

        {/* Flow Templates */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Start Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">Welcome Message</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatically greet new followers and introduce your business
                </CardDescription>
                <Button variant="outline" className="w-full mt-4">
                  Use Template
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-lg">Keyword Response</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Respond to specific keywords with automated messages and actions
                </CardDescription>
                <Button variant="outline" className="w-full mt-4">
                  Use Template
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-lg">Lead Qualification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Qualify leads by asking questions and collecting contact information
                </CardDescription>
                <Button variant="outline" className="w-full mt-4">
                  Use Template
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Active Flows */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Flows</h2>
          <div className="space-y-4">
            {/* Flow 1 */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle>Welcome New Followers</CardTitle>
                      <CardDescription>Automatically greets new followers with a welcome message</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                      Active
                    </span>
                    <Button variant="outline" size="sm">
                      <Pause className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Trigger</p>
                    <p className="font-medium">New Follower</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Triggered</p>
                    <p className="font-medium">47 times</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Success Rate</p>
                    <p className="font-medium">94%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Triggered</p>
                    <p className="font-medium">2 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flow 2 */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Product Inquiry Handler</CardTitle>
                      <CardDescription>Responds to product-related keywords with catalog and pricing</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                      Active
                    </span>
                    <Button variant="outline" size="sm">
                      <Pause className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Trigger</p>
                    <p className="font-medium">Keywords: price, product, buy</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Triggered</p>
                    <p className="font-medium">23 times</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Success Rate</p>
                    <p className="font-medium">87%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Triggered</p>
                    <p className="font-medium">1 hour ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flow 3 - Paused */}
            <Card className="opacity-60">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <CardTitle>Lead Collection Flow</CardTitle>
                      <CardDescription>Collects email addresses for newsletter signup</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-800">
                      Paused
                    </span>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Trigger</p>
                    <p className="font-medium">Keywords: newsletter, updates</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Triggered</p>
                    <p className="font-medium">12 times</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Success Rate</p>
                    <p className="font-medium">75%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Triggered</p>
                    <p className="font-medium">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
