'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, CheckCircle, AlertCircle } from "lucide-react"

interface InstagramAccount {
  id: string
  username: string
  isActive: boolean
}

export function InstagramConnect() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectedAccounts, setConnectedAccounts] = useState<InstagramAccount[]>([])
  const [error, setError] = useState("")

  const handleConnect = async () => {
    setIsConnecting(true)
    setError("")

    try {
      const response = await fetch("/api/instagram/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workspaceId: "default-workspace", // TODO: Get from session
        }),
      })

      const data = await response.json()

      if (data.authUrl) {
        window.location.href = data.authUrl
      } else {
        setError("Failed to initiate Instagram connection")
      }
    } catch (error) {
      setError("An error occurred while connecting to Instagram")
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Instagram className="h-5 w-5 text-pink-600" />
            <span>Instagram Connection</span>
          </CardTitle>
          <CardDescription>
            Connect your Instagram Business account to start automating your DMs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded text-sm flex items-center space-x-2">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          )}

          {connectedAccounts.length === 0 ? (
            <div className="text-center py-8">
              <Instagram className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Instagram accounts connected
              </h3>
              <p className="text-gray-600 mb-6">
                Connect your Instagram Business account to start automating conversations
              </p>
              <Button onClick={handleConnect} disabled={isConnecting}>
                <Instagram className="h-4 w-4 mr-2" />
                {isConnecting ? "Connecting..." : "Connect Instagram"}
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <h4 className="font-medium">Connected Accounts</h4>
              {connectedAccounts.map((account) => (
                <div
                  key={account.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-medium">
                      @
                    </div>
                    <div>
                      <p className="font-medium">@{account.username}</p>
                      <p className="text-sm text-gray-600">
                        {account.isActive ? "Active" : "Inactive"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {account.isActive ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    )}
                    <Button variant="outline" size="sm">
                      Settings
                    </Button>
                  </div>
                </div>
              ))}
              <Button onClick={handleConnect} variant="outline" disabled={isConnecting}>
                <Instagram className="h-4 w-4 mr-2" />
                Connect Another Account
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Setup Instructions</CardTitle>
          <CardDescription>
            Follow these steps to connect your Instagram Business account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>Make sure you have an Instagram Business or Creator account</li>
            <li>Your Instagram account must be connected to a Facebook Page</li>
            <li>Click "Connect Instagram" and authorize ChatFlow to access your account</li>
            <li>Configure your webhook settings in the Instagram Developer Console</li>
            <li>Start creating automation flows for your DMs</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
