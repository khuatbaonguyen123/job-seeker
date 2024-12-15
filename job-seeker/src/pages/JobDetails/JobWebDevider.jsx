import React, { useState, useEffect } from 'react';

export const JobWebDevider = ({id}) => {
  const jobId = id;
  console.log(jobId);
    return (
        <>
        <div class="job-wide-devider">
							 	<div class="row">
							 		<JobDescription jobId={jobId} />
                  <JobOverview jobId={jobId} />
                </div>
        </div>
        </>
    );
};

const JobDescription = ({ jobId }) => {
  const [jobDetail, setJobDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data từ API khi component render
  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/jobs/${jobId}/detail`);
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJobDetail(data); // Lưu dữ liệu vào state
        setLoading(false); // Đánh dấu là đã tải xong
      } catch (error) {
        setError(error.message); // Lưu lỗi nếu có
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [jobId]); // Chạy lại khi jobId thay đổi

  // Hiển thị loading hoặc lỗi nếu cần
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Nếu dữ liệu đã được fetch thành công
  return (
    <div className="col-lg-8 column">
      <div className="job-details">
        <h3>Job Description</h3>
        <p>{jobDetail.jobDescription}</p>
      </div>
    </div>
  );
};


const JobOverview = ({ jobId }) => {
  const [jobDetails, setJobDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/jobs/${jobId}/overview`; // URL động dựa trên jobId

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setJobDetails(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [jobId]); // useEffect sẽ chạy lại nếu jobId thay đổi

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="col-lg-4 column">
      <div className="job-overview">
        <h3>Job Overview</h3>
        <ul>
          <li>
            <i className="la la-money"></i>
            <h3 style={{ color: 'black' }}>Offered Salary</h3>
            <span>{jobDetails.salaryRange}</span>
          </li>
          <li>
            <i className="la la-mars-double"></i>
            <h3 style={{ color: 'black' }}>Gender</h3>
            <span>{jobDetails.gender}</span>
          </li>
          <li>
            <i className="la la-thumb-tack"></i>
            <h3 style={{ color: 'black' }}>Career Level</h3>
            <span>{jobDetails.careerLevel}</span>
          </li>
          <li>
            <i className="la la-puzzle-piece"></i>
            <h3 style={{ color: 'black' }}>Industry</h3>
            <span>{jobDetails.industry}</span>
          </li>
          <li>
            <i className="la la-shield"></i>
            <h3 style={{ color: 'black' }}>Experience</h3>
            <span>{jobDetails.yearsOfExperience} Years</span>
          </li>
          <li>
            <i className="la la-line-chart"></i>
            <h3 style={{ color: 'black' }}>Qualification</h3>
            <span>{jobDetails.qualification}</span>
          </li>
        </ul>
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

