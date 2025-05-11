import React, { useState } from 'react';
import './FlipCard.css';

interface FlipCardProps {
  name: string;
  img: string;
}

export default function FlipCardBootstrap({ name, img }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card-inner`}>
        <div className="flip-card-front">
        <img
          src={img}
          alt={name}
          onLoad={() => setLoaded(true)}
          onError={() => console.error(`Failed to load image for ${name}: ${img}`)}
          style={{ display: loaded ? 'block' : 'none' }}
        />
        {!loaded && <span>Carregando...</span>}
          <div className="card-body text-center">
            <h6 className="card-title mb-0 text-capitalize">{name}</h6>
          </div>
        </div>

        <div className="flip-card-back">
          <p className="m-0"></p>
        </div>
      </div>
    </div>
  );
}
