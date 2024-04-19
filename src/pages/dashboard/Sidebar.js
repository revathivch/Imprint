import React from 'react';
import profilePic from '../../assets/images/profile-pic1.jpeg';
import { FaHome, FaExchangeAlt, FaUserShield, FaHeart, FaEnvelope, FaChartLine, FaCog } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <button className="sidebar-button active"><FaHome /> Home</button>
      </div>
      <div className="sidebar-item">
        <button className="sidebar-button"><FaExchangeAlt /> Transactions</button>
      </div>
      <div className="sidebar-item">
        <button className="sidebar-button"><FaUserShield /> Administration</button>
      </div>
      <div className="sidebar-item">
        <button className="sidebar-button"><FaHeart /> Supporters</button>
      </div>
      <div className="sidebar-item">
        <button className="sidebar-button"><FaEnvelope /> Messages</button>
      </div>
      <div className="sidebar-item">
        <button className="sidebar-button"><FaChartLine /> Reports</button>
      </div>
      <div className="sidebar-item">
        <button className="sidebar-button"><FaCog /> Setting</button>
      </div>
      <div className="sidebar-spacer"></div>
      
      <div className="sidebar-user">
        <img src={profilePic} alt="Profile" className="sidebar-user-image" />
        <div className="sidebar-user-info">
          <div className="sidebar-user-name">Sergey Goldberg</div>
          <div className="sidebar-user-email">company@example.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
