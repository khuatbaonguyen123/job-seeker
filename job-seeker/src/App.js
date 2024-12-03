import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApplicationForm } from './component/ApplicationForm';
import { Layout } from './component/layout/layout';
import { JobDetails } from './pages/JobDetails/JobDetails';
import { Search } from './pages/Search/search';

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
      </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
