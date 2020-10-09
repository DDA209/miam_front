import React, {Component} from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import Ingredients from '../form/select/Ingredients';


class Userinfo extends Component {
    constructor(props){
        super(props);
        {/*
        this.state = {
            list: [{
                ingredientId: 'abc',
                ingredientName: 'Poulet',
                unity: 'unité',
                quantity: 1
            }, {
                ingredientId: 'def',
                ingredientName: 'Lait de Coco',
                unity: 'litre',
                quantity: 1
            }, {
                ingredientId: 'ghi',
                ingredientName: 'Carotte',
                unity: 'kilo',
                quantity: 1
            }]
        };*/}
    }

    logout(){
        this.props.history.push('/add');
    }
    render(){ 
        {}
        return(
            <div className="container-fluid">
                
                <p>Ajouter d'ingrédients :</p>
                <Button variant="outline-secondary" onClick={this.logout.bind(this)}>Ajouter des ingrédients</Button>
            </div>
        )
    }
}

export default Userinfo;