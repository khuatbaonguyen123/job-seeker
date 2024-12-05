import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApplicationForm } from './component/ApplicationForm';
import { Layout } from './component/layout/layout';
import { JobDetails } from './pages/JobDetails/JobDetails';
import { Search } from './pages/Search/search';
import { JobPost } from './pages/Employer/JobPost/JobPost';
import { JobManager } from './pages/Employer/JobManager/JobManage';
import { ApplicantManager } from './pages/Employer/ApplicantManager/ApplicantManage';


// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './component/css/style.css';
import './component/css/responsive.css';
import './component/css/colors/colors.css';
import 'animate.css'
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import'./component/css/pagination.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
           <Layout>

           </Layout>
        }/>
        <Route 
          path="/job-details" 
          element={
           <Layout>
            <JobDetails/>
           </Layout>
        }/>
        <Route 
          path="/search" 
          element={
           <Layout>
            <Search/>
           </Layout>
        }/>
        <Route 
          path="/job-post" 
          element={
           <Layout>
            <JobPost/>
           </Layout>
        }/>
        <Route 
          path="/job-manage" 
          element={
           <Layout>
            <JobManager/>
           </Layout>
        }/>
        <Route 
          path="/employer-applicant-manage" 
          element={
           <Layout>
            <ApplicantManager/>
           </Layout>
        }/>
      </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
