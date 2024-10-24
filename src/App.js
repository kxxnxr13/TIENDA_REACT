import React from 'react';
import './App.css'; // Importa los estilos globales
import HoverMe from './componentes/HoverMe'; // Importa HoverMe
import Card from './componentes/Card'; // Importa Card
import Newsletter from './componentes/Newsletter'; // Importa Newsletter
import TailwindCard from './componentes/TailwindCard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Components Example</h1>
        <div className="main-container">
          <Card /> {/* Componente Card */}
          <Newsletter /> {/* Componente Newsletter */}
          <HoverMe /> {/* Componente HoverMe */}
          <TailwindCard />
        </div>
      </header>
    </div>
  );
}

export default App;
