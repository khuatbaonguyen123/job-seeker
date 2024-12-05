import React from "react";

//sample
const companyImages = [
  "images/resource/cc1.jpg",
  "images/resource/cc2.jpg",
  "images/resource/cc3.jpg",
  "images/resource/cc4.jpg",
  "images/resource/cc5.jpg",
];

export const Companies = () => {
  return (
    <section>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>Companies We've Helped</h2>
                <span>
                  Some of the companies we've helped recruit excellent applicants over the years.
                </span>
              </div>
              <div className="comp-sec">
                {/* Render company images dynamically */}
                {companyImages.map((image, index) => (
                  <div key={index} className="company-img">
                    <a href="#" title={`Company ${index + 1}`}>
                      <img src={image} alt={`Company ${index + 1}`} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
