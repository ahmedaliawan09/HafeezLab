"use client"
import { Target, Eye, Heart } from "lucide-react"

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Hafeez Lab</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Committed to delivering excellence in clinical diagnostics through accuracy, reliability, and advanced
                        technology
                    </p>
                </div>

                {/* Mission, Vision, Values Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Our Mission */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift group transition-all duration-300">
                        <div className="text-center">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-10 h-10 text-red-600" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                To provide accurate, reliable, and timely diagnostic services using state-of-the-art technology and
                                highly trained professionals, ensuring the highest standards of patient care.
                            </p>
                        </div>
                    </div>

                    {/* Our Vision */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift group transition-all duration-300">
                        <div className="text-center">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Eye className="w-10 h-10 text-red-600" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                To be the leading pathology laboratory in the region, recognized for excellence in diagnostic services
                                and commitment to improving healthcare outcomes for our community.
                            </p>
                        </div>
                    </div>

                    {/* Our Values */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift group transition-all duration-300">
                        <div className="text-center">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Heart className="w-10 h-10 text-red-600" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                Integrity, accuracy, compassion, and continuous improvement guide everything we do. We believe in
                                treating every patient with respect and delivering results they can trust.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                        <div className="animate-fade-in-up">
                            <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                            <div className="text-red-100 text-lg">Years Experience</div>
                        </div>
                        <div className="animate-fade-in-up">
                            <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                            <div className="text-red-100 text-lg">Tests Completed</div>
                        </div>
                        <div className="animate-fade-in-up">
                            <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
                            <div className="text-red-100 text-lg">Accuracy Rate</div>
                        </div>
                        <div className="animate-fade-in-up">
                            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-red-100 text-lg">Service Available</div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Hafeez Lab?</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We combine cutting-edge technology with compassionate care to deliver exceptional diagnostic services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Advanced Technology",
                                description: "State-of-the-art equipment for precise results",
                                icon: "🔬",
                            },
                            {
                                title: "Expert Team",
                                description: "Highly qualified and experienced professionals",
                                icon: "👨‍⚕️",
                            },
                            {
                                title: "Quick Results",
                                description: "Fast turnaround time without compromising quality",
                                icon: "⚡",
                            },
                            {
                                title: "Affordable Pricing",
                                description: "Competitive rates for all diagnostic services",
                                icon: "💰",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover-lift group transition-all duration-300"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
