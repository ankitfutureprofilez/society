import { useState } from "react";
import HeadingBlock from "./HeadingBlock";

function Faq({ datafaq }) {
    const [active, setActive] = useState(null);
    function handleToggle(idx) {
        setActive(active === idx ? null : idx);
    }

    return (
        <>
            <div className="faq">
                <div className="container">
                    <HeadingBlock shortTitle={'FAQs'} title={'Got Questions?'} description={'You got questions? we got answers'} />
                    <div className="accordion" id="accordion">
                        {
                            datafaq && datafaq.map((item, idx) => (
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