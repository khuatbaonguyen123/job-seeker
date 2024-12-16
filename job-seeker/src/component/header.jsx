import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SignupForm } from "../pages/Authentication/signupForm";
import { SigninForm } from "../pages/Authentication/signinForm";

export const Header = () => {
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const toggleBodyScroll = (shouldDisable) => {
    if (shouldDisable) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const openSigninPopup = () => {
    setIsSigninOpen(true);
    toggleBodyScroll(true);
    console.log("click signin");
  };

  const closeSigninPopup = () => {
    setIsSigninOpen(false);
    toggleBodyScroll(false);
    console.log("close signin");
  };

  const openSignupPopup = () => {
    setIsSignupOpen(true);
    toggleBodyScroll(true);
    console.log("click signup");
  };

  const closeSignupPopup = () => {
    setIsSignupOpen(false);
    toggleBodyScroll(false);
    console.log("close signup");
  };

  const handleScroll = () => {
    if (
      window.scrollY > 100 &&
      !["/signup", "/signin"].includes(location.pathname)
    ) {
      setIsSticky(true); // Make sticky only if not on /signup or /signin
    } else {
      setIsSticky(false); // Remove sticky class when at the top or on the signup/signin pages
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <div className="responsive-header">
        <div className="responsive-menubar">
          <div className="res-logo">
            <a href="/" title="">
              <img src="images/resource/logo.png" alt="" />
            </a>
          </div>
          <div className="menu-resaction">
            <div className="res-openmenu">
              <img src="images/icon.png" alt="" /> Menu
            </div>
            <div className="res-closemenu">
              <img src="images/icon2.png" alt="" /> Close
            </div>
          </div>
        </div>
        <div className="responsive-opensec">
          <div className="btn-extars">
            <a href="#" title="" className="post-job-btn">
              <i className="la la-plus"></i>Post Jobs
            </a>
            <ul className="account-btns">
              <li
                className="signup-popup"
                onClick={openSignupPopup}
                style={{
                  display: ["/signup", "/signin"].includes(location.pathname)
                    ? "none"
                    : "",
                }}
              >
                <a className="signup" href="#">
                  <i className="la la-key"></i> Sign Up
                </a>
              </li>
              <li
                className="signin-popup"
                onClick={openSigninPopup}
                style={{
                  display: ["/signup", "/signin"].includes(location.pathname)
                    ? "none"
                    : "",
                }}
              >
                <a className="signin" href="#">
                  <i className="la la-external-link-square"></i> Login
                </a>
              </li>
            </ul>
          </div>
          <form className="res-search">
            <input
              type="text"
              placeholder="Job title, keywords or company name"
            />
            <button type="submit">
              <i className="la la-search"></i>
            </button>
          </form>
          <div className="responsivemenu">
            <ul>
              <li className="menu-item-has-children">
                <a href="/" title="">
                  Home
                </a>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="">
                  Employers
                </a>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="">
                  Applicants
                </a>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="">
                  Blog
                </a>
              </li>
              <li className="menu-item-has-children">
                <a href="/search?keyword=%20" title="">
                  Job
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header
        className={`stick-top forsticky ${isSticky ? "sticky" : ""}`}
        style={isSticky ? { backgroundColor: "red !important" } : {}}
      >
        <div className="menu-sec">
          <div className="container">
            <div class="logo">
              <a href="/" title="">
                <img class="hidesticky" src="images/resource/logo.png" alt="" />
                <img
                  class="showsticky"
                  src="images/resource/logo10.png"
                  alt=""
                />
              </a>
            </div>
            <div className="btn-extars">
              <a href="#" title="" className="post-job-btn">
                <i className="la la-plus"></i>Post Jobs
              </a>
              <ul className="account-btns">
                <li
                  className="signup-popup"
                  onClick={openSignupPopup}
                  style={{
                    display: ["/signup", "/signin"].includes(location.pathname)
                      ? "none"
                      : "",
                  }}
                >
                  <a title="">
                    <i className="la la-key"></i> Sign Up
                  </a>
                </li>
                <li
                  className="signin-popup"
                  onClick={openSigninPopup}
                  style={{
                    display: ["/signup", "/signin"].includes(location.pathname)
                      ? "none"
                      : "",
                  }}
                >
                  <a title="">
                    <i className="la la-external-link-square"></i> Login
                  </a>
                </li>
              </ul>
            </div>
            <nav>
              <ul>
                <li className="menu-item-has-children">
                  <a href="/" title="">
                    Home
                  </a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#" title="">
                    Employers
                  </a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#" title="">
                    Applicants
                  </a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#" title="">
                    Blog
                  </a>
                </li>
                <li className="menu-item-has-children">
                  <a href="/search?keyword=%20" title="">
                    Job
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {isSigninOpen && (
        <div
          className={`account-popup-area signin-popup-box ${
            isSigninOpen ? "show" : ""
          }`}
        >
          <SigninForm closeSigninPopup={closeSigninPopup} />
        </div>
      )}

      {isSignupOpen && (
        <div
          className={`account-popup-area signup-popup-box ${
            isSignupOpen ? "show" : ""
          }`}
        >
          <SignupForm closeSignupPopup={closeSignupPopup} />
        </div>
      )}
    </>
  );
};
