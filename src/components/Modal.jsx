import React from 'react';

import { Button } from '@material-ui/core';

import '../style/modal-styles.css';


const Modal = ({ handleClose, show, children }) => {
  const toggleClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={toggleClassName}>
      <section className="modal-main">
        {children}
        <Button onClick={handleClose}>close</Button>
      </section>
    </div>
  );
};

export default Modal;