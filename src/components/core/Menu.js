import React, {Component} from 'react';
import  {
    Button, 
    Row, 
    Col, 
    Card, 
    ListGroupItem,
    ListGroup
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';

// import UserInfo from './UserInfo';
// import Quantities from './Quantities';


class Utilisateur extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            userId: '5f81f42dfd88ec214ce90147',
            username: 'Batman',
            recipes: []
        };

    }
    

    componentDidMount (){

        console.log('components/core/Utilisateur #processRecipe');
        console.log('components/core/Utilisateur #processRecipe', this.state.userId);

        const url = 'http://localhost:3003/recipes/users/' + this.state.userId;
        fetch(url)
        .then(res => res.json())
        .then((json) => {
            console.log(json.data);
            this.setState({
                recipes: json.data
            })
        })
    }

    render (){
        return(
            <div className="justify-md-center form-menu">
                <div>
                    <Col md={{ span: 4, offset: 4 }}>
                    <Card className="text-center" style={{ width: '18rem' }}>
                    <ListGroup className="list-group-flush">

                        {this.state.recipes.map( (recipe) => {
                            return(

                                <Card.Body>
                                    <Card.Title>{recipe.title}</Card.Title>                        
                                    <ListGroupItem>                        
                                        <Card.Img variant="top" img src={recipe.photos[0]} />
                                        {/* <Card.Link href="/recette1">Recette</Card.Link> */}
                                        <Card.Text>
                                        {`Temps de préparation : ${recipe.preparationTime} minutes`}
                                        {`Difficulté :  ${recipe.difficultyLevel}/3`}
                                        </Card.Text>                     
                                    </ListGroupItem>  
                                </Card.Body>
                            )
                        })}
                        
                    </ListGroup>
                    </Card>
                    
                    <div className="justify-md-center">
                        <Button className="buttontext bg-success text-dark font-weight-bolder" href="/utilisateur">
                            Retour à la page principale
                        </Button>
                    </div>
                    </Col>
                </div>



            </div>

        );
    }
}

export default Utilisateur; 