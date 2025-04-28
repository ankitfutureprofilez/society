import HeadingBlock from "../component/HeadingBlock";

function Stakeholder() {
  return (
    <div className="user-role">
      <div className="container">  
        <HeadingBlock
          shortTitle={'User Role'}
          title={'Built for Every Stakeholder'}
          description={
            <>
              <p>
                Our <strong>society management app</strong> simplifies <strong>community living</strong> for everyone.
                Residents enjoy easy communication, management streamlines operations, security enhances monitoring.
              </p>
              <p>
                A smarter, safer, and more efficient society starts here!
              </p>
            </>
          }
        />

        <div className="row">
          <div className="col-md-4">
            <div className="stakeholder-item">
              <img src="assets/images/resident.jpg" alt="img" />
              <div className="stakeholder-content">
                <div className="bottom-dec">
                  <h3>Residents</h3>
                  <p>Stay informed and simplify daily living</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stakeholder-item">
              <img src="assets/images/society-admin-new.png" alt="img" />
              <div className="stakeholder-content">
                <div className="bottom-dec">
                  <h3>Society Admins</h3>
                  <p>Simplify operations and improve transparency</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stakeholder-item">
              <img src="assets/images/security-staff.jpg" alt="img" />
              <div className="stakeholder-content">
                <div className="bottom-dec">
                  <h3>Security Staff</h3>
                  <p>Streamline parcel and visitor management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stakeholder;