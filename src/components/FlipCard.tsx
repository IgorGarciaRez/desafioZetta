import React, { useState } from 'react';
import './FlipCard.css';

const FlipCardBootstrap = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front d-flex align-items-center justify-content-center bg-primary text-white">
          Frente
        </div>
        <div className="flip-card-back d-flex align-items-center justify-content-center bg-secondary text-white">
          Verso
        </div>
      </div>
    </div>
  );
};

export default FlipCardBootstrap;
