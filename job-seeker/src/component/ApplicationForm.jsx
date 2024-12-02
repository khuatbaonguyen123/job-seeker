import React, { useState } from "react";

export const ApplicationForm = () => {
  const [selectedCV, setSelectedCV] = useState("alitufan-cv");
  const [coverLetter, setCoverLetter] = useState(
    "Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL. In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"
  );

  return (
    <div className="col-lg-9 column">
    <div className="padding-left">
    <div className="manage-jobs-sec">
      <h3>CV & Cover Letter</h3>
      <div className="coverletter-sec">
        <form>
          <div className="row">
            <div className="col-lg-6">
              <span className="pf-title">Select Your CV</span>
              <div className="pf-field">
                <select
                  value={selectedCV}
                  onChange={(e) => setSelectedCV(e.target.value)}
                  className="chosen-single chosen-container chosen-container-single chosen-container-single-nosearch"
                >
                  <option value="alitufan-cv">alitufan-cv</option>
                  <option value="alitufan-cv old">alitufan-cv old</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12">
              <span className="pf-title">Cover Letter</span>
              <div className="pf-field">
                <textarea
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  rows="6"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <button type="button">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};


