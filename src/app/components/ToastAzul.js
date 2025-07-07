'use client';

import { useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function ToastAzul() {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Mostrar Toast
      </Button>

      {visible && (
        <div className="p-3 my-2 rounded bg-info text-white">
          <Toast isOpen>
            <ToastHeader toggle={toggle}>
              Información
            </ToastHeader>
            <ToastBody>
              Este es un toast de color azul.
            </ToastBody>
          </Toast>
        </div>
      )}
    </div>
  );
}
