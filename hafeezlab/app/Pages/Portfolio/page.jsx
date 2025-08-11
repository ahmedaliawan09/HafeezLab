import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import About from "@/app/Components/About";
import Services from "@/app/Components/Services";
import QualityAssurance from "@/app/Components/QualityAssurance";
import Facilities from "@/app/Components/Facilities";
import Contact from "@/app/Components/Contact";
import ImageMarquee from "@/app/Components/marquee"
import WhatsAppFooter from "@/app/Components/footer"
export default function Portfolio() {
    return (
        <main className="min-h-screen bg-white overflow-hidden">
            <div className="w-full max-w-full">
                <Navbar />
                <Hero />
                <About />
                <ImageMarquee />
                <Services />
                <QualityAssurance />
                <Facilities />
                <Contact />
                <WhatsAppFooter />
            </div>
        </main>
    )
}
