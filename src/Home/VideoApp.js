import { Link } from "react-router-dom";
import HeadingBlock from "../component/HeadingBlock"; 

function VideoApp() {
    return (
        <div class="product-demo">
            <div class="container">
                <div class="video_dec"> 
                    <HeadingBlock shortTitle={'Product Demo'} title={'Smart Management in Action'} description={'Watch our demo video to learn how our app makes society management seamless.'}/>
                </div>
                <div class="video_block">
                    <img src="assets/images/video_img.png" alt="img" />
                </div>
                <div class="free-app">
                    <Link to="#">Try the App for Free</Link>
                </div>
            </div>
        </div>
    );
}

export default VideoApp;