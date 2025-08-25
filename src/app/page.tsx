import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Zap, Users, BarChart3, Instagram, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ChatFlow</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Better Way to Manage
            <span className="text-blue-600"> Instagram DMs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Automate conversations, nurture leads, and grow your business with our powerful Instagram messaging platform built for small businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed specifically for small businesses to automate and scale their Instagram messaging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Instagram className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Instagram Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect your Instagram account and manage all DMs from one powerful dashboard.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Smart Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create intelligent flows that respond to keywords, welcome new followers, and nurture leads automatically.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Contact Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Organize contacts, track conversations, and build meaningful relationships with your audience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Analytics & Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Track performance, measure engagement, and optimize your messaging strategy with detailed analytics.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your Instagram messaging?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of small businesses already using ChatFlow to grow their audience and increase sales.
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MessageSquare className="h-6 w-6" />
            <span className="text-xl font-bold">ChatFlow</span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ChatFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
