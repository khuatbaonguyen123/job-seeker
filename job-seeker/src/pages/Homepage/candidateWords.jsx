import React from "react";

//sample
const candidateReviews = [
  {
    image: "images/resource/r1.jpg",
    name: "Augusta Silva",
    designation: "Web designer",
    review:
      "Without JobHunt I’d be homeless. They found me a job and got me sorted out quickly with everything! Can’t quite believe the service.",
  },
  {
    image: "images/resource/r2.jpg",
    name: "Ali Tufan",
    designation: "Web designer",
    review:
      "Without JobHunt I’d be homeless. They found me a job and got me sorted out quickly with everything! Can’t quite believe the service.",
  },
  {
    image: "images/resource/r1.jpg",
    name: "Augusta Silva",
    designation: "Web designer",
    review:
      "Without JobHunt I’d be homeless. They found me a job and got me sorted out quickly with everything! Can’t quite believe the service.",
  },
  {
    image: "images/resource/r2.jpg",
    name: "Ali Tufan",
    designation: "Web designer",
    review:
      "Without JobHunt I’d be homeless. They found me a job and got me sorted out quickly with everything! Can’t quite believe the service.",
  },
];

export const CandidatesWords = () => {
  return (
    <section>
      <div className="block">
        <div
          data-velocity="-.1"
          style={{
            background:
              "url(images/resource/parallax2.jpg) repeat scroll 50% 422.28px transparent",
          }}
          className="parallax scrolly-invisible layer color light"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading light">
                <h2>Kind Words From Happy Candidates</h2>
                <span>
                  What other people thought about the service provided by
                  JobHunt
                </span>
              </div>
              <div className="reviews-sec" id="reviews-carousel">
                {/* Render candidate reviews dynamically */}
                {candidateReviews.map((review, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="reviews">
                      <img src={review.image} alt={review.name} />
                      <h3>
                        {review.name} <span>{review.designation}</span>
                      </h3>
                      <p>{review.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
