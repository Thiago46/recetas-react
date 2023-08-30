import React from 'react';
import Card from './componentes/carta'; 
import Navbar from './componentes/navbar';

const App = () => {
const cardItems = ['Item 1', 'Item 2', 'Item 3']; // Lista de elementos para la lista

  return (
    <div className="app">
      <Navbar/>
      <Card
        imageSrc="ruta-de-la-imagen.jpg"
        imageAlt="Descripción de la imagen"
        title="Título de la carta"
        description="Esta es la descripción de la carta."
        items={cardItems}
      />
    </div>
  );
};
export default App;
