import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Add.css';
import { Card, Button, Form, ListGroup, Modal,Container,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientsCount from '../core/IngredientsCount';
import Ingredients from '../form/select/Ingredients'; 
import Message from '../core/Message';
import './Add.css'

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredient:'',
            quantity:'',
            userId: '5f7f11d422b51e2534008c8d',
            username:'Batman',
            unity:'',
            list: [],  
        }
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient .bind(this);
        this.handleChangeUnity=this.handleChangeUnity.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.addListIngredient=this.addListIngredient.bind(this);
        this.handleDelete= this.handleDelete.bind(this);
        // this.deleteId=this.deleteId.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:3003/listIngredients/users/5f7f11d422b51e2534008c8d')
        .then(res => res.json())
        .then((json) => {
            console.log("componentDidMount",json);
            this.setState({
                list:json.data
            })
        });
        console.log("componentDidMount this.state.list",this.state.list);
    }
    
    
    handleChangeQuantity(event){
        // event.preventDefault();
        console.log(event.target.value)
        this.setState({
            quantity:event.target.value,
        })
      }

    handleChangeIngredient(ingredient){
        // event.preventDefault();
        console.log("handleChangeIngredient : ",ingredient)
        this.setState({
            ingredient:ingredient,
        })
      }

    handleChangeUnity(event){
        //  console.log(event.target.value);
         this.setState({
             unity:event.target.value,
         })
     }
    addListIngredient(){
            const { quantity, ingredient,unity, username,userId}=this.state;
            const list = this.state.list;
            const ingredientFetch={
                quantity,
                ingredient: ingredient.name,
                username
            }
            const ingredientObject = {
                quantity,
                ingredient,
            };

            list.push(ingredientObject);

            this.setState({
                list
            });

            console.log('add list ingredient : ', ingredientFetch);
            fetch('http://localhost:3003/listIngredients', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(ingredientFetch)
            })
            .then(res => res.json())
            .then((json) => {
                console.log(json.success);
            
            });
    }
    handleDelete=(item)=>{
        console.log('handleDelete item',item)
        const list=Object.assign([],this.state.list);
        list.splice(item,1);
        this.setState({list:list});
        
    }
        
// //  deleteId() {
//     console.log('this.state.userId',this.state.userId)
//     console.log('deletIdingredient',this.state.ingredient.ingredient._id)
//         //  console.log('this.state.ingredient.ingredient._id',this.state.userId,this.state.ingredient.ingredient._id)
//              fetch('http://localhost:3003/user/'+this.state.userId +'/ingredient/'+list.ingredient._id,{
//              method:'DELETE',
             
//                 headers: {
//                   'Accept': 'application/json',
//                   'Content-Type': 'application/json'
//              },    
//                 // body: JSON.stringify(ingredientId)    
//         })
//         .then(res => res.json())
//             .then((json) => {
//                 console.log(json.success);
            
//             });
// }  
           
    render() {
        // console.log("this.state.list#",this.state.list);
        const {
            list
        } = this.state;
        return(
            <div className="container-fluid"className= "bg-primary text-white m-5" className="form-ingredients">
                <Container >
                    <Row xs={1} md={2}>
                        <Col>
                           <Form method="post" onSubmit={this.handleSubmit} >
                                    <Ingredients onChange={this.handleChangeIngredient}/>
                                    <Form.Group className="mb-4 mt-4">
                                        <Form.Label className="font-weight-bolder text-dark"  className="lable">Quantités :</Form.Label>
                                        <Form.Control className="font-weight-bolder text-dark"
                                            placeholder="Quantities en chiffres"
                                            aria-label="Quantities en chiffres"
                                            name="quantity"
                                            aria-describedby="basic-addon2"
                                            value={this.state.quantity} onChange={this.handleChangeQuantity} />
                                    </Form.Group>
                                        <Button  className="buttontext" onClick={this.addListIngredient}>Ajouter</Button>
                                    {/* <Button variant="primary" onSubmit={this.handleSubmit}>Envoyer</Button> */}
                            </Form>
                            <Button  className="buttontext" className="bg-success text-dark b-3 m-5 font-weight-bolder ml-3" href="/utilisateur">Suivant
                            </Button>
                    
                        </Col>
                        <Col>
                            <ul className="list-group mb-4 mt-4" >
                                {list.map((ingredient, key) => {
                                            // console.log('ingredient', ingredient)
                                        return (
                                            
                                           <table>
                                                <li key={key} class="list-group-item text-dark">
                                                   <tr>
                                                        <th><td className="font-weight-bolder text-dark">{ingredient.ingredient.name}</td></th>
                                                        <th><td className="font-weight-bolder text-dark">{ingredient.quantity}</td></th>
                                                        <th><td className="font-weight-bolder text-dark"> {ingredient.ingredient.unity} </td></th>
                                                        <th><td className="font-weight-bolder text-dark"><Button onClick={this.handleDelete}>X</Button></td></th>
                                                    </tr>
                                                </li>
                                            </table>
                                            
    
                                        
                                        
                                        );
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Add;
