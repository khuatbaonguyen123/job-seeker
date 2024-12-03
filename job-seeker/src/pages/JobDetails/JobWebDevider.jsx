import React from 'react';

export const JobWebDevider = () => {
    return (
        <>
        <div class="job-wide-devider">
							 	<div class="row">
							 		<JobDescription />
                  <JobOverview />
                </div>
        </div>
        </>
    );
};

 const JobDescription = () => {
  return (
    <div className="col-lg-8 column">
      <div className="job-details">
        <h3>Job Description</h3>
        <p>
          Company is a 2016 Iowa City-born start-up that develops consectetuer
          adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
          urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
          pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
          leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
          Suspendisse potenti.
        </p>
        <p>
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien
        </p>
        <h3>Required Knowledge, Skills, and Abilities</h3>
        <ul>
          <li>
            Ability to write code – HTML & CSS (SCSS flavor of SASS preferred
            when writing CSS)
          </li>
          <li>
            Proficient in Photoshop, Illustrator, bonus points for familiarity
            with Sketch (Sketch is our preferred concepting)
          </li>
          <li>Cross-browser and platform testing as standard practice</li>
          <li>Experience using Invision a plus</li>
          <li>
            Experience in video production a plus or, at a minimum, a
            willingness to learn
          </li>
        </ul>
        <h3>Education + Experience</h3>
        <ul>
          <li>Advanced degree or equivalent experience in graphic and web design</li>
          <li>3 or more years of professional design experience</li>
          <li>Direct response email experience</li>
          <li>Ecommerce website design experience</li>
          <li>Familiarity with mobile and web apps preferred</li>
          <li>
            Excellent communication skills, most notably a demonstrated ability
            to solicit and address creative and design feedback
          </li>
          <li>
            Must be able to work under pressure and meet deadlines while
            maintaining a positive attitude and providing exemplary customer
            service
          </li>
          <li>
            Ability to work independently and to carry out assignments to
            completion within parameters of instructions given, prescribed
            routines, and standard accepted practices
          </li>
        </ul>
      </div>

      <div className="share-bar">
        <span>Share</span>
        <a href="#" className="share-fb">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" className="share-twitter">
          <i className="fa fa-twitter"></i>
        </a>
      </div>

      <div className="extra-job-info">
        <span>
          <i className="la la-clock-o"></i>
          <strong>35</strong> Days
        </span>
        <span>
          <i className="la la-file-text"></i>
          <strong>300-500</strong> Application
        </span>
        <span>
          <i className="la la-search-plus"></i>
          <strong>35697</strong> Displayed
        </span>
      </div>

      <div className="recent-jobs">
        <h3>Recent Jobs</h3>
        <div className="job-list-modern">
          <div className="job-listings-sec no-border">
            <JobListing
              imgSrc="images/resource/l1.png"
              title="Web Designer / Developer"
              company="Massimo Artemisis"
              location="Sacramento, California"
              type="Full time"
              timeAgo="5 months ago"
            />
            <JobListing
              imgSrc="images/resource/l2.png"
              title="C Developer (Senior) C .Net"
              company="Massimo Artemisis"
              location="Sacramento, California"
              type="Part time"
              timeAgo="5 months ago"
            />
            <JobListing
              imgSrc="images/resource/l3.png"
              title="Regional Sales Manager South"
              company="Massimo Artemisis"
              location="Sacramento, California"
              type="Full time"
              timeAgo="5 months ago"
            />
            <JobListing
              imgSrc="images/resource/l4.png"
              title="Marketing Director"
              company="Massimo Artemisis"
              location="Sacramento, California"
              type="Full time"
              timeAgo="5 months ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const JobOverview = () => {
  return (
    <div className="col-lg-4 column">
      <div className="job-overview">
        <h3>Job Overview</h3>
        <ul>
          <li>
            <i className="la la-money"></i>
            <h3>Offered Salary</h3>
            <span>£15,000 - £20,000</span>
          </li>
          <li>
            <i className="la la-mars-double"></i>
            <h3>Gender</h3>
            <span>Female</span>
          </li>
          <li>
            <i className="la la-thumb-tack"></i>
            <h3>Career Level</h3>
            <span>Executive</span>
          </li>
          <li>
            <i className="la la-puzzle-piece"></i>
            <h3>Industry</h3>
            <span>Management</span>
          </li>
          <li>
            <i className="la la-shield"></i>
            <h3>Experience</h3>
            <span>2 Years</span>
          </li>
          <li>
            <i className="la la-line-chart"></i>
            <h3>Qualification</h3>
            <span>Bachelor Degree</span>
          </li>
        </ul>
      </div>
      {/* Job Overview */}

      <div className="quick-form-job">
        <h3>Contact</h3>
        <form>
          <input type="text" placeholder="Enter your Name *" required />
          <input type="email" placeholder="Email Address*" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message should have more than 50 characters" required></textarea>
          <button className="submit" type="submit">
            Send Email
          </button>
          <span>
            You accept our{' '}
            <a href="#" title="">
              Terms and Conditions
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

const JobListing = ({ imgSrc, title, company, location, type, timeAgo }) => {
  return (
    <div className="job-listing wtabs">
      <div className="job-title-sec">
        <div className="c-logo">
          <img src={imgSrc} alt="" />
        </div>
        <h3>
          <a href="#" title="">
            {title}
          </a>
        </h3>
        <span>{company}</span>
        <div className="job-lctn">
          <i className="la la-map-marker"></i>
          {location}
        </div>
      </div>
      <div className="job-style-bx">
        <span className={`job-is ${type === 'Full time' ? 'ft' : 'pt'}`}>
          {type}
        </span>
        <span className="fav-job">
          <i className="la la-heart-o"></i>
        </span>
        <i>{timeAgo}</i>
      </div>
    </div>
  );
};

