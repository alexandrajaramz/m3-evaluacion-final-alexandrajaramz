import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Home extends React.Component {

  render () {
    return (
      <React.Fragment>
        <header className="app__header">
          <h1 className="app__header-title">Rick and Morty</h1>
          <Filters getInputValue={this.props.getInputValue}/>
        </header>
        <main className="app__main">
          <CharacterList 
            characters={this.props.characters}
            inputValue={this.props.inputValue}
          />
        </main>
      </React.Fragment>
    );
  }

}

export default Home;