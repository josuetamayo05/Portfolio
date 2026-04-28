import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import { siteData } from "../data/siteData";
import Portfolio from "../components/sections/Portfolio";
import FAQ from "../components/sections/FAQ";


export default function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <Portfolio />
            <Process />
            <FAQ items={siteData.faq} />
        </>
    );
}