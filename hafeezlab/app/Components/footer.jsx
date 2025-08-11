"use client"
import { FaWhatsapp, FaRobot } from "react-icons/fa"
import { useState } from "react"
import ChatPopup from "@/app/Components/chatpopup"

const WhatsAppFooter = () => {
    const [isChatOpen, setIsChatOpen] = useState(false)

    return (
        <>
            {/* Chat Icons Container */}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 items-end">
                {/* Added chatbot icon above WhatsApp with better spacing and visibility */}
                <button onClick={() => setIsChatOpen(true)} className="group relative" aria-label="Open AI Chat">
                    <div className="relative">
                        {/* Pulsing background effect */}
                        <div className="absolute -inset-1 bg-blue-500 rounded-full animate-ping opacity-75"></div>

                        {/* Chatbot icon */}
                        <div className="relative bg-blue-500 hover:bg-blue-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border-2 border-white">
                            <FaRobot size={20} className="text-white" />
                        </div>
                    </div>
                </button>

                <a
                    href="https://wa.me/923167378200?text=Hello%20I%20need%20help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="Contact via WhatsApp"
                >
                    <div className="relative">
                        {/* Pulsing background effect */}
                        <div className="absolute -inset-1 bg-green-500 rounded-full animate-ping opacity-75"></div>

                        {/* WhatsApp icon */}
                        <div className="relative bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border-2 border-white">
                            <FaWhatsapp size={20} className="text-white" />
                        </div>
                    </div>
                </a>
            </div>

            {isChatOpen && <ChatPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
        </>
    )
}

export default WhatsAppFooter
