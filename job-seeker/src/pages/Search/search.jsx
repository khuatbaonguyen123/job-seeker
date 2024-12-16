import React, { useEffect, useState } from "react";
import { JobFilterSidebar } from "../../component/filter";
import {ParallaxSection} from "../../component/ParallaxSection";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchKeyword = queryParams.get("keyword");

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Gọi API khi từ khóa tìm kiếm thay đổi
  useEffect(() => {
    if (searchKeyword) {
      setLoading(true);
      setError(null);

      fetch(`http://localhost:8080/api/jobs/search?keyword=${searchKeyword}`)
        .then((response) => response.json())
        .then((data) => {
          setJobs(data); // Lưu danh sách công việc vào state
          setLoading(false);
        })
        .catch((err) => {
          setError("Something went wrong");
          setLoading(false);
        });
    }
  }, [searchKeyword]); // Hook này sẽ gọi API mỗi khi từ khóa thay đổi


  console.log(searchKeyword);
    return (
        <>
        <ParallaxSection title="Job List"/>
        <section>
		<div class="block no-padding">
			<div class="container">
				 <div class="row no-gape">
                    <JobFilterSidebar/>
                    <JobList jobs={jobs} searchKeyword={searchKeyword}/>
                 </div>
            </div>
        </div>
    </section>
    </>
    );
   
};

const JobList = ({ jobs, searchKeyword }) => {
    return (
      <div className="col-lg-9 column">
        <div className="filterbar">
            <h5>{jobs.length} Job & Vacancy</h5>
            </div>
        <div className="job-list-modern">
        <div className="job-listings-sec">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="job-listing wtabs">
                <div className="job-title-sec">
                  <div className="c-logo">
                    <img src="images/resource/l1.png" alt="Company Logo" />
                  </div>
                  <h3>
                    <a href={`/job-details/${job.id}`} title="">
                      {job.title}
                    </a>
                  </h3>
                  <span>{job.companyName}</span>
                  <div className="job-lctn">
                    <i className="la la-map-marker"></i>
                    {job.locationName}
                  </div>
                </div>
                <div className="job-style-bx">
                  <span className="job-is ft">{job.employmentTypeName}</span>
                  <i>{job.postedDate}</i>
                </div>
              </div>
            ))
          ) : (
            <p>No jobs found for "{searchKeyword}"</p>
          )}
        </div>
        </div>
      </div>
    );
  };