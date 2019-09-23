import React from 'react';
import './App.css';
import { getCharacters } from './services/get-characters';
import CharacterList from './components/CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

componentDidMount () {
  getCharacters ()
    .then(data => {
      this.setState({
        characters: data.results,
      });
    });
} 

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__header-title">Rick and Morty</h1>
        </header>
        <main className="app__main">
          <CharacterList characters={this.state.characters}/>
        </main>
      </div>
    );
  }
}

export default App;
