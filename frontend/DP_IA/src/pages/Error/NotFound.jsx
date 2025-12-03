import React from "react";
import "./Error.css";

function NotFound() {
  return (
    <div className="error-container">
      <h1>404 - Página no encontrada</h1>
      <p>La ruta que intentas acceder no existe.</p>
    </div>
  );
}

export default NotFound;