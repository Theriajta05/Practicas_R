'use client';

import { useState } from 'react';

const images = [
  { src: '/imagen1.jpg', alt: 'Imagen 1' },
  { src: '/imagen2.jpg', alt: 'Imagen 2' },
  { src: '/globe.svg', alt: 'Imagen 3' },
  { src: '/vercel.svg', alt: 'Imagen 4' },
];

export default function CarruselVerde() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <img
        src={images[index].src}
        alt={images[index].alt}
        style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }}
      />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={prev} style={{ color: 'green', marginRight: '1rem' }}>
          ← Anterior
        </button>
        <span style={{ color: 'green' }}>{images[index].alt}</span>
        <button onClick={next} style={{ color: 'green', marginLeft: '1rem' }}>
          Siguiente →
        </button>
      </div>
    </div>
  );
}
