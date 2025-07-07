export default function Titulo({ texto, tipoFuente, tamaño, color }) {
  return (
    <h1 style={{ fontFamily: tipoFuente, fontSize: tamaño, color: color }}>
      {texto}
    </h1>
  );
}
