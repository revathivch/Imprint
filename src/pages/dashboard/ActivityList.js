import React from 'react';
import ActivityItem from './ActivityItem';
import './ActivityList.css';

const ActivityList = ({ activityItems }) => {
    return (
      <div className='activity-list'>
        <h2>Activity</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Amount</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {activityItems.map(activity => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default ActivityList;
