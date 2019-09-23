import React from 'react';
import './App.css';
import { getCharacters } from './services/get-characters';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }

    this.getInputValue = this.getInputValue.bind(this);
  }

componentDidMount () {
  getCharacters ()
    .then(data => {
      this.setState({
        characters: data.results,
        inputValue: ''
      });
    });
} 

getInputValue (event) {
  const inputValue = event.currentTarget.value; 
  this.setState ({
    inputValue: inputValue
  })
}

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__header-title">Rick and Morty</h1>
          <Filters getInputValue={this.getInputValue}/>
        </header>
        <main className="app__main">
          <CharacterList 
            characters={this.state.characters}
            inputValue={this.state.inputValue}
          />
        </main>
      </div>
    );
  }
}

export default App;
