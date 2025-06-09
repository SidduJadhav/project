"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useModelViewer } from "../hooks/useModelViewer"

const ChatbotPage = () => {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState<{
    reply: string
    modelUrl: string | null
    description: string | null
  } | null>(null)

  const modelViewerLoaded = useModelViewer()

  const handleSendMessage = async () => {
    try {
      const res = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })
      if (res.ok) {
        const data = await res.json()
        setResponse(data)
      } else {
        console.error("Failed to fetch response:", res.status)
      }
    } catch (error) {
      console.error("Error sending message:", error)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-600 to-purple-800">
      {/* Model Viewer Section */}
      <div className="flex-grow p-8">
        <Card className="h-full bg-white/10 backdrop-blur-md border-0">
          <CardContent className="p-6 h-full flex flex-col">
            <h1 className="text-4xl font-bold mb-6 text-white text-center">3D Model Viewer</h1>
            {response?.modelUrl ? (
              <div className="flex-grow flex flex-col">
                <p className="mb-4 text-lg text-white font-semibold">{response.description}</p>
                <div className="flex-grow bg-black/20 rounded-lg overflow-hidden">
                  {modelViewerLoaded && (
                    <model-viewer
                      src={response.modelUrl}
                      auto-rotate
                      camera-controls
                      style={{ width: "100%", height: "100%" }}
                    ></model-viewer>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex-grow flex items-center justify-center">
                <p className="text-xl text-white/70">Enter a prompt to view a 3D model</p>
              </div>
            )}
            <div className="mt-6 flex space-x-4">
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a prompt (e.g., heart, car)"
                className="flex-grow bg-white/20 text-white placeholder-white/50 border-white/30"
              />
              <Button onClick={handleSendMessage} className="bg-purple-300 text-purple-800 hover:bg-purple-200">
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chatbot Section */}
      <div className="w-96 bg-white/10 backdrop-blur-md">
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold p-4 text-white text-center bg-white/20">Chat with Us</h2>
          <iframe
            src="add your link here bro"
            className="flex-grow"
            style={{ border: "none" }}
            title="Chatbot"
          />
        </div>
      </div>
    </div>
  )
}

export default ChatbotPage

