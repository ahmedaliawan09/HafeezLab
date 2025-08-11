"use client"
import { useState, useEffect } from "react"
import { Button } from "@/app/Components/ui/button"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Quality Updates", href: "#quality" },
        { name: "Facilities", href: "#facilities" },
        { name: "Contact", href: "#contact" },
    ]

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">HL</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Hafeez Lab</h1>
                            <p className="text-xs text-gray-600">Excellence in Diagnostics</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ))}
                        <Button
                            onClick={() => scrollToSection("#contact")}
                            className="gradient-red text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 pulse-red"
                        >
                            Book Appointment
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <span
                                className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3 pt-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-left text-gray-700 hover:text-red-600 font-medium py-2 transition-colors duration-200"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection("#contact")}
                                className="gradient-red text-white px-6 py-3 rounded-full mt-4 w-full"
                            >
                                Book Appointment
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
