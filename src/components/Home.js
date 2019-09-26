import React from 'react';
import './Home.scss';
import CharacterList from './CharacterList';
import Header from './Header';
import Filters from './Filters';
import PropTypes from 'prop-types';

class Home extends React.Component {

  render () {
      
    const {
      getInputValue,
      characters,
      inputValue,
      getSelectValue,
      selectValue,
      getRadiusValue,
      radiusValue,
      getEpisodesValue,
      episodesValue
    } = this.props;

    return (
      <React.Fragment>
        <Header />
        <Filters 
          getInputValue={getInputValue}
          getSelectValue={getSelectValue}
          getRadiusValue={getRadiusValue}
          radiusValue={radiusValue}
          getEpisodesValue={getEpisodesValue}
        />
        <main className="app__main">
          <CharacterList 
            characters={characters}
            inputValue={inputValue}
            selectValue={selectValue}
            radiusValue={radiusValue}
            episodesValue={episodesValue}
          />
        </main>
      </React.Fragment>
    );
    
  }

}

Home.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputValue: PropTypes.string
}

export default Home;