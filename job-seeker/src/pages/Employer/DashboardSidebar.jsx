

export const EmployerDashboardSidebar = () => {
    return (
        <aside className="col-lg-3 column border-right">
          <div className="widget">
            <div className="tree_widget-sec">
              <ul>
                <li>
                  <a href="/company-profile" title="">
                    <i className="la la-file-text"></i>Company Profile
                  </a>
                </li>
                <li>
                  <a href="/job-manage" title="">
                    <i className="la la-briefcase"></i>Manage Jobs
                  </a>
                </li>
                <li>
                  <a href="/employer-applicant-manage" title="">
                    <i className="la la-paper-plane"></i>Resumes
                  </a>
                </li>
                <li>
                  <a href="/post-new-job" title="">
                    <i className="la la-file-text"></i>Post a New Job
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
    );
}