import { ParallaxSection } from "../../../component/ParallaxSection";
import { EmployerDashboardSidebar } from "../DashboardSidebar";

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
    return (
      <div className="col-lg-9 column">
        <div className="padding-left">
          <div className="profile-title">
            <h3>Post a New Job</h3>
          </div>
  
          <div className="profile-form-edit">
            <form>
              <div className="row">
                {/* Job Title */}
                <div className="col-lg-12">
                  <span className="pf-title">Job Title</span>
                  <div className="pf-field">
                    <input type="text" placeholder="Designer" />
                  </div>
                </div>
  
                {/* Description */}
                <div className="col-lg-12">
                  <span className="pf-title">Description</span>
                  <div className="pf-field">
                    <textarea defaultValue="Spent several years working on sheep on Wall Street..." />
                  </div>
                </div>
  
                {/* Email */}
                <div className="col-lg-6">
                  <span className="pf-title">Email</span>
                  <div className="pf-field">
                    <input type="text" />
                  </div>
                </div>
  
                {/* Username */}
                <div className="col-lg-6">
                  <span className="pf-title">Username</span>
                  <div className="pf-field">
                    <input type="text" />
                  </div>
                </div>
  
                {/* Job Type */}
                <div className="col-lg-6">
                  <span className="pf-title">Job Type</span>
                  <div className="pf-field">
                    <select>
                      <option>Web Development</option>
                      <option>Web Designing</option>
                      <option>Art & Culture</option>
                      <option>Reading & Writing</option>
                    </select>
                  </div>
                </div>
  
                {/* Categories */}
                <div className="col-lg-6">
                  <span className="pf-title">Categories</span>
                  <div className="pf-field">
                    <select>
                      <option>Web Development</option>
                      <option>Web Designing</option>
                      <option>Art & Culture</option>
                      <option>Reading & Writing</option>
                    </select>
                  </div>
                </div>
  
                {/* Offerd Salary */}
                <div className="col-lg-6">
                  <span className="pf-title">Offered Salary</span>
                  <div className="pf-field">
                    <select>
                      <option>$40k-$60k</option>
                      <option>$60k-$80k</option>
                      <option>$80k-$100k</option>
                    </select>
                  </div>
                </div>
  
                {/* Career Level */}
                <div className="col-lg-6">
                  <span className="pf-title">Career Level</span>
                  <div className="pf-field">
                    <select>
                      <option>Entry Level</option>
                      <option>Mid Level</option>
                      <option>Senior Level</option>
                    </select>
                  </div>
                </div>
  
                {/* Application Deadline */}
                <div className="col-lg-12">
                  <span className="pf-title">Application Deadline Date</span>
                  <div className="pf-field">
                    <input type="date" className="form-control" />
                  </div>
                </div>
  
                {/* Skill Requirements */}
                <div className="col-lg-12">
                  <span className="pf-title">Skill Requirements</span>
                  <div className="pf-field">
                    <ul className="tags">
                      <li className="addedTag">
                        Photoshop
                        <span onClick={() => {}} className="tagRemove">
                          x
                        </span>
                        <input type="hidden" name="tags[]" value="Photoshop" />
                      </li>
                      <li className="tagAdd taglist">
                        <input type="text" id="search-field" placeholder="Add new skill..." />
                      </li>
                    </ul>
                  </div>
                </div>
  
                {/* Country */}
                <div className="col-lg-6">
                  <span className="pf-title">Country</span>
                  <div className="pf-field">
                    <select>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
  
                {/* City */}
                <div className="col-lg-6">
                  <span className="pf-title">City</span>
                  <div className="pf-field">
                    <select>
                      <option>New York</option>
                      <option>San Francisco</option>
                      <option>Los Angeles</option>
                    </select>
                  </div>
                </div>
  
                {/* Address */}
                <div className="col-lg-12">
                  <span className="pf-title">Complete Address</span>
                  <div className="pf-field">
                    <textarea defaultValue="Collins Street West, Victoria 8007, Australia." />
                  </div>
                </div>
  
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