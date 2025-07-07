'use client';

import { useState } from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import datos from '../data/datos.json';

export default function TablaConModal() {
  const [modal, setModal] = useState(false);
  const [imagenActual, setImagenActual] = useState('');

  const toggle = () => setModal(!modal);

  const abrirModalConImagen = (imagen) => {
    setImagenActual(imagen);
    toggle();
  };

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Icono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>
              <td><i className={item.icono}></i></td>
              <td>
                <Button color="secondary" onClick={() => abrirModalConImagen(item.imagen)}>
                  Ver imagen
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Imagen del Registro</ModalHeader>
        <ModalBody>
          <img src={imagenActual} alt="Vista previa" style={{ width: '100%' }} />
        </ModalBody>
      </Modal>
    </>
  );
}
