import React from 'react';
import Overview from './Overview';
import ActivityList from './ActivityList';
import './Dashboard.css';


const Dashboard = () => {
  
  const activityItems = [
    {
      id: 1,
      name: 'Ashley Lopez',
      phone: '(212) 555-8263',
      email: 'ashley@example.com',
      amount: 200,
      type: 'Volunteer'
    },
    {
      id: 2,
      name: 'Andrea Sanchez',
      phone: '(845) 752-4788',
      email: 'andrea@example.com',
      amount: 15,
      type: 'Donor'
    },
    {
      id: 3,
      name: 'Brian Scott',
      phone: '(719) 810-7869',
      email: 'brian@example.com',
      amount: 0,
      type: 'Follower'
    }
  
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Overview />
      <ActivityList activityItems={activityItems} /> 
    </div>
  );
};

export default Dashboard;