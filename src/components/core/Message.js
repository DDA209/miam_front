import React, { Component } from 'react';
//import { Alert, Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import Modal from 'react-modal';
    

//react-modal
class Message extends Component {
    constructor () {
        super();
        this.state = {
        showModal: false                 
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);        
        this.handleCloseModal = this.handleCloseModal.bind(this);        
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
    }
        
    handleCloseModal () {
        this.setState({ showModal: false });
    }
    
                
    render () {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Infos</button>                
                <Modal 
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={false}
                >
                <h5>Les modifications ont été enrégistrées.</h5>
                <h6>Voulez-vous revenir à la page principale ?</h6>
                <button onClick={this.handleCloseModal}><a href="/userinfo">Oui</a></button>
                <button onClick={this.handleCloseModal}><a href="/utilisateur">Non, continuer.</a></button>
                </Modal>                 
            </div>
        );
    }
} 

export default Message; 