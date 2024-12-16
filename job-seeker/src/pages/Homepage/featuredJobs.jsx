import React, { useState, useEffect } from "react";

export const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]); // Lưu danh sách công việc từ API
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [favorites, setFavorites] = useState({}); // Quản lý trạng thái yêu thích

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index], // Chuyển đổi trạng thái yêu thích
    }));
  };

  // Fetch API khi component được render lần đầu
  useEffect(() => {
    fetch("http://localhost:8080/api/jobs/search?keyword=%20")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data); // Cập nhật danh sách công việc
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); // Lưu thông báo lỗi
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>; // Hiển thị thông báo tải
  }

  if (error) {
    return <p>Error: {error}</p>; // Hiển thị thông báo lỗi
  }

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
                {/* Render danh sách công việc từ API */}
                {jobs.slice(0, 10).map((job, index) => (
                  <div key={index} className="job-listing">
                    <div className="job-title-sec">
                      <div className="c-logo">
                        <img
                          src={job.companyLogo || "images/resource/l1.png"} // Sử dụng logo mặc định nếu thiếu
                          alt={job.companyName}
                        />
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
                      {job.locationName}
                    </span>
                    <span
                      className="fav-job"
                      onClick={() => toggleFavorite(index)} // Xử lý click
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={`la ${
                          favorites[index] ? "la-heart" : "la-heart-o"
                        }`}
                        style={{
                          color: favorites[index] ? "red" : "inherit", // Đổi màu khi yêu thích
                        }}
                      ></i>
                    </span>
                    <span className={`job-is ${job.typeClass}`}>{job.employmentTypeName}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="browse-all-cat">
                <a href="/search?keyword=%20" title="">
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
