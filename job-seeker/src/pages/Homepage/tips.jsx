import React from "react";
import "./tips.css";

//sample
const tipsData = [
  {
    image: "images/resource/b1.jpg",
    date: "March 29, 2017",
    comments: "0 Comments",
    title: "Attract More Attention Sales And Profits",
    description:
      "A job is a regular activity performed in exchange becoming an employee, volunteering.",
    link: "#",
  },
  {
    image: "images/resource/b2.jpg",
    date: "March 29, 2017",
    comments: "0 Comments",
    title: "11 Tips to Help You Get New Clients",
    description:
      "A job is a regular activity performed in exchange becoming an employee, volunteering.",
    link: "#",
  },
  {
    image: "images/resource/b3.jpg",
    date: "March 29, 2017",
    comments: "0 Comments",
    title: "An Overworked Newspaper Editor",
    description:
      "A job is a regular activity performed in exchange becoming an employee, volunteering.",
    link: "#",
  },
  {
    image: "images/resource/b1.jpg",
    date: "March 29, 2017",
    comments: "0 Comments",
    title: "Attract More Attention Sales And Profits",
    description:
      "A job is a regular activity performed in exchange becoming an employee, volunteering.",
    link: "#",
  },
  {
    image: "images/resource/b1.jpg",
    date: "March 29, 2017",
    comments: "0 Comments",
    title: "Attract More Attention Sales And Profits",
    description:
      "A job is a regular activity performed in exchange becoming an employee, volunteering.",
    link: "#",
  },
];

export const Tips = () => {
  return (
    <section>
      <div className="block">
        <div
          data-velocity="-.1"
          style={{
            background:
              "url(images/resource/parallax3.jpg) repeat scroll 50% 422.28px transparent",
          }}
          className="parallax scrolly-invisible no-parallax"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>Quick Career Tips</h2>
                <span>
                  Found by employers communicate directly with hiring managers
                  and recruiters.
                </span>
              </div>
              {/* Horizontal scroll list */}
              <div className="blog-sec horizontal-scroll">
                {tipsData.map((tip, index) => (
                  <div key={index} className="my-blog">
                    <div className="blog-thumb">
                      <a href={tip.link} title="">
                        <img src={tip.image} alt={tip.title} />
                      </a>
                      <div className="blog-metas">
                        <a href={tip.link} title="">
                          {tip.date}
                        </a>
                        <a href={tip.link} title="">
                          {tip.comments}
                        </a>
                      </div>
                    </div>
                    <div className="blog-details">
                      <h3>
                        <a href={tip.link} title="">
                          {tip.title}
                        </a>
                      </h3>
                      <p>{tip.description}</p>
                      <a href={tip.link} title="">
                        Read More <i className="la la-long-arrow-right"></i>
                      </a>
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
