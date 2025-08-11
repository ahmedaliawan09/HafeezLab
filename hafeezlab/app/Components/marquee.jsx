"use client"

import { useState } from "react"

const ImageMarquee = ({ speed = "normal" }) => {
    const [isPaused, setIsPaused] = useState(false)

    const images = [
        { src: "/images/m1.png", alt: "Image 1" },
        { src: "/images/m2.png", alt: "Image 2" },
        { src: "/images/m3.png", alt: "Image 3" },
        { src: "/images/m4.png", alt: "Image 4" },
        { src: "/images/m5.png", alt: "Image 5" },
        { src: "/images/m6.png", alt: "Image 6" },
        { src: "/images/m7.png", alt: "Image 7" },
        { src: "/images/m8.png", alt: "Image 8" },
        { src: "/images/m9.png", alt: "Image 9" },
        { src: "/images/m10.png", alt: "Image 10" },
    ]

    // Speed configurations
    const speedConfig = {
        slow: 60,
        normal: 40,
        fast: 20,
    }

    const animationDuration = speedConfig[speed]

    return (
        <div className="w-full overflow-hidden mt-16">
            <div className="relative flex" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                <div
                    className="flex items-center space-x-6 flex-shrink-0"
                    style={{
                        animation: !isPaused ? `scrollLeft ${animationDuration}s linear infinite` : "paused",
                    }}
                >
                    {/* First set of images */}
                    {images.map((image, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 transition-transform duration-300 hover:scale-110 hover:z-10 relative"
                        >
                            <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {images.map((image, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 transition-transform duration-300 hover:scale-110 hover:z-10 relative"
                        >
                            <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    )
}

export default ImageMarquee
