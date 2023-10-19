import React from "react";
import MyDatePicker from "../components/MyDatePicker";
import { InputGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

const Reservas = () => {
    return (
        <div id="inputsContainer">
            <div>
                <InputGroup style={{marginBottom:'20px'}}>
                    <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                    <Form.Control
                        placeholder="Nombre"
                        aria-label="Nombre"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <div>
                <InputGroup>
                    <InputGroup.Text id="basic-addon1">Apellido</InputGroup.Text>
                    <Form.Control
                        placeholder="Apellido"
                        aria-label="Apellido"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <div id="MyDatePicker">
                <MyDatePicker/>
            </div>
            <div id="submitButton">
            <Button variant="primary">Enviar</Button>
            </div>
        </div>
    )
}

export default Reservas;