import { Link } from "react-router-dom";

function Ready() {
    return (
        <>
            <div className="newsletter-section">
                <div className="container">
                    <div className="newsletter-block">
                        <div className="row align-items-center">
                            <div className="col-md-8 text-center text-md-start">
                                <h2>Ready to Transform Your Society?</h2>
                                <p>Join the growing number of societies enhancing their operations with our app.</p>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0 text-center text-md-end">
                                <Link to="#">Request a Demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ready;