import React, { Component } from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import IngredientsCount from '../core/IngredientsCount';
import Ingredients from '../form/select/Ingredients'; 
import Message from '../core/Message';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredient:'',
            quantity:'',
            username:'',
            list: [
                {
                    "_id": "5f7d8f73f686bb0cf04daeae",
                    "ingredient": {
                        "_id": "5f7d83861a189f457c4ba0e5",
                        "name": "Lait",
                        "unity": "litre",
                        "created": "2020-10-07T08:59:50.396Z",
                        "__v": 0
                    },
                    "user": "5f7d83861a189f457c4ba0d9",
                    "quantity": 4,
                    "created": "2020-10-07T09:50:44.002Z",
                    "__v": 0
                },
                {
                    "_id": "5f7d93b58058a22dd0feea78",
                    "ingredient": {
                        "_id": "5f7d83861a189f457c4ba0e9",
                        "name": "Eau",
                        "unity": "litre",
                        "created": "2020-10-07T08:59:50.397Z",
                        "__v": 0
                    },
                    "user": "5f7d83861a189f457c4ba0d9",
                    "quantity": 1000,
                    "created": "2020-10-07T10:08:53.354Z",
                    "__v": 0
                },
                {
                    "_id": "5f7d964d1bdd5c39bc5e13aa",
                    "ingredient": {
                        "_id": "5f7d83861a189f457c4ba0e0",
                        "name": "Gingembre",
                        "unity": "kilo",
                        "created": "2020-10-07T08:59:50.393Z",
                        "__v": 0
                    },
                    "user": "5f7d83861a189f457c4ba0d9",
                    "quantity": 1,
                    "created": "2020-10-07T10:19:57.056Z",
                    "__v": 0
                }
            ],  
            // username: '',
            // quantity: ''

        }
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient .bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.addListIngredient=this.addListIngredient.bind(this);
    }
    
    handleChangeQuantity(event){
        // event.preventDefault();
        console.log(event.target.value)
        this.setState({
            quantity:event.target.value,
        })
      }
      handleChangeIngredient(event){
        // event.preventDefault();
        console.log(event.target.value)
        this.setState({
            ingredient:event.target.value,
        })
      }
      
    //   handleSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.username,this.state.quantity);
    //     const quantity=this.state.quantity;
    //     const username=this.state.username;
    //     fetch('http://localhost:3003/ingredients', {username,quantity})
    //     .then(res => res.json())
    //     .then((json) => {
    //         console.log(json.success);
    //       });
        
    //   }
       addListIngredient(){
            const {list, quantity, ingredient}=this.state;
            const ingredientObject={
                quantity,
                ingredient
            }
            list.push(ingredientObject)
            this.setState({
                list:list
            })
       }
    render() {
        console.log("this.state.list#",this.state.list);
        const {
            list
        } = this.state;
        return(
            <div className="container-fluid">
                {/* affichage des lists */}
                <ul>
                    {list.map((ingredient, key) => {
                        // console.log('ingredient', ingredient)
                        return (
                            <li key={key}>
                                {ingredient.ingredient.name} {ingredient.quantity} X {ingredient.ingredient.unity} 

                            </li>
                        );
                    })}
                </ul>
                {/* formulaire avec la lsits des ingredients */}
                <Form>
                <Ingredients onChange={this.handleChangeQuantity} />
                <Form.Group>
                    <Form.Label>Quantités :</Form.Label>
                    <Form.Control
                    placeholder="Quantities en chiffres"
                    aria-label="Quantities en chiffres"
                    name="quantity"
                    name="ingredient"
                    aria-describedby="basic-addon2"
                    value={this.state.quantity} onChange={this.handleChangeQuantity} />
                </Form.Group>
                <Button variant="primary" onClick={this.addListIngredient}>Ajouter</Button> 
            </Form>
            </div>

        );
    }
}

export default Add;






// const a = "foo";

// console.log(a);

// const obj = {
//     a: "foo"
// };

// console.log(obj.a)