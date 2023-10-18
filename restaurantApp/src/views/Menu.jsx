import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { CardGroup, Card } from 'react-bootstrap';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, 'Carta');
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data();
          return data;
        });

        setMenu(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getMenu();
  }, []);

  return (
    <section>
      <h1 className="text-center text-light">Menu</h1>
      <CardGroup className="justify-content-center mt-5">
        {menu.map((comida) => (
          <div key={comida.id} className="mx-3 ms-3">
            <Card style={{ width: '18rem', height: '250px', marginTop:'20px'}}>
              <Card.Img style={{ height: '200px' }} variant="top" src={comida.img} alt={comida.comida} />
              <Card.Body>
                <Card.Title>{comida.comida.toUpperCase()}</Card.Title>
                <Card.Text style={{ height: '100px' }}>{comida.detalle}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </CardGroup>
    </section>
  );
};

export default Menu;


