import React, { useState } from 'react';
import './FlipCard.css';

interface FlipCardProps {
  name: string;
  img: string;
}

export default function FlipCardBootstrap({ name, img }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card m-2 ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card-inner`}>
        <div className="flip-card-front">
          <img src={img} alt={name} />
          <div className="card-body">
            <h6 className="card-title mb-0 text-capitalize">{name}</h6>
          </div>
        </div>

        <div className="flip-card-back">
          <p className="m-0">Verso da carta</p>
        </div>
      </div>
    </div>
  );
}
