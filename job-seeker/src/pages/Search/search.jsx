import { JobFilterSidebar } from "../../component/filter";
import {ParallaxSection} from "../../component/ParallaxSection";

export const Search = () => {
    return (
        <>
        <ParallaxSection title="Job List"/>
        <section>
		<div class="block no-padding">
			<div class="container">
				 <div class="row no-gape">
                    <JobFilterSidebar/>
                    <JobList/>
                 </div>
            </div>
        </div>
    </section>
    </>
    );
   
};

const JobList = () => {
    return (
      <div className="col-lg-9 column">
        <div className="modrn-joblist">
          <div className="tags-bar">
            <span>Full Time<i className="close-tag">x</i></span>
            <span>UX/UI Design<i className="close-tag">x</i></span>
            <span>Istanbul<i className="close-tag">x</i></span>
            <div className="action-tags">
              <a href="#" title=""><i className="la la-cloud-download"></i> Save</a>
              <a href="#" title=""><i className="la la-trash-o"></i> Clean</a>
            </div>
          </div>
          {/* Tags Bar */}
  
          <div className="filterbar">
            <span className="emlthis">
              <a href="mailto:example.com" title="">
                <i className="la la-envelope-o"></i> Email me Jobs Like These
              </a>
            </span>
            <div className="sortby-sec">
              <span>Sort by</span>
              <select data-placeholder="Most Recent" className="chosen">
                <option>Most Recent</option>
                <option>30 Per Page</option>
                <option>40 Per Page</option>
                <option>50 Per Page</option>
              </select>
              <select data-placeholder="20 Per Page" className="chosen">
                <option>20 Per Page</option>
                <option>30 Per Page</option>
                <option>40 Per Page</option>
              </select>
            </div>
            <h5>1 Job & Vacancy</h5>
          </div>
          {/* Filter Bar */}
        </div>
  
        <div className="job-list-modern">
          <div className="job-listings-sec">
            <div className="job-listing wtabs">
              <div className="job-title-sec">
                <div className="c-logo">
                  <img src="images/resource/l1.png" alt="Company Logo" />
                </div>
                <h3><a href="#" title="">Web Designer / Developer</a></h3>
                <span>Massimo Artemisis</span>
                <div className="job-lctn">
                  <i className="la la-map-marker"></i>Sacramento, California
                </div>
              </div>
              <div className="job-style-bx">
                <span className="job-is ft">Full time</span>
                <span className="fav-job"><i className="la la-heart-o"></i></span>
                <i>5 months ago</i>
              </div>
            </div>
            {/* Single Job Listing */}
          </div>
        </div>
      </div>
    );
  };