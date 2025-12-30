import React, { useEffect, useState } from "react";   
import "./Dashboard.css"; 
import logo from '../../assets/images/logo.png';
import logoUser from '../../assets/images/icoUser.webp';

function Dashboard() {
  const [isVisible, setIsVisible] = useState(true);
  const [nameUser, setNameUser] = useState("");

  const timeOutLogin = () => {
    setTimeout(() => {
      setIsVisible(false);
      
      console.log("Timeout completed, state updated.");
    }, 5000); 
  }

  useEffect(() => {
    timeOutLogin();
    setNameUser("Megan Ramirez");
  }, []);

  return (
    <div className="dashboard-container">
      <header className="headerDashboard">
        <div className="interHeader1">
          <img src={logo} className="logoMuni" />
          <h2>Municipalidad de Villarrica</h2>  
        </div>
        <div className="interHeader2">
          <button className="btnUser"><img src={logoUser} className="logoUser" /></button>
        </div>
      </header>
      <div
        className={`fade-transition ${isVisible ? 'fade-visible' : 'fade-hidden'}`}
      >
        <h1 className="nombreUser">Bienvenido {nameUser}</h1>   
        <p>Aquí podrás acceder a tus datos y funcionalidades principales.</p>
      </div>

      <div
        className={`fade-transition ${isVisible ? 'fade-hidden' : 'fade-visible'}`}
      >
        <div className="contentPDFUp">
          <div className="contentPDFIcon">

          </div>
          <div className="contentPDFText">
            <h1>Dashboard Principal</h1>
            <p>Explora las diferentes secciones y herramientas disponibles.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;