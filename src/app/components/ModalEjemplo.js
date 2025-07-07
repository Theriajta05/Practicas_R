'use client';

import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ModalEjemplo() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        Mostrar Modal
      </Button>

      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Título del Modal</ModalHeader>
        <ModalBody>
          Este es el contenido del modal.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
