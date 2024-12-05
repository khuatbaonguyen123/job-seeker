import React from "react";
import "../../component/css/style.css";
import { JobSearch } from "./jobSearch";
import { PopularCategory } from "./popularCategory";
import { Advertisement } from "./advertisement";
import { FeaturedJobs } from "./featuredJobs";
import { CandidatesWords } from "./candidateWords";
import { Companies } from "./companies";
import { Tips } from "./tips";
import { FAQs } from "./faq";

const Homepage = () => {
  return (
    <>
      <div className="theme-layout" id="scrollup">
        <JobSearch />
        <PopularCategory />
        <Advertisement />
        <FeaturedJobs />
        <CandidatesWords />
        <Companies />
        <Tips />
        <FAQs />
      </div>
    </>
  );
};

export { Homepage };
