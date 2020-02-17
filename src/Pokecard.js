import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Pokecard.css"

class Pokecard extends Component {
  render() {
    const id = this.props.data.id.toString().length;
    let result;
    if (id === 1) result = "00" + this.props.data.id;
    else if (id === 2) result = "0" + this.props.data.id;
    else result = this.props.data.id;
    return (
      <div className="Pokecard">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <div style={{background:"grey"}}>
              <Card.Img
                variant="top"
                src={
                  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
                  result +
                  ".png"
                }
                alt={this.props.data.name}
                style={{ width: "150px", verticalAlign: "middle" }}
              />
            </div>
            <Card.Title>{this.props.data.name}</Card.Title>
            <Card.Text>
              <p>Type: {this.props.data.type}</p>
              <p>Experience: {this.props.data.base_experience}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Pokecard;
