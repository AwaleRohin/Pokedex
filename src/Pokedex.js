import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <p>Total Experience: {this.props.exp}</p>
        <p>{this.props.isWinner ? "Winner" : "Loser"}</p>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(i => (
            <Pokecard data={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
