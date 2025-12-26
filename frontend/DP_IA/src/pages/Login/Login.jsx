import React, { useState } from "react";
import "./Login.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import logoEmpresa from '../../assets/images/logo.png';
import logoFacebook from '../../assets/images/face.webp';
import logoInstagram from '../../assets/images/insta.webp';
import logoYoutube from '../../assets/images/you.png';
import logoX from '../../assets/images/x.webp';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar datos a Flask
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="content-fondo">
      <div className="login-container">
          <div className="inter-content-login tamano1">
            <div className="content-logoAndText">
              <div className="flexDisplay">
                <div className="content-logo">
                  <img src={logoEmpresa} alt="Logo" className=" logoLogin" />
                </div>
                
                <h1>Municipalidad de Villarrica</h1>
              </div>
              
              <div className="content-parrafo">
                <p>Plataforma interna de la Municipalidad de Villarrica que permite la lectura y gestión de documentos oficiales, facilitando además la generación automática de podcasts en audio.</p>
              </div>
              <div className="content-socialmedia">
                <div className="socialmedia"><img className="logoSocial" src={logoFacebook} alt="Facebook" /></div>
                <div className="socialmedia"><img className="logoSocial" src={logoInstagram} alt="Instagram" /></div>
                <div className="socialmedia"><img className="logoSocial" src={logoYoutube} alt="YouTube" /></div>
                <div className="socialmedia"><img className="logoSocial" src={logoX} alt="X" /></div>
              </div>
            </div>
          </div>
          
          <div className="inter-content-login tamano2">   
            <Form className="login-form">
              <div className="content-user-login tamano3"> 
                <h2>Iniciar Sesión</h2>
              </div>
              <div className="content-user-login tamano4"> 
                <Form.Group>
                  <p>Usuario</p>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>
              <div className="content-user-login tamano4"> 
                <Form.Group>
                  <p>Contraseña</p> 
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
              </div>
              <div className="content-user-login tamano5"> 
                <input type="checkbox" /><p>Recordar esta cuenta</p>
              </div>
              <div className="content-user-login tamano6"> 
                <Button type="submit">Iniciar Sesión</Button>
              </div>
              <div className="content-user-login tamano7"> 
                <p>Al hacer clic en "Iniciar sesión", aceptas los <br /> <b>Términos de servicio</b> | <b>Política de privacidad</b></p>
              </div>
                
              

            </Form>

          </div>
      </div>
    </div>
  );
}

export default Login