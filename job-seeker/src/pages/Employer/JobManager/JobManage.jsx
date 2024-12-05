import { ParallaxSection } from "../../../component/ParallaxSection";
import { EmployerDashboardSidebar } from "../DashboardSidebar";

export const JobManager = () => {
    return(
        <>
        <ParallaxSection title="Employer"/>
        <section>
		<div class="block no-padding">
			<div class="container">
				 <div class="row no-gape">
                        <EmployerDashboardSidebar/>
                        <JobManage/>
                 </div>
            </div>
        </div>
                 </section>
        </>
    );
};

const JobManage = () => {
    return (
      <div className="col-lg-9 column">
        <div className="padding-left">
          <div className="manage-jobs-sec">
            <h3>Manage Jobs</h3>
            <div className="extra-job-info">
              <span><i className="la la-clock-o"></i><strong>1</strong> Job Posted</span>
              <span><i className="la la-file-text"></i><strong>3</strong> Application</span>
              <span><i className="la la-users"></i><strong>1</strong> Active Job</span>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Applications</td>
                  <td>Created & Expired</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-list-title">
                      <h3><a href="#" title="Job Title">Web Designer / Developer</a></h3>
                      <span><i className="la la-map-marker"></i> Sacramento, California</span>
                    </div>
                  </td>
                  <td>
                    <span className="applied-field">3+ Applied</span>
                  </td>
                  <td>
                    <span>October 27, 2017</span><br />
                    <span>April 25, 2011</span>
                  </td>
                  <td>
                    <span className="status active">Active</span>
                  </td>
                  <td>
                    <ul className="action_job">
                      <li><span>View Job</span><a href="#" title="View"><i className="la la-eye"></i></a></li>
                      <li><span>Edit</span><a href="#" title="Edit"><i className="la la-pencil"></i></a></li>
                      <li><span>Delete</span><a href="#" title="Delete"><i className="la la-trash-o"></i></a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

