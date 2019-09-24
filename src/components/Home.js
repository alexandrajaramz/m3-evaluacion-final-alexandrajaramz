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
      inputValue
    } = this.props;

    return (
      <React.Fragment>
        <Header />
        <Filters getInputValue={getInputValue}/>
        <main className="app__main">
          <CharacterList 
            characters={characters}
            inputValue={inputValue}
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