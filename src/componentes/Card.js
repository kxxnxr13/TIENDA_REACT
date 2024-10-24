import React from 'react';
import '../App.css';  // Importar los estilos

const Card = () => {
  return (
    <div className='card'>
      <div >
      <div className="image-container">
        <img src={require('../images/cool-chair.jpg')} alt="Cool Chair" />
      </div>
      <div className="content">
        <h3>Cool Chair</h3>
        <p>$100</p>
      </div>
    </div>
    </div>

  );
};

export default Card;


