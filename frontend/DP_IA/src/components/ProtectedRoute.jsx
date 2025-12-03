import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setIsValid(false);
      return;
    }

    // Llamada al backend Flask para validar token
    fetch("http://localhost:5000/api/validate-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsValid(data.valid); // backend devuelve { valid: true/false }
      })
      .catch(() => setIsValid(false));
  }, [token]);

  if (isValid === null) {
    return <p>Cargando...</p>; // mientras valida
  }

  if (!isValid) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
