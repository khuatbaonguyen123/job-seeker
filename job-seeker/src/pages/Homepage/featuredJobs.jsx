import React, { useState } from "react";

//sample
const featuredJobs = [
  {
    companyLogo: "images/resource/l1.png",
    title: "Web Designer / Developer",
    companyName: "Massimo Artemisis",
    location: "Sacramento, California",
    type: "FULL TIME",
    typeClass: "ft",
  },
  {
    companyLogo: "images/resource/l2.png",
    title: "Marketing Director",
    companyName: "Tix Dog",
    location: "Rennes, France",
    type: "PART TIME",
    typeClass: "pt",
  },
  {
    companyLogo: "images/resource/l3.png",
    title: "C Developer (Senior) C .Net",
    companyName: "StarHealth",
    location: "London, United Kingdom",
    type: "FULL TIME",
    typeClass: "ft",
  },
  {
    companyLogo: "images/resource/l4.png",
    title: "Application Developer For Android",
    companyName: "Altes Bank",
    location: "Istanbul, Turkey",
    type: "FREELANCE",
    typeClass: "fl",
  },
  {
    companyLogo: "images/resource/l5.png",
    title: "Regional Sales Manager South east Asia",
    companyName: "Vincent",
    location: "Ajax, Ontario",
    type: "TEMPORARY",
    typeClass: "tp",
  },
  {
    companyLogo: "images/resource/l6.png",
    title: "Social Media and Public Relation Executive",
    companyName: "MediaLab",
    location: "Ankara / Turkey",
    type: "FULL TIME",
    typeClass: "ft",
  },
];

export const FeaturedJobs = () => {
  const [favorites, setFavorites] = useState({}); // Track favorite status by job index

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle favorite status for the job
    }));
  };

  return (
    <section>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>Featured Jobs</h2>
                <span>Leading Employers already using job and talent.</span>
              </div>
              <div className="job-listings-sec">
                {/* Render job listings dynamically */}
                {featuredJobs.map((job, index) => (
                  <div key={index} className="job-listing">
                    <div className="job-title-sec">
                      <div className="c-logo">
                        <img src={job.companyLogo} alt={job.companyName} />
                      </div>
                      <h3>
                        <a href="#" title="">
                          {job.title}
                        </a>
                      </h3>
                      <span>{job.companyName}</span>
                    </div>
                    <span className="job-lctn">
                      <i className="la la-map-marker"></i>
                      {job.location}
                    </span>
                    <span
                      className="fav-job"
                      onClick={() => toggleFavorite(index)} // Add click handler
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={`la ${
                          favorites[index] ? "la-heart" : "la-heart-o"
                        }`}
                        style={{
                          color: favorites[index] ? "red" : "inherit", // Change color when favorited
                        }}
                      ></i>
                    </span>
                    <span className={`job-is ${job.typeClass}`}>{job.type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="browse-all-cat">
                <a href="#" title="">
                  Load more listings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
