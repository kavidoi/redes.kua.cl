import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, User, Bell, Shield, Instagram } from "lucide-react"
import { InstagramConnect } from "@/components/instagram-connect"

export default function Settings() {
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
                <a href="/dashboard/flows" className="text-gray-600 hover:text-gray-900">Flows</a>
                <a href="/dashboard/contacts" className="text-gray-600 hover:text-gray-900">Contacts</a>
                <a href="/dashboard/analytics" className="text-gray-600 hover:text-gray-900">Analytics</a>
                <a href="/dashboard/settings" className="text-blue-600 font-medium">Settings</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-2">Manage your account and workspace settings</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="space-y-1">
                <a href="#profile" className="bg-blue-50 text-blue-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  <User className="text-blue-500 mr-3 h-5 w-5" />
                  Profile
                </a>
                <a href="#instagram" className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  <Instagram className="text-gray-400 mr-3 h-5 w-5" />
                  Instagram
                </a>
                <a href="#notifications" className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  <Bell className="text-gray-400 mr-3 h-5 w-5" />
                  Notifications
                </a>
                <a href="#security" className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  <Shield className="text-gray-400 mr-3 h-5 w-5" />
                  Security
                </a>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Profile Settings */}
              <Card id="profile">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information and workspace details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input defaultValue="john@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Workspace Name</label>
                    <Input defaultValue="John's Business" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Description</label>
                    <textarea 
                      className="w-full p-3 border rounded-md resize-none"
                      rows={3}
                      placeholder="Tell us about your business..."
                    />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              {/* Instagram Settings */}
              <div id="instagram">
                <InstagramConnect />
              </div>

              {/* Notification Settings */}
              <Card id="notifications">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Choose how you want to be notified about new messages and activities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Messages</p>
                      <p className="text-sm text-gray-600">Get notified when you receive new DMs</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Flow Triggers</p>
                      <p className="text-sm text-gray-600">Get notified when automation flows are triggered</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekly Reports</p>
                      <p className="text-sm text-gray-600">Receive weekly performance summaries</p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <Button>Save Preferences</Button>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card id="security">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Manage your account security and privacy settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Change Password</h4>
                      <div className="space-y-3">
                        <Input type="password" placeholder="Current password" />
                        <Input type="password" placeholder="New password" />
                        <Input type="password" placeholder="Confirm new password" />
                        <Button variant="outline">Update Password</Button>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Add an extra layer of security to your account
                      </p>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">API Keys</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Manage API keys for integrations and webhooks
                      </p>
                      <Button variant="outline">Manage API Keys</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
