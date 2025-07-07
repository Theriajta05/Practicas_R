export default function Parrafo({ contenido, tipoFuente, tamaño, color }) {
  return (
    <p style={{ fontFamily: tipoFuente, fontSize: tamaño, color: color }}>
      {contenido}
    </p>
  );
}
