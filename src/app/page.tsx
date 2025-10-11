import About from "@/components/AboutComponent/About";
import Footer from "@/components/FooterComponent/Footer";
import OurClients from "@/components/OurClients/OurClientsComponent";
import Services from "@/components/ServesicesComponent/Services";
import MainSlider from "@/components/SliderComponent/MainSlider";

export default function Home() {
    return (
        <>
            <div className="mt-12 mb-10">
                <MainSlider />
            </div>
            <div>
                <About />
            </div>
            <div className="bg-gray-100">
                <Services />
            </div>
            <div>
                <OurClients />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
