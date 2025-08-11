"use client"
import { Shield, Award, CheckCircle, Zap } from "lucide-react"

const QualityAssurance = () => {
    const qualityItems = [
        {
            title: "PHC Registration",
            description: "Registered with Punjab Healthcare Commission",
            icon: Shield,
            details: "Licensed and regulated by healthcare authorities for safe and reliable diagnostic services",
        },
        {
            title: "ISO Standards",
            description: "Compliant with international quality standards",
            icon: Award,
            details: "Following ISO 15189 medical laboratory standards for quality and competence",
        },
        {
            title: "Quality Control",
            description: "Rigorous internal and external quality audits",
            icon: CheckCircle,
            details: "Regular quality assessments and continuous monitoring of all laboratory processes",
        },
        {
            title: "Advanced Technology",
            description: "State-of-the-art diagnostic equipment",
            icon: Zap,
            details: "Latest automated analyzers and cutting-edge technology for precise results",
        },
    ]

    const certifications = [
        { name: "Punjab Healthcare Commission", status: "Registered", year: "2023" },
        { name: "ISO 15189", status: "Certified", year: "2022" },
        { name: "CAP Accreditation", status: "In Progress", year: "2024" },
        { name: "NABL Certification", status: "Applied", year: "2024" },
    ]

    return (
        <section id="quality" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Quality Assurance &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                            Certifications
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Maintaining the highest standards in laboratory testing through rigorous quality control and international
                        certifications
                    </p>
                </div>

                {/* Quality Items Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {qualityItems.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover-lift group transition-all duration-300 text-center"
                            >
                                {/* Icon */}
                                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-10 h-10 text-red-600" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                                {/* Details */}
                                <p className="text-sm text-gray-500 leading-relaxed">{item.details}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Certifications Table */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
                        <h3 className="text-2xl font-bold text-white text-center">Our Certifications & Accreditations</h3>
                    </div>
                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors duration-300"
                                >
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                                        <p className="text-sm text-gray-600">Since {cert.year}</p>
                                    </div>
                                    <div className="text-right">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${cert.status === "Registered" || cert.status === "Certified"
                                                    ? "bg-green-100 text-green-800"
                                                    : cert.status === "In Progress"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-blue-100 text-blue-800"
                                                }`}
                                        >
                                            {cert.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quality Process */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Quality Process</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Every test goes through multiple quality checkpoints to ensure accuracy and reliability
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {[
                            { step: "1", title: "Sample Collection", desc: "Proper collection protocols" },
                            { step: "2", title: "Sample Processing", desc: "Automated handling systems" },
                            { step: "3", title: "Analysis", desc: "Advanced testing equipment" },
                            { step: "4", title: "Quality Check", desc: "Multi-level verification" },
                            { step: "5", title: "Report Generation", desc: "Accurate result delivery" },
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                                    {process.step}
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                                <p className="text-sm text-gray-600">{process.desc}</p>
                                {index < 4 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-red-300 transform translate-x-3"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quality Metrics */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover-lift">
                        <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
                        <div className="text-gray-600">Accuracy Rate</div>
                        <div className="text-sm text-gray-500 mt-2">Based on external quality assessments</div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover-lift">
                        <div className="text-4xl font-bold text-red-600 mb-2">24hrs</div>
                        <div className="text-gray-600">Average TAT</div>
                        <div className="text-sm text-gray-500 mt-2">Most routine tests completed within 24 hours</div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover-lift">
                        <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                        <div className="text-gray-600">Quality Control</div>
                        <div className="text-sm text-gray-500 mt-2">All tests undergo quality control checks</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualityAssurance
