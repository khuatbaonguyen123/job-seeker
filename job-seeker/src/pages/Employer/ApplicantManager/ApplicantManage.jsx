import React, { useState } from 'react';
import { ParallaxSection } from "../../../component/ParallaxSection";
import { EmployerDashboardSidebar } from "../DashboardSidebar";

export const ApplicantManager = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    }

    const closePopup = () => {
        setIsOpen(false);
    }

    return(
        <>
         
        <ParallaxSection title="Employer"/>
        <section>
		<div class="block no-padding">
			<div class="container">
				 <div class="row no-gape">
                        <EmployerDashboardSidebar/>
                        <Resume openPopup={openPopup}/>
                 </div>
            </div>
        </div>
                 </section>
                 {isOpen && (
                    <Popup  isOpen={isOpen} closePopup={closePopup}/>
                 )}
                
        </>
    );
};

const Resume = ({openPopup}) => {

    const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
};
  
    return (
      <div className="col-lg-9 column">
        <div className="padding-left">
          <div className="emply-resume-sec">
            <h3>Resume</h3>
            <div className="emply-resume-list">
              <div className="emply-resume-thumb">
                <img src="images/resource/er1.jpg" alt="Ali TUFAN" />
              </div>
              <div className="emply-resume-info">
                <h3><a href="#" title="Ali TUFAN">Ali TUFAN</a></h3>
                <span><i>UX / UI Designer</i> at Atract Solutions</span>
                <p><i className="la la-map-marker"></i> Istanbul / Turkey</p>
              </div>
              <div className="action-resume">
                <div className="action-center">
                  <span onClick={toggleDropdown}>Action <i className="la la-angle-down"></i></span>
                
                  <ul style={{ display: showDropdown ? 'block' : 'none' }}>
                    <li className="open-letter">
                      <a href="#" onClick={openPopup} title="Cover Letter">Cover Letter</a>
                    </li>
                    <li><a href="#" title="Download CV">Download CV</a></li>
                    <li><a href="#" title="Linked-in Profile">Linked-in Profile</a></li>
                    <li><a href="#" title="Send a Message">Send a Message</a></li>
                    <li><a href="#" title="View Profile">View Profile</a></li>
                  </ul>
                </div>
              </div>
              <div className="del-resume">
                <a href="#" title="Delete"><i className="la la-trash-o"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };

  const Popup = ({isOpen, closePopup}) => {
    return (
        <div className="coverletter-popup" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="cover-letter">
              <i className="la la-close close-letter" onClick={closePopup}></i>
              <h3>Ali TUFAN - UX / UI Designer</h3>
              <p>
                My name is Ali TUFAN I am thrilled to be applying for the [position] role in your company. 
                After reviewing your job description, it’s clear that you’re looking for an enthusiastic 
                applicant that can be relied upon to fully engage with the role and develop professionally 
                in a self-motivated manner. Given these requirements, I believe I am the perfect candidate 
                for the job.
              </p>
            </div>
          </div>
    )
  };