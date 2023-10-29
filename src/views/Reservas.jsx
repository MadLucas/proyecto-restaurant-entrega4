import React, { useState } from "react";
import DateInput from "../components/DateInput";
import { InputGroup } from "react-bootstrap";
import { Form, Button, Card, Container } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import "./Reservas.css";

const Reservas = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    hora: "12:00 PM",
    fecha: "",
  });

  const handleInputChange = (name, value) => {
    setCliente({ ...cliente, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const collectionRef = collection(db, "Reservas");
      await addDoc(collectionRef, {
        ...cliente,
        fecha: new Date(cliente.fecha).toLocaleDateString('es-ES'),
      });
      setCliente({
        nombre: "",
        apellido: "",
        hora: "12:00 PM",
        fecha: "",
      });
      alert("Reserva guardada con éxito.");
    } catch (error) {
      console.error("Error saving reservation:", error);
    }
  };

  return (
    <>
    <Container className="d-flex justify-content-center" style={{flexWrap:"wrap"}}>
    <Card className="bg-danger text-white m-2 p-2">
      <h4 className="text-center">Ingresa tu reserva</h4>
      <div id="inputsContainer">
        <div>
          <InputGroup style={{ marginBottom: '20px' }}>
            <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
            <Form.Control
              name="nombre"
              placeholder="Nombre"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
              value={cliente.nombre}
              onChange={(e) => handleInputChange("nombre", e.target.value)}
            />
          </InputGroup>
        </div>
        <div>
          <InputGroup>
            <InputGroup.Text id="basic-addon2">Apellido</InputGroup.Text>
            <Form.Control
              name="apellido"
              placeholder="Apellido"
              aria-label="Apellido"
              aria-describedby="basic-addon2"
              value={cliente.apellido}
              onChange={(e) => handleInputChange("apellido", e.target.value)}
            />
          </InputGroup>
        </div>
        <div>
          <InputGroup className="mt-3">
            <InputGroup.Text id="basic-addon3">Hora</InputGroup.Text>
            <Form.Select
              name="hora"
              aria-label="Hora"
              value={cliente.hora}
              onChange={(e) => handleInputChange("hora", e.target.value)}
            >
              <option value="NONE">HORA DE RESERVA</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </Form.Select>
          </InputGroup>
        </div>
        <div id="MyDatePicker">
          <DateInput
            name="fecha"
            value={cliente.fecha}
            onChange={handleInputChange}
          />
        </div>
        <div id="submitButton">
          <Button variant="primary" onClick={handleFormSubmit}>
            Enviar
          </Button>
        </div>
      </div>
    </Card>
    <Card className="bg-primary m-2 p-2">
      <Card.Body className="text-light text-center">50% de descuento Lunes, Martes y Miercoles</Card.Body>
      <Card.Img src="https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:"250px", margin:"auto"}}></Card.Img>
    </Card>
    </Container>
    </>
  );
};

export default Reservas;
