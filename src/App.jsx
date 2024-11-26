import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';


// Auth and User-related
import Home from './components/User/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Jobs from './components/User/Jobs';
import Browse from './components/User/Browse';



// Admin-related 
import AdminDashboard from './components/Admin/AdminDashboard';
import ManageUsers from './components/Admin/ManageUsers';
import ManageJobs from './components/Admin/ManageJobs';
import Analytics from './components/Admin/Analytics';


// Recruiter-related 
import RecruiterDashboard from './components/Recruiter/RecruiterDashboard';
import PostJobs from './components/Recruiter/PostJobs';
import ManageApplications from './components/Recruiter/ManageApplications';
import JobDescription from './components/User/JobDescription';
import Profile from './components/profile';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
      path:'/profile',
      element: <Profile/>
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/jobs',
    element: <Jobs />,
  },
  {
    path: "/description",
    element: <JobDescription />
  },
  {
    path: '/browse',
    element: <Browse />,
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
    children: [
      { path: 'manage-users', element: <ManageUsers /> },
      { path: 'manage-jobs', element: <ManageJobs /> },
      { path: 'analytics', element: <Analytics /> },
    ],
  },
  {
    path: '/recruiter',
    element: <RecruiterDashboard />,
    children: [
      { path: 'post-jobs', element: <PostJobs /> },
      { path: 'manage-applications', element: <ManageApplications /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
