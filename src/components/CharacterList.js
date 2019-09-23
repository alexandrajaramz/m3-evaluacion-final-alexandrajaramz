import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {

  render () {
    return (
      <ul className="app__main-list">
        {this.props.characters.map((character) => {
          return (
            <li className="list__character" key={character.id}>
              <CharacterCard 
                characterImage={character.image}
                characterName={character.name}
                characterSpecies={character.species}
              />
            </li>
          );
        })}
      </ul>
    );
  }

}

export default CharacterList;