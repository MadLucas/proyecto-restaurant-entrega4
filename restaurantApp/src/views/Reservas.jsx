import React, { useState } from "react";
import DateInput from "../components/DateInput";
import { InputGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const Reservas = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    hora: "12:00 PM",
    fecha: "", // Cambia fecha a un string
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
        fecha: new Date(cliente.fecha).toLocaleDateString('es-ES'), // Formatea la fecha
      });
      setCliente({
        nombre: "",
        apellido: "",
        hora: "12:00 PM",
        fecha: "", // Reinicia la fecha
      });
      alert("Reserva guardada con éxito.");
    } catch (error) {
      console.error("Error saving reservation:", error);
    }
  };

  return (
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
  );
};

export default Reservas;
