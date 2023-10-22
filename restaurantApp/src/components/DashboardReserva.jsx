import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Table from 'react-bootstrap/Table';

const DashboardReservas = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const obtenerReservas = async () => {
            try {
                const collectionRef = collection(db, 'Reservas');
                const response = await getDocs(collectionRef);

                const reservasData = response.docs.map((doc) => {
                    const data = doc.data();
                    data.id = doc.id;
                    return data;
                });

                setReservas(reservasData);
            } catch (error) {
                console.error('Error al obtener las reservas:', error);
            }
        };

        obtenerReservas();
    }, []);

    return (
        <div>
            <h1>Reservas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva) => (
                        <tr key={reserva.id}>
                            <td>{reserva.id}</td>
                            <td>{reserva.nombre}</td>
                            <td>{reserva.apellido}</td>
                            <td>{new Date(reserva.fecha.seconds * 1000).toLocaleDateString()}</td>
                            <td>{reserva.hora}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DashboardReservas;
