import React, { useState } from "react";

export const ApplicationForm = ({isOpen, closePopup}) => {
  const [selectedCV, setSelectedCV] = useState("alitufan-cv");
  const [coverLetter, setCoverLetter] = useState(
    "Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL. In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"
  );

  return (
    <>
    <div className="contactus-popup"style={{ display: isOpen ? 'block' : 'none' }}>
    <div className="contact-popup">
      <i className="la la-close close-contact" onClick={closePopup}></i>
      <h3>Application Form</h3>
      <form>
        <div className="popup-field">
          <input type="text" placeholder="Tera Planer" />
          <i className="la la-user"></i>
        </div>
        <div className="popup-field">
          <input type="text" placeholder="demo@jobhunt.com" />
          <i className="la la-envelope-o"></i>
        </div>
        <div className="popup-field">
          <input type="text" placeholder="+90 538 845 09 85" />
          <i className="la la-phone"></i>
        </div>
        <div className="popup-field">
        <select
              value={selectedCV}
              onChange={(e) => setSelectedCV(e.target.value)}
              className="chosen-single chosen-container chosen-container-single chosen-container-single-nosearch"
            >
              <option value="alitufan-cv">alitufan-cv</option>
              <option value="alitufan-cv old">alitufan-cv old</option>
            </select>
        </div>
        <div className="popup-field">
        <textarea placeholder="Cover letter"></textarea>
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  </div>
  </>
  );
};


