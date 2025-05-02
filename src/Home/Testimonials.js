import HeadingBlock from "../component/HeadingBlock";
import MasonryLayout from "./MasonryLayout";

function Testimonials() {
   return (
      <>
         <div className="testimonials">
            <div className="container">
               <HeadingBlock
                  shortTitle={'Testimonials'}
                  title={'Praise from our Happy Clients'}
                  description={'Here are the list of comments, our satisfied client gave us after experiencing our app for more than 6 months'} />

             <MasonryLayout/>
            </div>
            <div className="blur_bottom">

            </div>
         </div>
      </>
   );
}

export default Testimonials;