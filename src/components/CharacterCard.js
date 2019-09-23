import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {

  render () {

    const {
      characterImage,
      characterName,
      characterSpecies
    } = this.props;

    return (
      <div className="list__character-wrapper">
        <img className="list__character-img" src={characterImage} alt={`Imagen de ${characterName}`}/>
        <h2 className="list__character-name">{characterName}</h2>
        <p className="list__character-species">{characterSpecies}</p>
      </div>
    );

  }

}

CharacterCard.propTypes = {
  characterImage: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterSpecies: PropTypes.string.isRequired
}

export default CharacterCard;