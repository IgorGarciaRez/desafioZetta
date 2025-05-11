import React, { useEffect, useState } from 'react';
import './FlipCard.css';
import fallbackImg from '../assets/fallbackPkm.png';

interface FlipCardProps {
  name: string;
  img: string;
  fallbackImg: string;
}

export default function FlipCardBootstrap({ name, img }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [imageSrc, setImageSrc] = useState(fallbackImg); // começa com fallback por segurança
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkImage = async () => {
      try {
        const response = await fetch(img, { method: 'HEAD' });
        const isImage = response.headers.get('content-type')?.startsWith('image');

        if (response.ok && isImage) {
          isMounted && setImageSrc(img);
        } else {
          isMounted && setImageSrc(fallbackImg);
          console.warn(`Imagem inválida para ${name} (status ${response.status})`);
        }
      } catch (error) {
        isMounted && setImageSrc(fallbackImg);
        console.error(`Erro ao carregar imagem de ${name}:`, error);
      }
    };

    checkImage();

    return () => {
      isMounted = false;
    };
  }, [img, fallbackImg, name]);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={imageSrc}
            alt={name}
            onLoad={() => setLoaded(true)}
          />
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
