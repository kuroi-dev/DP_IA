import React, { useEffect, useState } from "react";   
import "./Dashboard.css"; 

function Dashboard() {
  const [isVisible, setIsVisible] = useState(true);

  const timeOutLogin = () => {
    setTimeout(() => {
      setIsVisible(false);
      console.log("Timeout completed, state updated.");
    }, 5000); 
  }

  useEffect(() => {
    timeOutLogin();
  }, []);

  return (
    <div className="dashboard-container">
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 3s ease-out',
          visibility: isVisible ? 'visible' : 'hidden'
        }}
      >
        <h1>Bienvenido Dashboard</h1>
        <p>Aquí podrás acceder a tus datos y funcionalidades principales.</p>
      </div>

      <div
        style={{
          opacity: isVisible ? 0 : 1,
          transition: 'opacity 3s ease-out',
          visibility: isVisible ? 'hidden' : 'visible'
        }}
      >
        <h1>Dashboard</h1>
        <p>testing</p>
        <p>testing</p>
      </div>
    </div>
  );
}

export default Dashboard;