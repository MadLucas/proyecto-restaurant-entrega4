import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function UserForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'Admin' && password === '123456') {
      navigate("/Admin");
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Card className="mx-auto my-5" style={{ maxWidth: '600px' }}>
      <Card.Body>
        <h3 className="text-center">Ingresar Usuario</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default UserForm;
