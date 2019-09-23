import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDetail = props => {
  const characterId = parseInt(props.routerProps.match.params.characterId);
  const clickedCharacter = props.characters.filter(item => {return(item.id === characterId)});

  if (clickedCharacter[0]){
    return (
      <React.Fragment>
        <Link to = '/'><p className="detail__back">&lt; Volver</p></Link>
        <div className="detail__wrapper">       
          <img className="detail__img" src={clickedCharacter[0].image} alt={`Imagen de ${clickedCharacter[0].name}`}/>
          <h2 className="detail__name">{clickedCharacter[0].name}</h2>
          <p className="detail__status">{`Status: ${clickedCharacter[0].status}`}</p>
          <p className="detail__origin">{`Origin: ${clickedCharacter[0].origin.name}`}</p>
          <p className="char__episodes">{`Episodes: ${clickedCharacter[0].episode.length}`}</p>
        </div>
      </React.Fragment>
    )
  } else {
    return(
      <div className="detail__error">
        <p className="detail__error-msg">No encontramos ese personaje...</p>
        <Link to="/" className="detail__error-back">
          &lt; Volver a buscar
        </Link>
      </div>
    )
  }
 
}

export default CharacterDetail;