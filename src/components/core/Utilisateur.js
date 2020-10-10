import React, {Component} from 'react';
import  {Button, Row, Col} from 'react-bootstrap';
// import UserInfo from './UserInfo';
// import Quantities from './Quantities';


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

            <Row
                className="user"> 
                <Col
                    xs={{ span: 12, order: "first"}}
                    className="mb-3"
                >
                </Col>         
                <Col>
                    
                    {/* <Button variant="outline-secondary" type="submit" onClick={this.processRecipe}>Calculer le menu</Button> */}
                    <Button variant="secondary" href="/menu">Calculer le menu</Button>

                    <hr /> 

                    <p>Ajouter d'ingrédients :</p>
                    <Button variant="secondary" href="/add">Ajouter des ingrédients</Button>
                    
                </Col>
            </Row> 

        );
    }
}

export default Utilisateur; 