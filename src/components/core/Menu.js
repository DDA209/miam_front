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
            userId: '5f8218ee9ad9824254e85e50',
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
                    <Col 
                        xs={{ span: 4, offset: 4 }}
                    >
                    <Card className="text-center"> 
                    {/* style={{ width: '18rem' }}> */}
                    <ListGroup className="list-group-flush">
                    <Card.Body>
                                    <Card.Title>Menu du jour</Card.Title>                        
                                    {/* <ListGroupItem> */}
                        {this.state.recipes.map( (recipe) => {
                            return(

                                <Card.Body>                      
                                    <ListGroupItem>
                                    <Card.Title>{recipe.title}</Card.Title>       
                                        <Card.Img variant="top" img src={recipe.photos[0]} />
                                        <Card.Text>
                                            {`Temps de préparation : ${recipe.preparationTime}\u00A0minutes`}
                                        </Card.Text>
                                        <Card.Text>
                                            {`Difficulté :  ${recipe.difficultyLevel}/3`}
                                        </Card.Text>                     
                                    </ListGroupItem>  
                                </Card.Body>
                            )
                        })}
                        {/* </ListGroupItem> */}
                        </Card.Body>
                        <Button className="buttontext bg-success text-dark font-weight-bolder b-3 m-5" href="/utilisateur">
                            Retour à la page principale
                        </Button>
                    </ListGroup>
                    </Card>
                    
                    
                    </Col>
                    <Col xs={12}></Col>
                    {/* <div className="justify-md-center"> */}
                        
                    {/* </div> */}
                </div>



            </div>

        );
    }
}

export default Utilisateur; 