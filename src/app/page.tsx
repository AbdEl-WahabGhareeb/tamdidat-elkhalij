import About from "@/components/AboutComponent/About";
import OurClients from "@/components/OurClients/OurClientsComponent";
import Services from "@/components/ServesicesComponent/Services";
import MainSlider from "@/components/SliderComponent/MainSlider";

export default function Home() {
    return (
        <>
            <div className="mt-16 mb-10">
                <MainSlider />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <OurClients />
            </div>
        </>
    );
}
