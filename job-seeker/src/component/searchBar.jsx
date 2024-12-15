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

  const handleSearch = () => {
    // Điều hướng đến trang /search với query string keyword
    navigate(`/search?keyword=${searchKeyword}`);
  };

  return (
    <>
      <div class="job-search-sec">
        <div class="job-search">
          <h3>The Easiest Way to Get Your New Job</h3>
          <span>Find Jobs, Employment & Career Opportunities</span>
          <form>
            <div class="row">
              <div class="col-lg-7 col-md-5 col-sm-12 col-xs-12">
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
              <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                <div class="job-field">
                  <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    placeholder="City, province or region"
                    components={{
                      IndicatorSeparator: () => null, // Hides the separator
                      DropdownIndicator: () => null, // Hides the dropdown icon
                    }}
                    className="chosen-city"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        height: 61, // Set the height of the select box
                        borderRadius: 8,
                        alignContent: 'center',
                        fontSize: 13
                      }),
                    }}
                  />
                  <i class="la la-map-marker" style={{right : '5%'}}></i>
                </div>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-12 col-xs-12">
                <button onClick={handleSearch}>
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
