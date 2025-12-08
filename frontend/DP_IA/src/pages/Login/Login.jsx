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
            <div className="login-inter4-container tamano1-1">
              <div></div>
              <div><h1>Municipalidad de Villarrica</h1></div>
            </div>
            <div className="login-inter4-container tamano1-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae mollitia eaque aliquam fugiat, a tenetur soluta nemo molestias ratione obcaecati repellendus, laudantium ex quidem voluptatibus, eos culpa aspernatur beatae.</p>
            </div>
            <div className="login-inter4-container tamano1-3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
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