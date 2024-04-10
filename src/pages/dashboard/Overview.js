import React from 'react';
import './Overview.css';

const Overview = () => {
  
  const raisedThisMonth = 5405;
  const availablePayout = 2218;
  const newSupporters = 72;
  const newFollowers = 297;

  return (
    <div className='overview'>
      <div>
        <h2>Raised This Month</h2>
        <p>${raisedThisMonth}</p>
      </div>
      <div>
        <h2>Available Payout</h2>
        <p>${availablePayout}</p>
      </div>
      <div>
        <h2>New Supporters</h2>
        <p>{newSupporters}</p>
      </div>
      <div>
        <h2>New Followers</h2>
        <p>{newFollowers}</p>
      </div>
    </div>
  );
};

export default Overview;
