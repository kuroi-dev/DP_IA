import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar datos a Flask
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-inter-container position1">
        <div className="login-inter2-container">
          <div className="login-inter3-container tamano1">

          </div>
        </div>
      </div>
      <div className="login-inter-container position2">
        <div className="login-inter2-container">
          <div className="login-inter3-container tamano2">
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login