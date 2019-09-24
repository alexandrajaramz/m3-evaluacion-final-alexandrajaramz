import React from 'react';
import './CharacterDetail.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';


const CharacterDetail = props => {

  const {
    routerProps,
    characters
  } = props;

  const characterId = parseInt(routerProps.match.params.characterId);
  const clickedCharacter = characters.filter(item => {return(item.id === characterId)});

  if (clickedCharacter[0]){
    return (
      <React.Fragment>
        <Header />
        <Link to = '/'><p className="detail__back">&lt; Volver</p></Link>
        <div className="detail__wrapper">       
          <img className="detail__img" src={clickedCharacter[0].image} alt={`Imagen de ${clickedCharacter[0].name}`}/>
          <div className="detail__info">
            <h2 className="detail__info-name">{clickedCharacter[0].name}</h2>
            <p className="detail__info-status">{`Status: ${clickedCharacter[0].status}`}</p>
            <p className="detail__info-species">{`Species: ${clickedCharacter[0].species}`}</p>
            <p className="detail__info-origin">{`Origin: ${clickedCharacter[0].origin.name}`}</p>
            <p className="char__info-episodes">{`Episodes: ${clickedCharacter[0].episode.length}`}</p>
          </div>
        </div>
      </React.Fragment>
    )
  } else {
    return(
      <div className="detail__error">
        <p className="detail__error-msg">No encontramos ese personaje...</p>
        <Link to="/" className="detail__back">&lt; Volver a buscar</Link>
      </div>
    )
  }
 
}

CharacterDetail.propTypes = {
  routerProps: PropTypes.objectOf(PropTypes.object).isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterDetail;