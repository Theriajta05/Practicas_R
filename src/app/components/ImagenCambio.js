'use client';
import { useState } from 'react';

export default function ImagenCambio() {
  const [imagen, setImagen] = useState('/imagen1.jpg');

  const cambiarImagen = () => {
    setImagen('/imagen2.jpg');
  };

  return (
    <div>
      <img src={imagen} alt="Imagen de ejemplo" />
      <br />
      <button onClick={cambiarImagen}>Cambiar imagen</button>
    </div>
  );
}
