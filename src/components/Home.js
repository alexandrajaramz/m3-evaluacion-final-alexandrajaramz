import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Home extends React.Component {

  render () {
      
    const {
      getInputValue,
      characters,
      inputValue
    } = this.props;

    return (
      <React.Fragment>
        <header className="app__header">
          <h1 className="app__header-title">Rick and Morty</h1>
          <Filters getInputValue={getInputValue}/>
        </header>
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

export default Home;