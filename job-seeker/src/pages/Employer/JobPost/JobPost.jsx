import { ParallaxSection } from "../../../component/ParallaxSection";
import { EmployerDashboardSidebar } from "../DashboardSidebar";
import React, { useState } from "react";

export const JobPost = () => {
    return(
        <>
        <ParallaxSection title="Employer"/>
        <section>
		<div class="block no-padding">
			<div class="container">
				 <div class="row no-gape">
                        <EmployerDashboardSidebar/>
                        <PostJobForm/>
                 </div>
            </div>
        </div>
                 </section>                 
        </>
    );
};

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
    username: "",
    jobType: "",
    categories: "",
    minimumWage: "",
    maximumWage: "",
    careerLevel: "",
    applicationDeadline: "",
    skills: [],
    country: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSkillAdd = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();
      setFormData((prevState) => ({
        ...prevState,
        skills: [...prevState.skills, e.target.value.trim()],
      }));
      e.target.value = "";
    }
  };

  const handleSkillRemove = (skill) => {
    setFormData((prevState) => ({
      ...prevState,
      skills: prevState.skills.filter((s) => s !== skill),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          jobDescription: formData.description,
          applicationDeadline: formData.applicationDeadline,
          minimumWage: parseInt(formData.minimumWage),
          maximumWage: parseInt(formData.maximumWage),
          location: {
            name: formData.city,
          },
          employmentType: {
            name: formData.jobType,
          },
          level: {
            name: formData.careerLevel,
          },
          specialism: {
            name: formData.categories,
          },
          postedBy: {
            user: {
              email: formData.email,
              name: formData.username,
            },
          },
          skills: formData.skills,
        }),
      });

      if (response.ok) {
        alert("Job posted successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Failed to post job.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="col-lg-9 column">
        <div className="padding-left">
          <div className="profile-title">
            <h3>Post a New Job</h3>
          </div>
  
          <div className="profile-form-edit">
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Job Title */}
        <div className="col-lg-12">
          <span className="pf-title">Job Title</span>
          <div className="pf-field">
            <input
              type="text"
              name="title"
              placeholder="Designer"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Description */}
        <div className="col-lg-12">
          <span className="pf-title">Description</span>
          <div className="pf-field">
            <textarea
              name="description"
              placeholder="Job description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* Email */}
        <div className="col-lg-6">
          <span className="pf-title">Email</span>
          <div className="pf-field">
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Username */}
        <div className="col-lg-6">
          <span className="pf-title">Username</span>
          <div className="pf-field">
            <input
              type="text"
              name="username"
              placeholder="Your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Job Type */}
        <div className="col-lg-6">
          <span className="pf-title">Job Type</span>
          <div className="pf-field">
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="">Select Job Type</option>
              <option value="Web Development">Web Development</option>
              <option value="Web Designing">Web Designing</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="col-lg-6">
          <span className="pf-title">Categories</span>
          <div className="pf-field">
            <select
              name="categories"
              value={formData.categories}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
        </div>

        {/* Salary Range */}
        <div className="col-lg-6">
          <span className="pf-title">Minimum Wage</span>
          <div className="pf-field">
            <input
              type="number"
              name="minimumWage"
              placeholder="Minimum Salary"
              value={formData.minimumWage}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <span className="pf-title">Maximum Wage</span>
          <div className="pf-field">
            <input
              type="number"
              name="maximumWage"
              placeholder="Maximum Salary"
              value={formData.maximumWage}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Career Level */}
        <div className="col-lg-6">
          <span className="pf-title">Career Level</span>
          <div className="pf-field">
            <select
              name="careerLevel"
              value={formData.careerLevel}
              onChange={handleChange}
            >
              <option value="">Select Career Level</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
          </div>
        </div>

        {/* Application Deadline */}
        <div className="col-lg-12">
          <span className="pf-title">Application Deadline</span>
          <div className="pf-field">
            <input
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Skills */}
        <div className="col-lg-12">
          <span className="pf-title">Skills</span>
          <div className="pf-field">
            <ul className="tags">
              {formData.skills.map((skill, index) => (
                <li key={index} className="addedTag">
                  {skill}
                  <span onClick={() => handleSkillRemove(skill)} className="tagRemove">
                    x
                  </span>
                </li>
              ))}
              <li className="tagAdd taglist">
                <input
                  type="text"
                  placeholder="Add new skill..."
                  onKeyDown={handleSkillAdd}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Country */}
        <div className="col-lg-6">
          <span className="pf-title">Country</span>
          <div className="pf-field">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* City */}
        <div className="col-lg-6">
          <span className="pf-title">City</span>
          <div className="pf-field">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Address */}
        <div className="col-lg-12">
          <span className="pf-title">Complete Address</span>
          <div className="pf-field">
            <textarea
              name="address"
              placeholder="Complete Address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-lg-12">
          <button type="submit">Post</button>
        </div>
      </div>
    </form>
    </div>
    </div>
    </div>
  );
};