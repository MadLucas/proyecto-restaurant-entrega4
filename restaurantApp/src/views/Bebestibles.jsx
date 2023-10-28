import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { CardGroup, Card } from 'react-bootstrap';

const Bebestibles = () => {
    const [menu, setBebestibles] = useState([]);

    useEffect(() => {
        const getBebestibles = async () => {
            try {
                const collectionRef = collection(db, 'Bebestibles');
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data();
                    return data;
                });

                setBebestibles(docs);
            } catch (error) {
                console.log(error);
            }
        };
        getBebestibles();
    }, []);

    return (
        <section>
            <h1 className="text-center text-light">Bebestibles</h1>
            <CardGroup className="justify-content-center mt-5">
                {menu.map((Bebida) => (/* Cambiar 'comida' a 'Bebida' aquí */
                    <div key={Bebida.id} className="mx-3 ms-3" >
                        <Card style={{ width: '18rem', height: '250px', marginTop: '20px' }}>
                            <Card.Img style={{ height: '200px' }} variant="top" src={Bebida.img} alt={Bebida.Bebida} />
                            <Card.Body>
                                <Card.Title>{Bebida.Bebida.toUpperCase()}</Card.Title>
                                <Card.Text style={{ height: '100px' }}>{Bebida.detalle}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </CardGroup>
        </section >
    );
};

export default Bebestibles;
