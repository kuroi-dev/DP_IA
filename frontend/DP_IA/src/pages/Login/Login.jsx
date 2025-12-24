import React, { useState } from "react";
import "./Login.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import logoEmpresa from '../../assets/images/logo.png';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar datos a Flask
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Container fluid className="login-container">
      <Row className="vh-100 align-items-center g-0 limitCol0">
        <Col  className="text-end p-4 limitCol colortest">
          <div>
            <div className="flexDisplay">
              <img src={logoEmpresa} alt="Logo" className=" logoLogin" />
              <h1>Municipalidad de Villarrica</h1>
            </div>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos corporis mollitia, cum blanditiis nesciunt, odio explicabo iure sed quisquam veniam dolor debitis vero aliquam ut eum voluptatibus, itaque facilis.</p>
          </div>
        </Col>


        <Col  className="d-flex justify-content-center colortest limitCol " >
          <Form className="login-form">
            <h2>Iniciar Sesión</h2>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Usuario" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Contraseña" />
              <h1></h1>
            </Form.Group>
            <Button type="submit">Ingresar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login