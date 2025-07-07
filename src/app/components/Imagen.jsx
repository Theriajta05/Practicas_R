export default function Imagen({ src, alt, ancho, alto }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: ancho, height: alto, borderRadius: '8px' }}
    />
  );
}
