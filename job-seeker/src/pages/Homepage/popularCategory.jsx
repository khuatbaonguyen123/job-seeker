import React from "react";

//sample
const popularCategories = [
  { icon: "la la-bullhorn", name: "Design, Art & Multimedia", positions: 22 },
  { icon: "la la-graduation-cap", name: "Education Training", positions: 6 },
  { icon: "la la-line-chart", name: "Accounting / Finance", positions: 3 },
  { icon: "la la-users", name: "Human Resource", positions: 3 },
  { icon: "la la-phone", name: "Telecommunications", positions: 22 },
  { icon: "la la-cutlery", name: "Restaurant / Food Service", positions: 6 },
  { icon: "la la-building", name: "Construction / Facilities", positions: 3 },
  { icon: "la la-user-md", name: "Health", positions: 3 },
];

export const PopularCategory = () => {
  return (
    <section id="scroll-here">
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>Popular Categories</h2>
                <span>37 jobs live - 0 added today.</span>
              </div>

              {/* Render categories dynamically */}
              {popularCategories.reduce((result, category, index) => {
                const chunkIndex = Math.floor(index / 4);
                if (!result[chunkIndex]) result[chunkIndex] = [];
                result[chunkIndex].push(category);
                return result;
              }, []).map((chunk, idx) => (
                <div key={idx} className="cat-sec">
                  <div className="row no-gape">
                    {chunk.map((category, i) => (
                      <div key={i} className="col-lg-3 col-md-3 col-sm-6">
                        <div className="p-category">
                          <a href="#" title="">
                            <i className={category.icon}></i>
                            <span>{category.name}</span>
                            <p>({category.positions} open positions)</p>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-12">
              <div className="browse-all-cat">
                <a href="#" title="">
                  Browse All Categories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
