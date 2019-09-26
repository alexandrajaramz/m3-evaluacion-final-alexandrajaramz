import React from 'react';
import './CharacterList.scss';
import {Link} from 'react-router-dom';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

class CharacterList extends React.Component {

  render () {

    const {
      characters,
      inputValue,
      selectValue,
      radiusValue,
      episodesValue
    } = this.props;

    //const filteredCharacters = characters.filter(item => item.name.toUpperCase().includes(inputValue.toUpperCase()));
    
    return (
      <ul className="app__main-list">
        {characters
        .filter(item => item.name.toUpperCase().includes(inputValue.toUpperCase()))

        .filter(character => {
          if (selectValue === '') {
            return (characters)
          } else {
            return (character.origin.name.includes(selectValue))
          }
        })
        
        .filter(character => {
          if (radiusValue === 'All') {
            return characters;
          } else {
            return (
              radiusValue === character.gender
            );
          }
        }) 

        .filter(character => {
          if (episodesValue === 0) {
            return characters;
          } else if (episodesValue === 1) {
            return character.episode.length === 1;
          } else if (episodesValue >= 15) {
            return character.episode.length >= 15;
          } else {
            return character.episode.length 
          }
        })

        .map((character) => {
          return (
            <li className="list__character" key={character.id}>
              <Link to={`/character/${character.id}`} className="list__character-link">
                <CharacterCard 
                  characterImage={character.image}
                  characterName={character.name}
                  characterSpecies={character.species}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    );

  }

}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputValue: PropTypes.string
}

export default CharacterList;