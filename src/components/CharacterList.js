import React from 'react';
import './CharacterList.scss';
import {Link} from 'react-router-dom';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

class CharacterList extends React.Component {

  render () {

    const {
      characters,
      inputValue
    } = this.props;

    const filteredCharacters = characters.filter(item => item.name.toUpperCase().includes(inputValue.toUpperCase()));
    
    return (
      <ul className="app__main-list">
        {filteredCharacters.map((character) => {
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