'use client';

import { Container, Card, CardBody, Alert } from 'reactstrap';
import Contador from './components/Contador';
import ImagenCambio from './components/ImagenCambio';
import FondoCambiante from './components/FondoCambiante';
import ToastAzul from './components/ToastAzul';
import ModalEjemplo from './components/ModalEjemplo';
import CarruselVerde from './components/CarruselVerde';
import TablaConModal from './components/TablaConModal';
import Titulo from './components/Titulo';
import Parrafo from './components/Parrafo';
import Imagen from './components/Imagen';
import 'bootstrap/dist/css/bootstrap.min.css';


//hola
export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#e0f7fa',
          padding: '30px',
          minHeight: '100vh',
        }}
      >
        <Titulo
          texto="Práctica #1 - Componentes en React con Next.js"
          tipoFuente="Verdana"
          tamaño="32px"
          color="#00796b"
        />

        <Parrafo
          contenido="Este párrafo ha sido renderizado con props para cambiar estilo de texto."
          tipoFuente="Georgia"
          tamaño="20px"
          color="#004d40"
        />

        <Imagen
          src="https://via.placeholder.com/300"
          alt="Imagen de ejemplo"
          ancho="300px"
          alto="200px"
        />
      </div>

      <Container className="mt-4">
        <Alert color="primary">
          <h1 className="text-center">Ejemplos con useState</h1>
        </Alert>

        <Card className="mb-4"><CardBody><Contador /></CardBody></Card>
        <Card className="mb-4"><CardBody><ImagenCambio /></CardBody></Card>
        <Card className="mb-4"><CardBody><FondoCambiante /></CardBody></Card>
        <Card className="mb-4"><CardBody><ToastAzul /></CardBody></Card>
        <Card className="mb-4"><CardBody><ModalEjemplo /></CardBody></Card>
        <Card className="mb-4"><CardBody><CarruselVerde /></CardBody></Card>
        <Card className="mb-4"><CardBody><TablaConModal /></CardBody></Card>
      </Container>
    </>
  );
}
