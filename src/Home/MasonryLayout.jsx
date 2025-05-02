import React from "react";
import Masonry from "react-masonry-css";


const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    992: 2,
    767: 1
};

const MasonryLayout = () => {
    return (
        <div className="p-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                <div className="col">
                    <div className="testimonials_col_item">
                        <p>This app has made our society management so much easier! From visitor tracking to parcel notifications, everything is now automated. Residents</p>
                        <div className="profile-detail">
                            <img src="assets/images/profile.png" alt="img" />
                            <div className="author_name">Sujal Soni</div>
                            <div className="role">Society Admin</div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="testimonials_col_item">
                        <p>Staying updated on community news and events is so much easier now. I love getting notifications right on my phone!</p>

                        <div className="profile-detail">
                            <img src="assets/images/profile.png" alt="img" />
                            <div className="author_name">Abrar Khan</div>
                            <div className="role">Residents</div>
                        </div>
                    </div>

                </div>

                <div className="col">
                    <div className="testimonials_col_item">
                        <p>This app has helped me feel more connected to my community. I can easily see what's happening and connect with my neighbors</p>
                        <div className="profile-detail">
                            <img src="assets/images/profile.png" alt="img" />
                            <div className="author_name">Sachin Silawat</div>
                            <div className="role">Residents</div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="testimonials_col_item">
                        <p>As the secretary, I used to spend hours managing paperwork. This app has streamlined everything, saving me valuable time and effort. It's a game-changer</p>

                        <div className="profile-detail">
                            <img src="assets/images/profile.png" alt="img" />
                            <div className="author_name">Ahana guaswami</div>
                            <div className="role">Secretary</div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="testimonials_col_item">
                        <p>This app has significantly improved the overall security of our society. It helps us keep track of everything and respond to situations more effectively.</p>
                        <div className="profile-detail">
                            <img src="assets/images/profile.png" alt="img" />
                            <div className="author_name">Sumit Prajapati</div>
                            <div className="role">Security guard</div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="testimonials_col_item">
                        <p> Submitting maintenance requests through the app is so simple. I just take a picture and submit it, and the management team responds quickly.</p>

                        <div className="profile-detail">
                            <img src="assets/images/profile.png" alt="img" />
                            <div className="author_name">Sorabh Meena</div>
                            <div className="role">Residents</div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="testimonials_col_item">
                        <p>Creating and managing our annual budget is so much easier with the app. We can easily track income and expenses, and make adjustments as needed</p>
                        <div className="profile-detail">
                            <img src="assets/images/profile.png" alt="img" />
                            <div className="author_name">Shrivastav</div>
                            <div className="role">Society finances</div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="testimonials_col_item">
                        <p> Submitting maintenance requests through the app is so simple. I just take a picture and submit it, and the management team responds quickly.</p>

                        <div className="profile-detail">
                            <img src="assets/images/profile.png" alt="img" />
                            <div className="author_name">Sorabh Meena</div>
                            <div className="role">Residents</div>
                        </div>
                    </div>

                </div>
            </Masonry>
        </div>
    );
};

export default MasonryLayout;
