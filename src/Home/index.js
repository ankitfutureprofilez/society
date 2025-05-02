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
import MasonryLayout from "./MasonryLayout";


function Home() {

  const data = [
    {
        title: 'Is the app secure?',
        description: "Yes, your privacy and security are our top priorities. The app uses advanced encryption and data protection protocols to ensure that all your information is secure. We also regularly update our security measures to stay ahead of potential threats."
    },
    {
        title: 'Can it be customized for my society?',
        description: "Absolutely! The app offers a range of customizable features to suit your society's specific needs. You can tailor things like notifications, community announcements, event management, and more, to ensure the app aligns with your society's requirements."
    },
    {
        title: 'What devices does it work on?',
        description: "The app is compatible with both Android and iOS devices, and it works seamlessly across smartphones, tablets, and desktops. Whether you're using an Android phone, iPhone, or a computer, you'll have full access to all the app’s features."
    },
    {
        title: 'I still have some more queries, where do I contact?',
        description: 'If you have any additional questions or need assistance, feel free to contact our support team. You can reach us via email at <a href="mailto:manageyoursociety@gmail.com">manageyoursociety@gmail.com</a> or call us at <a href="tel:+918899999987">+918899999987</a>. We\'re always here to help!'
    }
]
  return (
    <>
      <Hero />
      <Features />
      <Whychoose />
      <Testimonials />
      <VideoApp />
      <Stakeholder />
      <Ready />
      <Faq  datafaq={data}/>
      <Contact />
    </>
  )
}

export default Home; 