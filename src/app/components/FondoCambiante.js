'use client';
import { useState } from 'react';

export default function FondoCambiante() {
  const [color, setColor] = useState('white');

  const cambiarColor = () => {
    const nuevoColor = color === 'white' ? 'grey' : 'white';
    setColor(nuevoColor);
    document.body.style.backgroundColor = nuevoColor;
  };

  return (
    <div>
      <button onClick={cambiarColor}>Cambiar fondo</button>
    </div>
  );
}
