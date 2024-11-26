import React from 'react';
import PostJobs from './PostJobs';
import ManageApplications from './ManageApplications';
import RecruiterDashboard from './RecruiterDashboard';

const recruiterRoutes = [
  {
    path: '/recruiter',
    element: <RecruiterDashboard />,
    children: [
      { path: 'post-jobs', element: <PostJobs /> },
      { path: 'manage-applications', element: <ManageApplications /> },
    ],
  },
];

export default recruiterRoutes;
