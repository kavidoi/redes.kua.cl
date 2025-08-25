import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Search, Filter, MoreVertical, Send } from "lucide-react"

export default function Conversations() {
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
                <a href="/dashboard/conversations" className="text-blue-600 font-medium">Conversations</a>
                <a href="/dashboard/flows" className="text-gray-600 hover:text-gray-900">Flows</a>
                <a href="/dashboard/contacts" className="text-gray-600 hover:text-gray-900">Contacts</a>
                <a href="/dashboard/analytics" className="text-gray-600 hover:text-gray-900">Analytics</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Conversations List */}
        <div className="w-1/3 bg-white border-r flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold mb-4">Conversations</h2>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${i === 1 ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''}`}>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-medium">
                    U{i}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">@user{i}</p>
                      <span className="text-xs text-gray-500">2m</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">Hey! I'm interested in your products...</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-100 text-green-800">
                        Active
                      </span>
                      {i % 3 === 0 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800">
                          Automated
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-medium">
                  U1
                </div>
                <div>
                  <h3 className="font-medium">@user1</h3>
                  <p className="text-sm text-gray-500">Active now</p>
                </div>
              </div>
              <Button variant="outline" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Incoming message */}
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm">
                U
              </div>
              <div className="max-w-xs lg:max-w-md">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <p className="text-sm">Hey! I saw your post about the new collection. Do you have it in blue?</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">2:30 PM</p>
              </div>
            </div>

            {/* Outgoing message */}
            <div className="flex items-start space-x-2 justify-end">
              <div className="max-w-xs lg:max-w-md">
                <div className="bg-blue-600 text-white rounded-lg px-4 py-2">
                  <p className="text-sm">Hi! Yes, we have it in blue. Would you like me to send you the link?</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">2:32 PM</p>
              </div>
            </div>

            {/* Automated response indicator */}
            <div className="flex items-start space-x-2 justify-end">
              <div className="max-w-xs lg:max-w-md">
                <div className="bg-green-600 text-white rounded-lg px-4 py-2">
                  <p className="text-sm">Here's our blue collection: [link]. Use code BLUE20 for 20% off!</p>
                </div>
                <div className="flex items-center justify-end mt-1 space-x-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Auto</span>
                  <p className="text-xs text-gray-500">2:32 PM</p>
                </div>
              </div>
            </div>

            {/* Incoming message */}
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm">
                U
              </div>
              <div className="max-w-xs lg:max-w-md">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <p className="text-sm">Perfect! Just ordered. Thank you!</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">2:35 PM</p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t p-4">
            <div className="flex space-x-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="w-80 bg-white border-l">
          <div className="p-4">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl font-medium mx-auto mb-2">
                  U1
                </div>
                <h4 className="font-medium">@user1</h4>
                <p className="text-sm text-gray-500">Sarah Johnson</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <p className="text-sm text-gray-600">sarah@example.com</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Tags</label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">
                      Customer
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                      VIP
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Last Purchase</label>
                  <p className="text-sm text-gray-600">Blue Dress - $89.99</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Total Spent</label>
                  <p className="text-sm text-gray-600">$347.50</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full mb-2">
                  Add Note
                </Button>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
