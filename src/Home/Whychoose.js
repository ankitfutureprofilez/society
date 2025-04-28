import HeadingBlock from "../component/HeadingBlock";

function Whychoose() {
    return (
        <>
            <div className="app_benefits">
                <div className="container"> 
                    <HeadingBlock shortTitle={'App benefits'} title={'Why Choose Our App?'} description={'Our app simplifies society management. It helps with finances, maintenance, resident communication, and security. Manage your community easily and effectively with our app'}/>

                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="benefits_item">
                                <div className="icon">
                                    <img src="assets/images/setting.png" alt="img" />
                                </div>
                                <h3>Save Time with Automated Processes.</h3>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="benefits_item">
                                <div className="icon">
                                    <img src="assets/images/security.png" alt="img" />
                                </div>
                                <h3>Enhance Security and Transparency.</h3>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="benefits_item">
                                <div className="icon">
                                    <img src="assets/images/boost.png" alt="img" />
                                </div>
                                <h3>Boost Resident Satisfaction and Engagement</h3>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="benefits_item">
                                <div className="icon">
                                    <img src="assets/images/boost.png" alt="img" />
                                </div>
                                <h3>Streamline Operations for Society Admins.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whychoose;