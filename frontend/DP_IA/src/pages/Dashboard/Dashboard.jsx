import React, { useEffect, useState } from "react";   
import "./Dashboard.css"; 
import logo from '../../assets/images/logo.png';
import logoUser from '../../assets/images/icoUser.webp';
import logoPDF from '../../assets/images/pdf.webp';

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
        <div className="contentPDFUp" style={{display: "none"}}>
          <button className="contentPDFIcon">
            <img src={logoPDF} className="logoPDF" />
          </button>
          <div className="contentPDFText">
            <p>Sube tu PDF para posteriormente procesarlo.<br /> Recuerda que el peso maximo es de 2500 megas.</p>
          </div>
          
        </div>
        <div className="contentPrePDFUp">
          <div className="contentInterPrePdf">
            <div className="contentDocPrePdf">

            </div>
          </div>
          <div className="contentInterMenuPdf">
            <div className="contenIaData1">
              <h2>Panel de Configuración de IA</h2>
            </div>
            <div className="contenIaData2">
              <p>Selección de modelo de IA</p>
              <select name="" id="">
                <option value="">Modelo 1</option>
                <option value="">Modelo 2</option>
                <option value="">Modelo 3</option>  
              </select>
            </div>
            <div className="contenIaData2">
              <p>Idioma de salida</p>
              <select name="" id="" className="custom-select">
                <option value="">Español</option>
                <option value="">Inglés</option>
              </select>
            </div>
            <div className="contenIaData2">
              <p>Nivel de detalle de la respuesta</p>
              <select name="" id="">
                <option value="">Bajo</option>
                <option value="">Medio</option>
                <option value="">Alto</option>2
              </select>
            </div>
            <div className="contenIaData3">
              <p>Pront:</p>
              <textarea rows="5" cols="30">Ejemplo: “Hola, resúmeme el capítulo 5 y enumera los puntos más importantes de este capítulo.”</textarea>
            </div>
            <div className="contenIaData4">
              <button className="btn1">volver</button>
              <button className="btn2">siguiente</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;