"use client"
import { Snowflake, Droplets, Bath, Users } from "lucide-react"

const Facilities = () => {
    const facilities = [
        {
            title: "Air-Conditioned",
            description: "Comfortable waiting area with climate control for your convenience",
            icon: Snowflake,
            details: "Maintained at optimal temperature year-round for patient comfort",
        },
        {
            title: "Drinking Water",
            description: "Clean and filtered drinking water available for all visitors",
            icon: Droplets,
            details: "Pure, filtered water stations throughout the facility",
        },
        {
            title: "Clean Washrooms",
            description: "Well-maintained and hygienic restroom facilities",
            icon: Bath,
            details: "Regularly sanitized and equipped with modern amenities",
        },
        {
            title: "Separate Areas",
            description: "Dedicated male and female waiting and consultation areas",
            icon: Users,
            details: "Privacy-focused design with separate spaces for comfort",
        },
    ]

    const additionalFacilities = [
        { name: "Free Parking", description: "Ample parking space available" },
        { name: "Wheelchair Access", description: "Fully accessible for disabled patients" },
        { name: "Emergency Services", description: "24/7 emergency testing available" },
        { name: "Home Collection", description: "Sample collection at your doorstep" },
        { name: "Digital Reports", description: "Online report delivery system" },
        { name: "Consultation Rooms", description: "Private rooms for doctor consultations" },
    ]

    return (
        <section id="facilities" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Facilities</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comfortable and modern amenities for our patients, ensuring a pleasant experience during your visit
                    </p>
                </div>

                {/* Main Facilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {facilities.map((facility, index) => {
                        const IconComponent = facility.icon
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-8 hover-lift group transition-all duration-300 text-center border border-gray-100 hover:border-red-200 hover:bg-red-50"
                            >
                                {/* Icon */}
                                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-10 h-10 text-red-600" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>

                                {/* Details */}
                                <p className="text-sm text-gray-500 leading-relaxed">{facility.details}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Additional Facilities */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 md:p-12 mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Additional Amenities</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We provide comprehensive facilities to ensure your comfort and convenience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalFacilities.map((facility, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover-lift transition-all duration-300 group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-3 h-3 bg-red-600 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">{facility.name}</h4>
                                        <p className="text-sm text-gray-600">{facility.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Facility Images Placeholder */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="relative group">
                        <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center hover-lift">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Snowflake className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-red-700 font-medium">Waiting Area</p>
                                <p className="text-red-600 text-sm mt-2">Climate Controlled Environment</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center hover-lift">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Bath className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-red-700 font-medium">Clean Facilities</p>
                                <p className="text-red-600 text-sm mt-2">Hygienic Washrooms</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center hover-lift">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-red-700 font-medium">Consultation Rooms</p>
                                <p className="text-red-600 text-sm mt-2">Private & Comfortable</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operating Hours */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Operating Hours</h3>
                        <p className="text-gray-600">We're here to serve you with flexible timing</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Regular Hours</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Monday - Saturday</span>
                                    <span className="font-medium text-gray-900">8:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Sunday</span>
                                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Emergency Services</h4>
                            <div className="bg-red-50 rounded-xl p-6">
                                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                                <p className="text-gray-700 font-medium">Emergency Testing Available</p>
                                <p className="text-sm text-gray-600 mt-2">Call us for urgent diagnostic needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facilities
