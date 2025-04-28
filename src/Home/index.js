import React from "react";
import Hero from "./Hero";
import Features from "./Feature";
import Whychoose from "./Whychoose";
import Testimonials from "./Testimonials";
import VideoApp from "./VideoApp";
import Stakeholder from "./Stakeholder";
import Ready from "./Ready";
import Faq from "../component/Faq";
import Contact from "./Contact";
 

function Home() {
    return  (
         <>
           <Hero />
           <Features />
           <Whychoose />
           <Testimonials/>
           <VideoApp />
           <Stakeholder/>
           <Ready/>
           <Faq />
            <Contact />
         </> 
    )
}

export default Home; 