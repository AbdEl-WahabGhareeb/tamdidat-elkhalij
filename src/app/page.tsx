import AboutComp from "@/components/AboutComponent/AboutComp";
import Footer from "@/components/FooterComponent/Footer";
import OurClients from "@/components/OurClients/OurClientsComponent";
import ServicesComp from "@/components/ServesicesComponent/ServicesComp";
import MainSlider from "@/components/SliderComponent/MainSlider";

export default function Home() {
    
    return (
        <>
            <div className="mt-12 mb-10">
                <MainSlider />
            </div>
            <div>
                <AboutComp />
            </div>
            <div className="bg-gray-100">
                <ServicesComp />
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
