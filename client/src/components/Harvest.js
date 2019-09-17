import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';


export default class Harvest extends Component {

  constructor(props) {
    super(props);

    this.onClick= this.onClick.bind(this);

    this.state = {
      list: [
        { 
          id: '1',
          img: "https://images.unsplash.com/photo-1508595165502-3e2652e5a405?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: 'Basilika',
          subtitle: <Card.Text>Extra söt denna veckan!</Card.Text>,
          clickedText: 'Redo att hämtas imorgon 12:00',
          class: 'bokad',
        },            
        {   
          id: '2',
          img: "https://images.unsplash.com/photo-1508061461508-cb18c242f556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: 'Pak Choi',
          clickedText: 'Redo att hämtas på fredag 12:00',
          class: 'bokad',
        },            
        {   
          id: '3',
          img: "https://images.unsplash.com/photo-1528796940112-4979b4a98424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
          title: 'Koriander',
          clickedText: 'Redo att hämtas på torsdag 18:00',
          class: 'bokad',
        }
      ],
    };
  }

  onClick() {
    this.setState({text: 'Redo att hämtas imorgon 12:00'});
  }

  
  render() {

    var text = 'boka'

    return (
      <CardColumns>
        {this.state.list.map(item => (
        <Card key={item.id}>
          <Card.Img src={item.img} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{item.title}</Card.Title>
            {item.subtitle}
            <Button variant="primary"  onClick= {this.onClick}> {text} </Button>
            </Card.ImgOverlay>
        </Card>
        ))}        
        <Card bg="primary" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>Än så länge har du ätit 56kg hemodlat i år, och genom det minskat ditt c02 avtryck med <strong>25kg</strong>.</p>
          </blockquote>
        </Card>
      </CardColumns>

    );
  }
}
