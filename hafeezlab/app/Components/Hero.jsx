"use client"
import { Button } from "@/app/Components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"

const Hero = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-1/2 right-20 w-16 h-16 bg-red-300 rounded-full opacity-40"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 mt-12 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left animate-fade-in-up">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                                Professional Pathology Services
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Welcome to{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                                    Hafeez Lab
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mt-6 leading-relaxed">
                                Committed to delivering excellence in clinical diagnostics through accuracy, reliability, and advanced
                                technology
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <Button
                                onClick={() => scrollToSection("#services")}
                                className="gradient-red text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift pulse-red"
                            >
                                Our Services
                            </Button>
                            <a href="https://wa.me/923450018111?text=Hello%20I%20need%20help"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                                aria-label="Contact via WhatsApp">
                                <Button

                                    variant="outline"
                                    className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                                >
                                    Book Appointment
                                </Button>
                            </a>
                        </div>

                        {/* Quick Contact Info */}
                        <div className="grid sm:grid-cols-3 gap-4 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start space-x-2">
                                <Phone className="w-5 h-5 text-red-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Call Us</p>
                                    <p className="font-semibold text-gray-900">048-3258633</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-2">
                                <Phone className="w-5 h-5 text-red-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Mobile</p>
                                    <p className="font-semibold text-gray-900">03450018111</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-2">
                                <Clock className="w-5 h-5 text-red-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Open</p>
                                    <p className="font-semibold text-gray-900">24/7 Service</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image Placeholder */}
                    <div className="relative animate-fade-in-up">
                        <div className="relative">
                            {/* Main image placeholder */}
                            <div className="w-full h-96 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl shadow-2xl flex items-center justify-center hover-lift">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        {/* <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h.01a1 1 0 100-2H5zm3 0a1 1 0 000 2h.01a1 1 0 100-2H8zm3 0a1 1 0 000 2h.01a1 1 0 100-2H11z"
                                                clipRule="evenodd"
                                            />
                                        </svg> */}
                                    </div>
                                    <p className="text-red-700 font-medium">Laboratory Image Placeholder</p>
                                    <p className="text-red-600 text-sm mt-2">Advanced Diagnostic Equipment</p>
                                </div>
                            </div>

                            {/* Floating cards */}
                            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 hover-lift">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Certified</p>
                                        <p className="text-sm text-gray-600">ISO Standards</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 hover-lift">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Accurate</p>
                                        <p className="text-sm text-gray-600">99.9% Precision</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Info */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg hover-lift">
                        <MapPin className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700 font-medium">
                            153-A Satellite Town, Opp Mubarik Medical Complex, Sargodha
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-red-600 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
