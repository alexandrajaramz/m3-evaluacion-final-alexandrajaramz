import React from 'react';

class CharacterCard extends React.Component {

  render () {
    return (
      <div className="list__character-wrapper">
        <img className="list__character-img" src={this.props.characterImage} alt={`Imagen de ${this.props.characterName}`}/>
        <h2 className="list__character-name">{this.props.characterName}</h2>
        <p className="list__character-species">{this.props.characterSpecies}</p>
      </div>
    );
  }

}

export default CharacterCard;