import About from "@/components/AboutComponent/About";
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
        </>
    );
}
