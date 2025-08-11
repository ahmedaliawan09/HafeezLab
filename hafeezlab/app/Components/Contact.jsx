"use client"
import { Phone, Mail, MapPin, Clock, Send, Navigation, ExternalLink } from "lucide-react"
import { Button } from "@/app/Components/ui/button"
import { useEffect, useRef, useState } from "react"

const Contact = () => {
    const mapRef = useRef(null)
    const [map, setMap] = useState(null)
    const [userLocation, setUserLocation] = useState(null)
    const [isLoadingDirections, setIsLoadingDirections] = useState(false)

    // Hafeez Lab coordinates
    const labLocation = [72.69154831035235, 32.084521636464565] // [lng, lat] for Mapbox

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

    useEffect(() => {
        const initMap = () => {
            if (!mapRef.current || !window.mapboxgl) return

            const mapboxToken = process.env.NEXT_PUBLIC_MAP_KEY

            if (!mapboxToken) {
                console.error("Mapbox API key not found. Please add NEXT_PUBLIC_MAP_KEY to your environment variables.")
                return
            }

            const mapInstance = new window.mapboxgl.Map({
                container: mapRef.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: labLocation,
                zoom: 15,
                accessToken: mapboxToken,
            })

            // Add custom marker for Hafeez Lab
            const markerElement = document.createElement("div")
            markerElement.innerHTML = `
        <div style="
          width: 40px; 
          height: 40px; 
          background: #dc2626; 
          border: 3px solid white; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          cursor: pointer;
        ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      `

            new window.mapboxgl.Marker(markerElement)
                .setLngLat(labLocation)
                .setPopup(
                    new window.mapboxgl.Popup({ offset: 25 }).setHTML(`
              <div style="padding: 10px; text-align: center;">
                <h3 style="margin: 0 0 5px 0; color: #dc2626; font-weight: bold;">Hafeez Lab</h3>
                <p style="margin: 0; font-size: 14px; color: #666;">153-A Satellite Town, Sargodha</p>
              </div>
            `),
                )
                .addTo(mapInstance)

            // Add navigation controls
            mapInstance.addControl(new window.mapboxgl.NavigationControl(), "top-right")

            setMap(mapInstance)
        }

        // Load Mapbox GL JS
        if (!window.mapboxgl) {
            const script = document.createElement("script")
            script.src = "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js"
            script.onload = () => {
                const link = document.createElement("link")
                link.href = "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css"
                link.rel = "stylesheet"
                document.head.appendChild(link)
                initMap()
            }
            document.head.appendChild(script)
        } else {
            initMap()
        }
    }, [])

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userPos = [position.coords.longitude, position.coords.latitude] // [lng, lat] for Mapbox
                    setUserLocation(userPos)
                },
                (error) => {
                    console.error("Error getting location:", error)
                    alert("Unable to get your location. Please enable location services.")
                },
            )
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    const getDirections = async () => {
        if (!map || !userLocation) {
            getUserLocation()
            return
        }

        setIsLoadingDirections(true)

        try {
            const mapboxToken = process.env.NEXT_PUBLIC_MAP_KEY

            const response = await fetch(
                `https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation[0]},${userLocation[1]};${labLocation[0]},${labLocation[1]}?geometries=geojson&access_token=${mapboxToken}`,
            )

            const data = await response.json()

            if (data.routes && data.routes.length > 0) {
                const route = data.routes[0]

                // Remove existing route if any
                if (map.getSource("route")) {
                    map.removeLayer("route")
                    map.removeSource("route")
                }

                // Add route to map
                map.addSource("route", {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        properties: {},
                        geometry: route.geometry,
                    },
                })

                map.addLayer({
                    id: "route",
                    type: "line",
                    source: "route",
                    layout: {
                        "line-join": "round",
                        "line-cap": "round",
                    },
                    paint: {
                        "line-color": "#dc2626",
                        "line-width": 4,
                    },
                })

                // Add user location marker
                new window.mapboxgl.Marker({ color: "#3b82f6" })
                    .setLngLat(userLocation)
                    .setPopup(
                        new window.mapboxgl.Popup({ offset: 25 }).setHTML(
                            '<div style="padding: 5px; text-align: center;"><strong>Your Location</strong></div>',
                        ),
                    )
                    .addTo(map)

                // Fit map to show both locations
                const bounds = new window.mapboxgl.LngLatBounds()
                bounds.extend(userLocation)
                bounds.extend(labLocation)
                map.fitBounds(bounds, { padding: 50 })
            } else {
                throw new Error("No route found")
            }
        } catch (error) {
            console.error("Directions request failed:", error)
            alert("Unable to calculate directions. Please try again.")
        } finally {
            setIsLoadingDirections(false)
        }
    }

    const openInGoogleMaps = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${labLocation[1]},${labLocation[0]}`
        window.open(url, "_blank")
    }

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

                <div className="mt-16">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Find Us Here</h4>
                                    <p className="text-gray-600">153-A Satellite Town, Opp Mubarik Medical Complex, Sargodha</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                                        onClick={getDirections}
                                        disabled={isLoadingDirections}
                                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        <span>{isLoadingDirections ? "Getting Directions..." : "Get Directions"}</span>
                                    </Button>
                                    <Button
                                        onClick={openInGoogleMaps}
                                        variant="outline"
                                        className="border-red-600 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors bg-transparent"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Open in Maps</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div ref={mapRef} className="h-96 w-full bg-gray-100" style={{ minHeight: "400px" }} />
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
                            <div className="space-y-2 ">
                                {["About", "Services", "Quality", "Contact"].map((link, index) => (
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
                        <p>&copy; 2025 Hafeez Lab. All rights reserved. | Designed with care for your health.</p>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Contact
