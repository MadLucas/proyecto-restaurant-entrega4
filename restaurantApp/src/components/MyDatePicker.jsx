import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      isClearable
      placeholderText="Selecciona una fecha"
    />
  );
}

export default MyDatePicker;