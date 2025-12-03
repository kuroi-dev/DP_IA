import React from "react";
import "./Error.css";

function Forbidden() {
  return (
    <div className="error-container">
      <h1>403 - Acceso prohibido</h1>
      <p>No tienes permisos para acceder a esta página.</p>
    </div>
  );
}

export default Forbidden;