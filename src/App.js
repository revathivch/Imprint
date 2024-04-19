import React from 'react';
import './App.css'; 
import Sidebar from './pages/dashboard/Sidebar';
import Dashboard from './pages/dashboard/Dashboard'; 

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
