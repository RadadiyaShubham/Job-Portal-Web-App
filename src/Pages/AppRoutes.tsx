import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FindJobsPage from "./FindJobsPage";
import JobDescPage from "./JobDescPage";
import ApplyJobPage from "./ApplyJobPage";
import CompanyPage from "./CompanyPage";
import PostJobPage from "./PostJobPage";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import TalentProfilePage from "./TalentProfilePage";
import SignUpPage from "./SignUpPage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import FindTalentPage from "./FindTalentPage";
import About from "./About";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";
import HelpSupport from "./HelpSupport";
import Feedback from "./Feedback";
import FAQs from "./FAQs";
import { RootState } from "../Store";
import AdminPanel from "./AdminPanel";
import AdminJobs from './AdminJobs';
import AdminUsers from './AdminUsers';
import AdminLogin from "./AdminLogin";

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const user = useSelector((state: RootState) => state.user);
  return user ? element : <Navigate to="/signup" />;
};


const AppRoutes = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <BrowserRouter>
      <div className='relative'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/find-jobs' element={<ProtectedRoute element={<FindJobsPage />} />} />
          <Route path='/find-talent' element={<ProtectedRoute element={<FindTalentPage />} />} />
          <Route path='/jobs/:id' element={<ProtectedRoute element={<JobDescPage />} />} />
          <Route path='/apply-job/:id' element={<ProtectedRoute element={<ApplyJobPage />} />} />
          <Route path='/company/:name' element={<ProtectedRoute element={<CompanyPage />} />} />
          <Route path='/post-job/:id' element={<ProtectedRoute element={<PostJobPage />} />} />
          <Route path='/job-history' element={<ProtectedRoute element={<JobHistoryPage />} />} />
          <Route path='/posted-job/:id' element={<ProtectedRoute element={<PostedJobPage />} />} />
          <Route path='/talent-profile/:id' element={<ProtectedRoute element={<TalentProfilePage />} />} />
          <Route path='/signup' element={user ? <Navigate to="/" /> : <SignUpPage />} />
          <Route path='/login' element={user ? <Navigate to="/" /> : <SignUpPage />} />
          <Route path='/profile' element={<ProtectedRoute element={<ProfilePage />} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-conditions' element={<TermsConditions />} />
          <Route path='/help-support' element={<HelpSupport />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path="/admin-login"  element={<AdminLogin />}/>
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute element={<AdminPanel />} />
            } 
          />
          <Route path="/admin/jobs"  element={<AdminJobs />}/>
          <Route path="/admin/users" element={<ProtectedRoute element={<AdminUsers />} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
