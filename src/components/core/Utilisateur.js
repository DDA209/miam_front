import React, {Component} from 'react';
import  {Button, Row, Col, Container} from 'react-bootstrap';
// import UserInfo from './UserInfo';
// import Quantities from './Quantities';
import './utilisateur.css';

class Utilisateur extends Component {
    
    // constructor(props){
    //     super(props);
        
    //     this.state = {
    //         userId: '5f806f7794e31a0b0045f236',
    //         username: 'Batman',
    //         recipes: []
    //     };

    //     this.processRecipe = this.processRecipe.bind(this);
    // }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         form: true,
    //         userId: '5f806f7794e31a0b0045f236',
    //         username:'Batman',
    //         recipes: []
    //     };
    // }

    // processRecipe (){

    //     console.log('components/core/Utilisateur #processRecipe');
    //     console.log('components/core/Utilisateur #processRecipe', this.state.userId);

    //     const url = 'http://localhost:3003/recipes/users/' + this.state.userId;
    //     // const url = 'http://localhost:3003/recipes/users/5f806f7794e31a0b0045f236';
    //     fetch(url)
    //     .then(res => res.json())
    //     .then((json) => {
    //         console.log(json.data);
    //         this.setState({
    //             recipes: json.data
    //         })
    //     })
    // }

    render (){
        return(

             <div className="container-fluid text-white form-utilisateur">
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                                <Button className="button" href="/menu">Calculer le menu</Button>

                                <Button className="button b-3 m-5 ml-3" href="/add">Ma liste d'ingrédients</Button>
                        </Col>                        
             
                    </Row>
                </Container>
            </div> 

        );
    }
}

export default Utilisateur; 