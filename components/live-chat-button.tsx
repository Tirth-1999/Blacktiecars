"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"

export default function LiveChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "agent",
      message: "Hi there! I'm Amanda, your booking manager. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory([
      ...chatHistory,
      {
        sender: "user",
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ])

    setMessage("")

    // Simulate agent response after a short delay
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "agent",
          message:
            "Thanks for your message! I'll get back to you shortly. If you need immediate assistance, you can also call us at (555) 123-4567.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
    }, 1000)
  }

  return (
    <>
      <Button onClick={toggleChat} className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 shadow-lg z-50">
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 md:w-96 shadow-xl z-50 border-0">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-lg">Live Chat Support</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      chat.sender === "user" ? "bg-primary text-primary-foreground" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p>{chat.message}</p>
                    <p
                      className={`text-xs mt-1 ${
                        chat.sender === "user" ? "text-primary-foreground/70" : "text-gray-500"
                      }`}
                    >
                      {chat.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t p-3">
            <form onSubmit={sendMessage} className="flex w-full gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

