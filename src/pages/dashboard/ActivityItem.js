import React from 'react';
import './ActivityItem.css';

const ActivityItem = ({ activity }) => {
  return (
    <tr className="activity-item"> 
      <td> {activity.name}</td> 
      <td> {activity.phone}</td> 
      <td> {activity.email}</td> 
      <td> {activity.amount}</td> 
     
    </tr>
  );
};

export default ActivityItem;
