import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createPortal } from 'react-dom';
import { PokemonsContext } from '../context/PokemonsProvider';
import ElementImage from './List/ElementImage';

const DetailsModal = () => {

  const { state, dispatch } = useContext(PokemonsContext);

  const handleClose = () => {
    dispatch({
      type: 'SHOW_DETAILS',
      payload: {
        show: false,
        pokemon: [],
      },
    });
  };

  return createPortal(
    <>
      <Modal show={state.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{state.pokemonModal.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ElementImage url={state.pokemonModal.image} name={state.pokemonModal.name} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>, 
    document.getElementById('modal-root')
  )

}
export default DetailsModal;
