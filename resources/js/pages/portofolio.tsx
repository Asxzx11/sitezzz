import Navbar from "@/components/portofolio/navbar";
import PortofolioLayout from "@/layouts/portofolio-layout";
import About from "@/sections/About";
import Certificate from "@/sections/Certificate";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";


export default function Portofolio() {
    return (
        <PortofolioLayout>
            <Navbar/>
            <Hero/>
            <About/>
            <Certificate/>
            <Contact/>
        </PortofolioLayout>
    );
}