import HeadingBlock from "../component/HeadingBlock";
import { Link } from "react-router-dom";

function Features() {
    return (
        <>
            <div className="feature">
                <div className="container"> 
                  <HeadingBlock 
                  shortTitle={'Features'} 
                  title={'Features That Make a Difference'} 
                  description={"Our app is designed to address your society's unique needs by providing tools that simplify management"} 
                />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="app_management">
                                <div className="left_dec">
                                    <div>
                                        <div className="icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.1786 7.43149L15.629 3.27926C15.5176 3.21793 15.3924 3.18578 15.2652 3.18578C15.1379 3.18578 15.0128 3.21793 14.9013 3.27926L7.35177 7.43149C7.2334 7.49666 7.13469 7.5924 7.06595 7.70873C6.9972 7.82506 6.96094 7.9577 6.96094 8.09282C6.96094 8.22795 6.9972 8.36059 7.06595 8.47692C7.13469 8.59325 7.2334 8.68899 7.35177 8.75416L14.5102 12.6912V20.7835L12.2182 19.5228L11.4904 20.8447L14.9013 22.7207C15.0128 22.7821 15.1379 22.8142 15.2652 22.8142C15.3924 22.8142 15.5176 22.7821 15.629 22.7207L23.1786 18.5685C23.297 18.5034 23.3957 18.4076 23.4645 18.2913C23.5333 18.175 23.5696 18.0423 23.5696 17.9072V8.09282C23.5696 7.95768 23.5333 7.82502 23.4645 7.70869C23.3957 7.59236 23.297 7.49663 23.1786 7.43149ZM15.2652 4.80275L21.2481 8.09282L15.2652 11.3829L9.28218 8.09282L15.2652 4.80275ZM22.0597 17.461L16.0201 20.7828V12.6905L22.0597 9.36869V17.461Z" fill="#1F3C88" />
                                                <path d="M8.47027 13H2.43066V11.4901H8.47027V13ZM9.98017 19.0396H3.94057V17.5297H9.98017V19.0396ZM11.4901 16.0198H5.45047V14.5099H11.4901V16.0198Z" fill="#1F3C88" />
                                            </svg>
                                        </div>
                                        <h3>Member &nbsp; Management</h3>
                                        <p>The Member Management feature allows administrators to efficiently manage member profiles, roles, dues, and communications.</p>
                                    </div>
                                    <div className="learn-more">
                                        <Link to="#">
                                            Learn More
                                            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.3536 4.85355C17.5488 4.65829 17.5488 4.34171 17.3536 4.14645L14.1716 0.964466C13.9763 0.769204 13.6597 0.769204 13.4645 0.964466C13.2692 1.15973 13.2692 1.47631 13.4645 1.67157L16.2929 4.5L13.4645 7.32843C13.2692 7.52369 13.2692 7.84027 13.4645 8.03553C13.6597 8.2308 13.9763 8.2308 14.1716 8.03553L17.3536 4.85355ZM0 5H17V4H0V5Z" fill="#1F3C88" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="media_right">
                                    <img src="assets/images/residence.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="app_management">
                                <div className="left_dec">
                                    <div>
                                        <div className="icon">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_595_1036)">
                                                    <path d="M7.0376 5.17041C7.84372 5.96345 8.88492 6.50456 10.0226 6.72178C11.1603 6.93899 12.3408 6.82202 13.4068 6.38641" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.5625 6.82813C6.5625 7.69422 6.92467 8.52482 7.56932 9.13726C8.21398 9.74969 9.08833 10.0938 10 10.0938C10.9117 10.0938 11.786 9.74969 12.4307 9.13726C13.0753 8.52482 13.4375 7.69422 13.4375 6.82813C13.4375 5.96203 13.0753 5.1314 12.4307 4.51898C11.786 3.90656 10.9117 3.5625 10 3.5625C9.08833 3.5625 8.21398 3.90656 7.56932 4.51898C6.92467 5.1314 6.5625 5.96203 6.5625 6.82813Z" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M0.625 5.34454V1.78125C0.625 1.46631 0.756696 1.16426 0.991117 0.941561C1.22553 0.718861 1.54348 0.59375 1.875 0.59375H5.625" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M19.375 5.34454V1.78125C19.375 1.46631 19.2433 1.16426 19.0089 0.941561C18.7745 0.718861 18.4565 0.59375 18.125 0.59375H14.375" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M0.625 13.6562V17.2188C0.625 17.5337 0.756696 17.8358 0.991117 18.0585C1.22553 18.2812 1.54348 18.4063 1.875 18.4063H5.625" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M19.375 13.6562V17.2188C19.375 17.5337 19.2433 17.8358 19.0089 18.0585C18.7745 18.2812 18.4565 18.4063 18.125 18.4063H14.375" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M15.2809 14.8437C14.8985 13.8028 14.1846 12.9008 13.2385 12.2624C12.2923 11.6241 11.1606 11.2812 10.0001 11.2812C8.83964 11.2812 7.70786 11.6241 6.76167 12.2624C5.81548 12.9008 5.1017 13.8028 4.71924 14.8437" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_595_1036">
                                                        <rect width="20" height="19" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                        <h3>Visitor Management</h3>
                                        <p>Pre-register visitors and get real-time alerts</p>
                                    </div>
                                    <div className="learn-more">
                                        <Link to="#">
                                            Learn More
                                            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.3536 4.85355C17.5488 4.65829 17.5488 4.34171 17.3536 4.14645L14.1716 0.964466C13.9763 0.769204 13.6597 0.769204 13.4645 0.964466C13.2692 1.15973 13.2692 1.47631 13.4645 1.67157L16.2929 4.5L13.4645 7.32843C13.2692 7.52369 13.2692 7.84027 13.4645 8.03553C13.6597 8.2308 13.9763 8.2308 14.1716 8.03553L17.3536 4.85355ZM0 5H17V4H0V5Z" fill="#1F3C88" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="media_right">
                                    <img src="assets/images/visitor-managment.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="app_management">
                                <div className="left_dec">
                                    <div>
                                        <div className="icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.1786 7.43149L15.629 3.27926C15.5176 3.21793 15.3924 3.18578 15.2652 3.18578C15.1379 3.18578 15.0128 3.21793 14.9013 3.27926L7.35177 7.43149C7.2334 7.49666 7.13469 7.5924 7.06595 7.70873C6.9972 7.82506 6.96094 7.9577 6.96094 8.09282C6.96094 8.22795 6.9972 8.36059 7.06595 8.47692C7.13469 8.59325 7.2334 8.68899 7.35177 8.75416L14.5102 12.6912V20.7835L12.2182 19.5228L11.4904 20.8447L14.9013 22.7207C15.0128 22.7821 15.1379 22.8142 15.2652 22.8142C15.3924 22.8142 15.5176 22.7821 15.629 22.7207L23.1786 18.5685C23.297 18.5034 23.3957 18.4076 23.4645 18.2913C23.5333 18.175 23.5696 18.0423 23.5696 17.9072V8.09282C23.5696 7.95768 23.5333 7.82502 23.4645 7.70869C23.3957 7.59236 23.297 7.49663 23.1786 7.43149ZM15.2652 4.80275L21.2481 8.09282L15.2652 11.3829L9.28218 8.09282L15.2652 4.80275ZM22.0597 17.461L16.0201 20.7828V12.6905L22.0597 9.36869V17.461Z" fill="#1F3C88" />
                                                <path d="M8.47027 13H2.43066V11.4901H8.47027V13ZM9.98017 19.0396H3.94057V17.5297H9.98017V19.0396ZM11.4901 16.0198H5.45047V14.5099H11.4901V16.0198Z" fill="#1F3C88" />
                                            </svg>
                                        </div>
                                        <h3>Parcel Management</h3>
                                        <p>Log, track, and manage parcels seamlessly</p>
                                    </div>
                                    <div className="learn-more">
                                        <Link to="#">
                                            Learn More
                                            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.3536 4.85355C17.5488 4.65829 17.5488 4.34171 17.3536 4.14645L14.1716 0.964466C13.9763 0.769204 13.6597 0.769204 13.4645 0.964466C13.2692 1.15973 13.2692 1.47631 13.4645 1.67157L16.2929 4.5L13.4645 7.32843C13.2692 7.52369 13.2692 7.84027 13.4645 8.03553C13.6597 8.2308 13.9763 8.2308 14.1716 8.03553L17.3536 4.85355ZM0 5H17V4H0V5Z" fill="#1F3C88" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="media_right">
                                    <img src="assets/images/parcel-management-app.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="app_management">
                                <div className="left_dec">
                                    <div>
                                        <div className="icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_595_1229)">
                                                    <path d="M9.12491 10.0127C8.63416 10.5983 8.33474 11.3202 8.26712 12.0812C8.19947 12.8422 8.36683 13.6056 8.74658 14.2685C9.08241 14.2932 9.41508 14.1899 9.67791 13.9794C9.94066 13.7689 10.1141 13.4667 10.1632 13.1335C10.6661 13.4084 11.08 13.8209 11.3565 14.3228C11.633 14.8247 11.7605 15.395 11.7241 15.9669C11.7245 16.4142 11.6368 16.8572 11.466 17.2705C11.2952 17.6839 11.0446 18.0596 10.7286 18.3762C10.4125 18.6927 10.0372 18.9438 9.62408 19.1153C9.21091 19.2867 8.76808 19.375 8.32075 19.3752C7.42167 19.3631 6.56281 19.0006 5.927 18.3648C5.29119 17.729 4.92867 16.8701 4.91659 15.971C4.80286 14.6411 5.16282 13.3138 5.93286 12.2235C6.70291 11.1333 7.8335 10.3502 9.12491 10.0127Z" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M1.96996 7.5892H2.23246L4.11246 9.93917C4.82443 7.76812 4.73304 5.41357 3.85496 3.3042C5.49179 3.38659 7.08002 3.88814 8.46729 4.76076C9.85463 5.63337 10.9944 6.84779 11.7775 8.28753L13.4825 6.6267C14.4786 7.64362 15.1648 8.92308 15.4608 10.3155C15.7568 11.7079 15.6505 13.1558 15.1541 14.4901C14.6578 15.8242 13.792 16.9897 12.6579 17.8501C11.5238 18.7105 10.1682 19.2303 8.74963 19.349C7.33102 19.4676 5.90796 19.18 4.64673 18.5198C3.38551 17.8597 2.33821 16.8542 1.62721 15.621C0.916218 14.3877 0.570885 12.9775 0.631577 11.5552C0.69227 10.133 1.15648 8.75742 1.96996 7.5892Z" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M16.875 0.625L19.375 3.125L16.875 5.625" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M19.375 3.125H13.75" stroke="#1F3C88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_595_1229">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                        <h3>SOS Alerts</h3>
                                        <p>Emergency support at the push of a button</p>
                                    </div>
                                    <div className="learn-more">
                                        <Link to="#">
                                            Learn More
                                            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.3536 4.85355C17.5488 4.65829 17.5488 4.34171 17.3536 4.14645L14.1716 0.964466C13.9763 0.769204 13.6597 0.769204 13.4645 0.964466C13.2692 1.15973 13.2692 1.47631 13.4645 1.67157L16.2929 4.5L13.4645 7.32843C13.2692 7.52369 13.2692 7.84027 13.4645 8.03553C13.6597 8.2308 13.9763 8.2308 14.1716 8.03553L17.3536 4.85355ZM0 5H17V4H0V5Z" fill="#1F3C88" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="media_right">
                                    <img src="assets/images/sos-app.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="free-app">
                        <Link to="features.html">View all</Link>
                    </div>
                </div> 
                </div>

        </>
    );
}

export default Features;