import { FaWhatsapp } from "react-icons/fa"

const WhatsAppFooter = () => {
    return (
        <a
            href="https://wa.me/923450018111?text=Hello%20I%20need%20help"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 group"
        >
            <div className="relative">
                {/* Pulsing background effect */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

                {/* WhatsApp icon */}
                <div className="relative bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110">
                    <FaWhatsapp size={24} className="text-white" />
                </div>
            </div>
        </a>
    )
}

export default WhatsAppFooter
