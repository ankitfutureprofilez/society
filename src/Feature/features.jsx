import React from 'react'
import { Link } from 'react-router-dom';

export default function features() {
  const featuresData = [
    {
      title: "Member Management",
      slug: "member-management",
      description: "The Member Management feature allows administrators to efficiently manage member profiles, roles, dues, and communications.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "Visitor Management",
      slug: "visitor-management",
      description: "Society management apps offer Visitor Management, allowing residents to pre-register guests for quick digital check-in/out.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "Event Management",
      slug: "event-management",
      description: "Event Management features in society apps simplify event planning and communication, allowing residents to create, promote, and manage events within the community.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "SOS Alerts",
      slug: "sos-alerts",
      description: "SOS Alerts provide a quick way for residents to request emergency assistance within the community.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "Service Provider",
      slug: "service-provider",
      description: "Service Provider Track allows residents to easily find, hire, and manage service providers within their community.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "Complaints",
      slug: "complaints",
      description: "Residence Complaints Track provides a streamlined system for residents to submit complaints or maintenance requests, track their progress, and receive updates on resolution.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "Rent & sell",
      slug: "rent-sell",
      description: "The Rent & Sell feature connects residents looking to rent out or sell their apartments with prospective tenants or buyers within the community.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "Notice Board",
      slug: "notice-board",
      description: "Stay updated with important society announcements and notices on the digital Notice Board.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "Refer",
      slug: "refer",
      description: "The Refer feature allows you to invite others to join the society and earn benefits for successful referrals.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "Polls",
      slug: "polls",
      description: "Share your opinion and participate in society polls.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
    {
      title: "Parcel Management",
      slug: "parcel-management",
      description: "Residents can easily track and manage their incoming and outgoing parcels with the Parcel Management feature.",
      icon: "assets/images/members.png",
      link: "feature-detail.html",
    },
  ];

  return (
    <div className="features-sec">
      <div className="container">
        <div className="features_info">
          <h1>Features That Simplify Society Management</h1>
          <p>Our app provides a suite of powerful tools designed to address the diverse needs of modern societies. With intuitive features and seamless integration, managing your society has never been easier</p>
          <span>Features</span>
        </div>
        <div className="row">
          {featuresData && featuresData?.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <div className="features_items">
                <Link to={`/feature/${item?.slug}`}>
                  <div className="icon">
                    <img src={item?.icon} alt={item?.title} />
                  </div>
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
