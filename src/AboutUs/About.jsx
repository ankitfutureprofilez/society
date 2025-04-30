import React from 'react'

export default function About() {
    const missionData = [
        {
            icon: "assets/images/mission-icon.png",
            title: "Our Mission",
            description: "To revolutionize how societies operate by delivering an intuitive, all-in-one management solution.",
        },
        {
            icon: "assets/images/vision-icon.png",
            title: "Our Vision",
            description: "To become a trusted partner for societies worldwide, enabling seamless operations and thriving communities.",
        },
    ];


    return (
        <div className="about-sec">
            <div className="container">
                <div className="about_info">
                    <h1>Empowering Societies with Smarter Solutions</h1>
                    <p>Our story began with a simple goal: to make society management effortless for residents, admins, and staff alike. With a blend of technology and community focus, we’ve built a platform that connects and empowers.</p>
                    <span>About Us</span>
                </div>
                <div className="row">
                    {missionData && missionData?.map((item, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="mission_about">
                                <div className="icon">
                                    <img src={item?.icon} alt={item?.title} />
                                </div>
                                <h3>{item?.title}</h3>
                                <p>
                                    {item?.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
