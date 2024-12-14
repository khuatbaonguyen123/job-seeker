import React from 'react';


export  const JobHeadWide = ({openPopup}) => {
  return (
    <div className="job-head-wide">
      <div className="row">
        <div className="col-lg-8">
          <div className="job-single-head3">
            <div className="job-thumb">
              <img src="images/resource/sdf.png" alt="" />
              <span>12 Open Position</span>
            </div>
            <div className="job-single-info3">
              <h3>Tera Planner</h3>
              <span>
                <i className="la la-map-marker"></i>Sacramento, California
              </span>
              <span className="job-is ft">Full time</span>
              <ul className="tags-jobs">
                <li>
                  <i className="la la-file-text"></i> Applications 1
                </li>
                <li>
                  <i className="la la-calendar-o"></i> Post Date: July 29, 2017
                </li>
                <li>
                  <i className="la la-eye"></i> Views 5683
                </li>
              </ul>
            </div>
          </div>
          {/* Job Head */}
        </div>
        <div className="col-lg-4">
          <a className="apply-thisjob" href="#" title="" onClick={openPopup}>
            <i className="la la-paper-plane"></i>Apply for job
          </a>
          <div className="apply-alternative">
            <a href="#" title="">
              <i className="fa fa-linkedin"></i> Apply with Linkedin
            </a>
            <span>
              <i className="la la-heart-o"></i> Shortlist
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


