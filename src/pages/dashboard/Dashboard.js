import React from 'react';
import { useState } from 'react';
import Overview from './Overview';
import ActivityList from './ActivityList';
import './Dashboard.css';



import profilePic2 from '../../assets/images/profile-pic2.jpeg';
import profilePic3 from '../../assets/images/profile-pic3.jpeg';
import profilePic4 from '../../assets/images/profile-pic4.jpeg';
import profilePic5 from '../../assets/images/profile-pic5.jpeg';
import profilePic6 from '../../assets/images/profile-pic6.jpeg';
import profilePic7 from '../../assets/images/profile-pic7.jpeg';
import profilePic8 from '../../assets/images/profile-pic8.jpeg';



const Dashboard = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => { // 'handleSearchChange' handler defined here
    setSearchQuery(event.target.value);
  };
  
  const activityItems = [
    {
      id: 1,
      name: 'Ashley Lopez',
      phone: '(212) 555-8263',
      email: 'ashley@example.com',
      amount: 200,
      type: 'Volunteer',
      total: 200.00, 
      title: "Psychologist",
      profile_pic: profilePic2
    },
    {
      id: 2,
      name: 'Andrea Sanchez',
      phone: '(845) 752-4788',
      email: 'andrea@example.com',
      amount: 15,
      type: 'Donor',
      total: 50.00,
      title: "Social Worker",
      profile_pic: profilePic3
    },
    {
      id: 3,
      name: 'Brian Scott',
      phone: '(719) 810-7869',
      email: 'brian@example.com',
      amount: 0,
      type: 'Follower',
      total: 0.00,
      title: "Professor",
      profile_pic: profilePic4
    },
    {
      id: '4',
      name: 'James Smith',
      phone: '(303) 555-0105',
      email: 'james@example.com',
      amount: 321.75,
      type: 'Supporter',
      total: 30.22,
      title: 'Engineer',
      profile_pic: profilePic5 
    },
    {
      id: '5',
      name: 'Maria Garcia',
      phone: '(404) 555-0182',
      email: 'maria@example.com',
      amount: 53.27,
      type: 'Supporter',
      total: 497.95,
      title: 'Teacher',
      profile_pic: profilePic6
    },
    {
      id: '6',
      name: 'Robert Johnson',
      phone: '(505) 555-0133',
      email: 'robert@example.com',
      amount: 410.27,
      type: 'Donor',
      total: 320.5,
      title: 'Designer',
      profile_pic: profilePic7 
    },
    {
      id: '7',
      name: 'Linda Martinez',
      phone: '(606) 555-0144',
      email: 'linda@example.com',
      amount: 178.87,
      type: 'Follower',
      total: 378.02,
      title: 'Manager',
      profile_pic: profilePic8 
    },

  
  ];

  return (
    // <div className="dashboard">
    //   <h2>Dashboard</h2>
    //   <Overview />
    //   <ActivityList activityItems={activityItems} /> 
    // </div>

    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <input
          type="text"
          className="dashboard-search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Overview />
      <ActivityList activityItems={activityItems} /> 
    </div>
  );
};

export default Dashboard;