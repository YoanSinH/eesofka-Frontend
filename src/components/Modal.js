import React from 'react';
import '../modal.css';
const Modal = ({ show, state, changeState, children }) => {

    return (
        <>
        {state && 
        <div className="Overlay">
        <section className="modal-main">
        <button className="button" type="button" onClick={() => changeState(!state)}>X</button>
            {children}
        </section>
        </div>
        }
        </>
    )
}

export default Modal;