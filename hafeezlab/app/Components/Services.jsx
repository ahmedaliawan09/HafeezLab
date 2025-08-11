"use client"
import { Microscope, FlaskConical, TestTube, BugIcon as Bacteria, Eye } from "lucide-react"

const Services = () => {
    const services = [
        {
            title: "Hematology",
            description: "Complete blood count, blood typing, coagulation studies, and blood disorder diagnosis",
            icon: TestTube,
            image: "/card1.png",
            features: ["CBC", "Blood Typing", "Coagulation Studies", "Blood Smear Analysis"],
        },
        {
            title: "Special Chemistry",
            description: "Hormone analysis, tumor markers, cardiac markers, and specialized biochemical tests",
            icon: FlaskConical,
            image: "/card4.png",
            features: ["Hormone Tests", "Tumor Markers", "Cardiac Markers", "Therapeutic Drug Monitoring"],
        },
        {
            title: "General Chemistry",
            description: "Basic metabolic panel, liver function, kidney function, and routine biochemical analysis",
            icon: Microscope,
            image: "/card3.png",
            features: ["Metabolic Panel", "Liver Function", "Kidney Function", "Lipid Profile"],
        },
        {
            title: "Microbiology",
            description: "Bacterial culture, antibiotic sensitivity, fungal identification, and infection diagnosis",
            icon: Bacteria,
            image: "/card2.png",
            features: ["Bacterial Culture", "Antibiotic Sensitivity", "Fungal Tests", "Parasitology"],
        },
        {
            title: "Microscopy",
            description: "Histopathology, cytology, tissue examination, and cellular analysis services",
            icon: Eye,
            image: "/card5.png",
            features: ["Histopathology", "Cytology", "Tissue Biopsy", "Fine Needle Aspiration"],
        },
    ]

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive diagnostic services with advanced technology and expert analysis for accurate results
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group transition-all duration-300 border border-gray-100"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Icon and Title */}
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-6 h-6 text-red-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Learn More Button */}
                                    <button className="mt-4 text-red-600 font-semibold hover:text-red-700 transition-colors duration-200 group-hover:translate-x-1 transform transition-transform">
                                        Learn More →
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Additional Services */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer a comprehensive range of specialized tests and diagnostic services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Immunology", tests: "25+ Tests" },
                            { name: "Serology", tests: "30+ Tests" },
                            { name: "Molecular Biology", tests: "15+ Tests" },
                            { name: "Toxicology", tests: "20+ Tests" },
                            { name: "Endocrinology", tests: "35+ Tests" },
                            { name: "Cardiology", tests: "18+ Tests" },
                            { name: "Oncology", tests: "22+ Tests" },
                            { name: "Genetics", tests: "12+ Tests" },
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 shadow-md hover-lift transition-all duration-300">
                                <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                                <p className="text-sm text-red-600 font-medium">{service.tests}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Need a Specific Test?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Can't find the test you're looking for? Contact us directly and we'll help you with specialized testing
                            requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                                Contact Us
                            </button>
                            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                                View All Tests
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
