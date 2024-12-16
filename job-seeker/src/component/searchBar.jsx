import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";



const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "new-york", label: "New York" },
    { value: "istanbul", label: "Istanbul" },
    { value: "london", label: "London" },
    { value: "russia", label: "Russia" },
  ];

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form submit
  
  if (!searchKeyword || searchKeyword.trim() === "") {
    // Điều hướng đến trang với keyword mặc định hoặc xử lý rỗng
    navigate(`/search?keyword=%20`); // `%20` là khoảng trắng URL-encoded
    return; // Kết thúc hàm
  }
  
  // Điều hướng với keyword hợp lệ
  navigate(`/search?keyword=${searchKeyword.trim()}`);
  };

  return (
    <>
      <div class="job-search-sec">
        <div class="job-search">
          <h3>The Easiest Way to Get Your New Job</h3>
          <span>Find Jobs, Employment & Career Opportunities</span>
          <form onSubmit={handleSearch}>
            <div class="row">
              <div class="col-lg-10 col-md-5 col-sm-12 col-xs-12">
                <div class="job-field">
                  <input
                    type="text"
                    value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Job title, keywords or company name"
                  />
                  <i class="la la-keyboard-o"></i>
                </div>
              </div>
              
              <div class="col-lg-1 col-md-2 col-sm-12 col-xs-12">
                <button type="submit">
                  <i class="la la-search"></i>
                </button>
              </div>
            </div>
          </form>
          <div class="or-browser">
            <span>Browse job offers by</span>
            <a href="#" title="">
              Category
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { SearchBar };
