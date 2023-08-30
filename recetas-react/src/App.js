import React from 'react';
import Card from './componentes/carta'; 
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import rav from './img/ravioles.jpg'
import lasag from './img/lasagna.jpg'
import ñoq from './img/ñoquis.jpg'
import can from './img/canelones.jpg'
import sorr from './img/sorrentinos.jpg'

const App = () => {
const cardItems = ['Item 1', 'Item 2', 'Item 3']; // Lista de elementos para la lista

  return (
    <div className="app">
      <div className="cartas"></div>
      <Navbar/>
      <Card
        imageSrc={rav}
        title="Ravioles con salsa"
        description="Ingredientes:

Ravioles rellenos
400 g de tomates triturados o salsa de tomate
1 cebolla, picada
2 dientes de ajo, picados
2 cucharadas de aceite de oliva
Sal, pimienta y albahaca al gusto
Queso parmesano rallado
Instrucciones:

Cocina los ravioles según las indicaciones, escúrrelos y resérvalos.

Sofríe cebolla y ajo en aceite de oliva en una sartén.

Agrega tomates triturados o salsa de tomate. Cocina 15-20 min a fuego bajo.

Sazona con sal, pimienta y albahaca. Agrega ravioles y calienta.

Sirve con queso parmesano rallado por encima.
        "
        items={cardItems}
      />
      <Card
        imageSrc={lasag}
        title="Lasagna"
        description="Ingredientes:
        
        12 placas de lasaña precocidas
        500 g de carne molida (res o cerdo)
        1 cebolla picada
        2 dientes de ajo picados
        800 g de salsa de tomate
        Sal y pimienta al gusto
        250 g de queso ricotta
        1 huevo
        200 g de espinacas cocidas y escurridas
        200 g de queso mozzarella rallado
        Instrucciones:
        
        Preparar la carne: Sofreír cebolla y ajo, agregar carne hasta dorar. Añadir salsa, sal y pimienta. Cocinar 10 min.
        Mezclar el relleno: En un tazón, combinar ricotta, huevo y espinacas.
        Armar la lasaña: En un molde, poner capa de salsa, placas, relleno, queso mozzarella. Repetir.
        Hornear: Cubrir con papel aluminio y hornear a 180 °C por 25 min. Luego, hornear descubierto 15 min hasta dorar.
        Reposar: Dejar reposar unos minutos antes de cortar y servir."
        items={cardItems}
      />
      <Card
        imageSrc={ñoq}
        title="Ñoquis con salsa"
        description="Ingredientes:

        500 g de papas
        150 - 200 g de harina
        Sal
        Instrucciones:
        
        Cocina y tritura las papas.
        Mezcla con harina hasta formar una masa.
        Corta en trozos y cocina en agua hirviendo hasta que floten.
        Salsa de Tomate:
        
        Ingredientes:
        
        400 g de tomates triturados/salsa de tomate
        Cebolla, ajo picado
        2 cucharadas de aceite de oliva
        Sal, pimienta y albahaca al gusto.
        Instrucciones:
        
        Sofríe cebolla y ajo en aceite de oliva.
        Agrega tomates, cocina 15-20 min a fuego bajo.
        Sazona con sal, pimienta y albahaca.
        Servir:
        
        Mezcla ñoquis con salsa caliente.
        Espolvorea queso parmesano rallado.
        ¡Disfruta!"
        items={cardItems}
      />
      <Card
        imageSrc={can}
        title="Canelones"
        description="Ingredientes:

        12 láminas de canelones
        250 g de espinacas picadas y salteadas
        250 g de ricotta
        1 huevo
        1/2 taza de queso parmesano rallado
        Sal, pimienta y nuez moscada al gusto
        Instrucciones:
        
        Cocina las láminas de canelones según las instrucciones y enfríalas.
        
        Mezcla las espinacas con la ricotta, huevo, mitad del queso, sal, pimienta y nuez moscada.
        
        Rellena las láminas con esta mezcla, enrolla y coloca en fuente con salsa de tomate.
        
        Salsa de Tomate:
        
        Ingredientes:
        
        400 g de tomates triturados/salsa de tomate
        Cebolla, ajo picado
        2 cucharadas de aceite de oliva
        Sal, pimienta y albahaca al gusto
        Instrucciones:
        
        Sofríe cebolla y ajo en aceite, agrega tomates y condimentos. Cocina unos 15-20 min.
        
        Vierte la salsa sobre los canelones.
        
        Horneado:
        
        Precalienta a 180°C y hornea los canelones con salsa y queso durante 20-25 min."
        items={cardItems}
      />
      <Card
        imageSrc={sorr}
        title="Sorrentinos con crema"
        description="Ingredientes:

        Sorrentinos rellenos
        1 taza de crema de leche
        1 cucharada de mantequilla
        1 cebolla pequeña, picada
        2 dientes de ajo, picados
        1/2 taza de caldo de pollo o vegetales
        Sal y pimienta al gusto
        Queso parmesano rallado
        Perejil fresco picado (opcional)
        Instrucciones:
        
        Cocina los sorrentinos según el paquete y escúrrelos.
        
        Sofríe cebolla y ajo en mantequilla.
        
        Añade crema de leche y caldo, cocina hasta espesar.
        
        Sazona con sal y pimienta. Agrega sorrentinos a la salsa.
        
        Calienta todo a fuego bajo.
        
        Sirve con queso parmesano y perejil."
        items={cardItems}
      />
      <Footer/>
    </div>
  );
};
export default App;
