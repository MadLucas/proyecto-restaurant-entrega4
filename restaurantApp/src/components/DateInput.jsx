import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const DateInput = ({ name, value, onChange }) => {
  const handleDateChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="input-group" style={{ marginBottom: '20px' }}>
      <InputGroup.Text id="basic-addon-date">Fecha</InputGroup.Text>
      <Form.Control
        type="date"
        id="fecha"
        name={name}
        value={value}
        onChange={handleDateChange}
        className="form-control"
      />
    </div>
  );
};

export default DateInput;

