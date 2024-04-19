import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';
import './Overview.css';

const Overview = () => {

  const raisedThisMonth = 5405;
  const availablePayout = 2218;
  const newSupporters = 72;
  const newFollowers = 297;

  // Example data for sparklines
  const dataRaisedThisMonth = [18, 10, 5, 20, 8, 15, 10, 12, 7, 6, 8];
  const dataAvailablePayout = [3, 12, 5, 18, 9, 4, 2, 8, 9, 6, 8, 7];
  const dataNewSupporters = [1, 3, 2, 4, 3, 7, 20, 5, 4, 9, 3, 11];
  const dataNewFollowers = [8, 17, 13, 23, 18, 6, 8, 15, 3, 8, 11];

  return (
    <div>
      <h3>Overview</h3>
      <div className='overview'>
        <div className='amount-raised'>
          <h2>Raised This Month</h2>
          <p>${raisedThisMonth}</p>
          <Sparklines data={dataRaisedThisMonth} limit={13}>
            <SparklinesBars style={{ fill: "#9e4ef7" }} />
          </Sparklines>
        </div>
        <div>
          <h2>Available Payout</h2>
          <p>${availablePayout}</p>
          <Sparklines data={dataAvailablePayout} limit={13}>
            <SparklinesBars style={{ fill: "#9e4ef7" }} />
          </Sparklines>
        </div>
        <div>
          <h2>New Supporters</h2>
          <p>{newSupporters}</p>
          <Sparklines data={dataNewSupporters} limit={13}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
        <div>
          <h2>New Followers</h2>
          <p>{newFollowers}</p>
          <Sparklines data={dataNewFollowers} limit={13}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
      </div>
    </div>
  );
};

export default Overview;
