"use client"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/app/Components/ui/button"

const Contact = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: "Phone Numbers",
            details: ["048-3258633", "03450018111"],
            description: "Call us for appointments and inquiries",
        },
        {
            icon: MapPin,
            title: "Address",
            details: ["153-A Satellite Town", "Opp Mubarik Medical Complex", "Sargodha"],
            description: "Visit us at our convenient location",
        },
        {
            icon: Clock,
            title: "Working Hours",
            details: ["Mon-Sat: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 6:00 PM", "Emergency: 24/7"],
            description: "We're here when you need us",
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@hafeezlab.com", "reports@hafeezlab.com"],
            description: "Send us your queries and feedback",
        },
    ]

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Us</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get in touch with us for appointments, inquiries, or any assistance you need
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                            <p className="text-gray-600 mb-8">
                                We're here to help you with all your diagnostic needs. Contact us through any of the following methods:
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon
                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 shadow-md hover-lift transition-all duration-300 group"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-6 h-6 text-red-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                                                <div className="space-y-1 mb-2">
                                                    {info.details.map((detail, detailIndex) => (
                                                        <p key={detailIndex} className="text-gray-700 font-medium">
                                                            {detail}
                                                        </p>
                                                    ))}
                                                </div>
                                                <p className="text-sm text-gray-500">{info.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                        placeholder="Your first name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                        placeholder="Your last name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                    placeholder="Your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                    placeholder="Your email address"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors">
                                    <option>Select a service</option>
                                    <option>General Health Checkup</option>
                                    <option>Blood Tests</option>
                                    <option>Urine Analysis</option>
                                    <option>Specialized Tests</option>
                                    <option>Home Collection</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                    placeholder="Tell us how we can help you..."
                                ></textarea>
                            </div>

                            <Button className="w-full gradient-red text-white py-3 rounded-lg font-semibold hover-lift pulse-red flex items-center justify-center space-x-2">
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-16">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-red-700 mb-2">Location Map</h4>
                                <p className="text-red-600">153-A Satellite Town, Opp Mubarik Medical Complex, Sargodha</p>
                                <p className="text-red-500 text-sm mt-2">Interactive map will be embedded here</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-20 bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Logo and Description */}
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">HL</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Hafeez Lab</h3>
                                    <p className="text-gray-400 text-sm">Excellence in Diagnostics</p>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                A disease known is half cured. Your trusted partner in healthcare diagnostics.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <div className="space-y-2">
                                {["About Us", "Our Services", "Quality Assurance", "Contact Us"].map((link, index) => (
                                    <a
                                        key={index}
                                        href={`#${link.toLowerCase().replace(" ", "")}`}
                                        className="block text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                            <div className="space-y-3 text-gray-300">
                                <p>048-3258633, 03450018111</p>
                                <p>153-A Satellite Town, Sargodha</p>
                                <p>info@hafeezlab.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Hafeez Lab. All rights reserved. | Designed with care for your health.</p>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Contact
