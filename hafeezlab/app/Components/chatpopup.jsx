"use client"
import { useState, useRef, useEffect } from "react"
import { FaTimes, FaPaperPlane, FaRobot, FaUser } from "react-icons/fa"

const ChatPopup = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hello! I'm your medical AI assistant from Hafeez Lab. How can I help you with your health questions today?",
        },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return

        const userMessage = { role: "user", content: input }
        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            })

            const data = await response.json()

            if (data.error) {
                throw new Error(data.error)
            }

            setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "I'm experiencing technical difficulties. Please try again in a few moments.",
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed bottom-20 right-4 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border-0 z-50 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                        <FaRobot size={18} className="text-white" />
                    </div>
                    <div>
                        <span className="font-semibold text-lg">AI Assistant</span>
                        <p className="text-blue-100 text-xs">Hafeez Lab Medical Support</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:rotate-90"
                >
                    <FaTimes size={16} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                {messages.map((message, index) => (
                    <div key={index} className={`flex items-start gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                        <div
                            className={`p-2 rounded-full shadow-md ${message.role === "user"
                                    ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                    : "bg-gradient-to-r from-green-500 to-green-600"
                                }`}
                        >
                            {message.role === "user" ? (
                                <FaUser size={12} className="text-white" />
                            ) : (
                                <FaRobot size={12} className="text-white" />
                            )}
                        </div>
                        <div
                            className={`max-w-[75%] p-4 rounded-2xl shadow-sm ${message.role === "user"
                                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-md"
                                    : "bg-white text-gray-800 border border-gray-100 rounded-tl-md"
                                }`}
                        >
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full shadow-md bg-gradient-to-r from-green-500 to-green-600">
                            <FaRobot size={12} className="text-white" />
                        </div>
                        <div className="bg-white text-gray-800 p-4 rounded-2xl rounded-tl-md shadow-sm border border-gray-100">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                                <div
                                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                ></div>
                                <div
                                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-3 items-end">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me about your health concerns..."
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                            disabled={isLoading}
                        />
                    </div>
                    <button
                        onClick={sendMessage}
                        disabled={!input.trim() || isLoading}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 text-white p-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 disabled:transform-none disabled:hover:scale-100"
                    >
                        <FaPaperPlane size={14} />
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                    For medical emergencies, please contact your doctor immediately
                </p>
            </div>
        </div>
    )
}

export default ChatPopup
