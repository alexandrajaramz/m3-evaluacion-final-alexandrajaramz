import React from 'react';

class CharacterList extends React.Component {

  render () {
    return (
      <ul className="app__main-list">
        {this.props.characters.map((character) => {
          return (
            <li className="list__character" key={character.id}>
              <div className="list__character-wrapper">
                <img className="list__character-img" src={character.image} alt={`Imagen de ${character.name}`}/>
                <h2 className="list__character-name">{character.name}</h2>
                <p className="list__character-species">{character.species}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

}

export default CharacterList;