import { useState } from "react";
import HeadingBlock from "./HeadingBlock";

function Faq() {
    const [active, setActive] = useState(null);
    function handleToggle(idx) {
        setActive(active === idx ? null : idx);
    }
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
            description: 'If you have any additional questions or need assistance, feel free to contact our support team. You can reach us via email at <a href="mailto:info@futureprofilez.com">info@futureprofilez.com</a> or call us at <a href="tel:+917877089906">+917877089906</a>. We\'re always here to help!'
        }
    ]
    return (
        <>
            <div className="faq">
                <div className="container">
                    <HeadingBlock shortTitle={'FAQs'} title={'Got Questions?'} description={'You got questions? we got answers'} />
                    <div className="accordion" id="accordion">
                        {
                            data.map((item, idx) => (
                                <div key={idx} className="accordion-item">
                                    <h2 id={`heading${idx}`} className="accordion-header">
                                        <button
                                            onClick={() => handleToggle(idx)}
                                            className={`accordion-button ${active === idx ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`}
                                            aria-expanded={active === idx ? 'true' : 'false'}
                                            aria-controls={`collapse${idx}`}>
                                            {item.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${idx}`}
                                        className={`accordion-collapse collapse ${active === idx ? 'show' : ''}`}
                                        aria-labelledby={`heading${idx}`}
                                        data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <div dangerouslySetInnerHTML={{ __html: item.description }} ></div>
                                        </div>
                                    </div>
                                </div>
                            )

                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;