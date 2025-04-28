import GetTouch from "../component/GetTouch"; 
import HeadingBlock from "../component/HeadingBlock";

function Contact() {
    return ( 
        <div className="gettouch-sec home-contact">
                <div className="container">
                    <HeadingBlock shortTitle={'Contact us'} title={'Get In Touch'} description={"Have a question or need assistance? We're here to help."} />
                    <GetTouch />                    
                </div>
            </div>
     );
}

export default Contact;