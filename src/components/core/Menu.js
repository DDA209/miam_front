import React, {Component} from 'react';
import  {Button, Row, Col, Card} from 'react-bootstrap';
// import UserInfo from './UserInfo';
// import Quantities from './Quantities';


class Utilisateur extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            userId: '5f806f7794e31a0b0045f236',
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

            <Row className="menu"> 
                <Col
                    xs={{ span: 12, order: "first"}}
                    className="mb-3"
                >
                </Col>         
                <Col>
                    
                    
                    <Card>Menus....</Card>

                    <p>Page principale</p>
                    <Button variant="secondary" href="/utilisateur">Page principale</Button>
                    
                </Col>
            </Row> 

        );
    }
}

export default Utilisateur; 