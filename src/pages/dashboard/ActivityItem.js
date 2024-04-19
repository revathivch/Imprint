import React from 'react';
import './ActivityItem.css';

const ActivityItem = ({ activity }) => {
  return (
    <tr className="activity-item"> 
      <td>
        <div className="name-container">
          <div className="name-info">
            <div className="name">{activity.name}</div>
            <div className="title">{activity.title}</div>
          </div>
          <img src={activity.profile_pic} alt={activity.name} className="profile-image" />
        </div>
      </td> 
      <td> {activity.phone}</td> 
      <td> {activity.email}</td> 
      <td> ${activity.amount}</td> 
      <td> {activity.badge}</td> 
      <td> ${activity.total}</td> 
    </tr>
  );
};

export default ActivityItem;
