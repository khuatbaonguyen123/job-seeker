import React, {useState, useEffect} from 'react';


export  const JobHeadWide = ({openPopup,jobId}) => {
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
  return (
    <div className="job-head-wide">
      <div className="row">
        <div className="col-lg-8">
          <div className="job-single-head3">
            <div className="job-thumb">
              <img src="/images/resource/sdf.png" alt="" />
              {/* <span>12 Open Position</span> */}
            </div>
            <div className="job-single-info3">
              <h3>{jobDetail.title}</h3>
              <span>
                <i className="la la-map-marker"></i> {jobDetail.locationName}
              </span>
              <span className="job-is ft">{jobDetail.employmentTypeName}</span>
              <ul className="tags-jobs">
                {/* <li>
                  <i className="la la-file-text"></i> Applications 1
                </li> */}
                <li>
                  <i className="la la-calendar-o"></i> Post Date: {jobDetail.postedDate}
                </li>
                {/* <li>
                  <i className="la la-eye"></i> Views 5683
                </li> */}
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
            {/* <a href="#" title="">
              <i className="fa fa-linkedin"></i> Apply with Linkedin
            </a> */}
            <span>
              <i className="la la-heart-o"></i> Shortlist
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


