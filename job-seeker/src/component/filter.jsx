import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const JobFilterSidebar = () => {
   // State để quản lý trạng thái mở/đóng từng widget
  const [openWidgets, setOpenWidgets] = useState({
    datePosted: true,
    jobType: true,
    specialism: true,
    offeredSalary: false,
    careerLevel: false,
    experience: false,
    gender: false,
    industry: false,
    qualification: false,
  });

  // Hàm để toggle trạng thái mở/đóng
  const toggleWidget = (widgetName) => {
    setOpenWidgets((prev) => ({
      ...prev,
      [widgetName]: !prev[widgetName],
    }));
  };

  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    // Điều hướng đến trang /search với query string keyword
    navigate(`/search?keyword=${searchKeyword}`);
  };

  return (
    <aside className="col-lg-3 column border-right">
        <div className="widget">
        <div className="search_widget_job">
          <div className="field_w_search">
            <input type="text" 
             value={searchKeyword}
             onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Search Keywords" />
            <i onClick={handleSearch} className="la la-search"></i>
          </div>
          <div className="field_w_search">
            <input type="text" placeholder="All Locations" />
            <i className="la la-map-marker"></i>
          </div>
        </div>
      </div>

      {/* Date Posted */}
      <div className="widget">
        <h3
          className={`sb-title ${openWidgets.datePosted ? "open" : "closed"}`}
          onClick={() => toggleWidget("datePosted")}
        >
          Date Posted
        </h3>
        {openWidgets.datePosted && (
          <div className="posted_widget">
            <input type="radio" name="choose" id="232" />
            <label htmlFor="232">Last Hour</label>
            <br />
            <input type="radio" name="choose" id="wwqe" />
            <label htmlFor="wwqe">Last 24 hours</label>
            <br />
            <input type="radio" name="choose" id="erewr" />
            <label htmlFor="erewr">Last 7 days</label>
            <br />
            <input type="radio" name="choose" id="qwe" />
            <label htmlFor="qwe">Last 14 days</label>
            <br />
            <input type="radio" name="choose" id="wqe" />
            <label htmlFor="wqe">Last 30 days</label>
            <br />
            <input type="radio" name="choose" id="qweqw" />
            <label htmlFor="qweqw" className="nm">
              All
            </label>
            <br />
          </div>
        )}
      </div>

      {/* Job Type */}
      <div className="widget">
        <h3
          className={`sb-title ${openWidgets.jobType ? "open" : "closed"}`}
          onClick={() => toggleWidget("jobType")}
        >
          Job Type
        </h3>
        {openWidgets.jobType && (
          <div className="type_widget">
            <p className="flchek">
              <input type="checkbox" name="choosetype" id="33r" />
              <label htmlFor="33r">Freelance (9)</label>
            </p>
            <p className="ftchek">
              <input type="checkbox" name="choosetype" id="dsf" />
              <label htmlFor="dsf">Full Time (8)</label>
            </p>
            <p className="ischek">
              <input type="checkbox" name="choosetype" id="sdd" />
              <label htmlFor="sdd">Internship (8)</label>
            </p>
          </div>
        )}
      </div>

      {/* Specialism */}
      <div className="widget">
        <h3
          className={`sb-title ${openWidgets.specialism ? "open" : "closed"}`}
          onClick={() => toggleWidget("specialism")}
        >
          Specialism
        </h3>
        {openWidgets.specialism && (
          <div className="specialism_widget">
            <div className="field_w_search">
              <input type="text" placeholder="Search Specialisms" />
            </div>
            <div className="simple-checkbox scrollbar">
              <p>
                <input type="checkbox" name="spealism" id="as" />
                <label htmlFor="as">Accountancy (2)</label>
              </p>
              <p>
                <input type="checkbox" name="spealism" id="asd" />
                <label htmlFor="asd">Banking (2)</label>
              </p>
              <p>
                <input type="checkbox" name="spealism" id="asd" />
                <label htmlFor="asd">Banking (2)</label>
              </p>
              <p>
                <input type="checkbox" name="spealism" id="asd" />
                <label htmlFor="asd">Banking (2)</label>
              </p>
              <p>
                <input type="checkbox" name="spealism" id="asd" />
                <label htmlFor="asd">Banking (2)</label>
              </p>
              <p>
                <input type="checkbox" name="spealism" id="asd" />
                <label htmlFor="asd">Banking (2)</label>
              </p>
              {/* More options */}
            </div>
          </div>
        )}
      </div>

      {/* Offered Salary */}
      <div className="widget">
        <h3
          className={`sb-title ${openWidgets.offeredSalary ? "open" : "closed"}`}
          onClick={() => toggleWidget("offeredSalary")}
        >
          Offered Salary
        </h3>
        {openWidgets.offeredSalary && (
          <div className="specialism_widget">
            <div className="simple-checkbox">
              <p>
                <input type="checkbox" name="smplechk" id="1" />
                <label htmlFor="1">10k - 20k</label>
              </p>
              <p>
                <input type="checkbox" name="smplechk" id="2" />
                <label htmlFor="2">20k - 30k</label>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bạn có thể tiếp tục thêm các phần tương tự ở đây */}
    </aside>
  );
};


