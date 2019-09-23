import React from 'react';
import './App.css';
import {getCharacters} from './services/get-characters';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import {Switch, Route} from 'react-router-dom';

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
        <Switch>
          <Route exact path="/" render={() => 
            <Home 
              getInputValue={this.getInputValue}
              characters={this.state.characters}
              inputValue={this.state.inputValue}
            />
          } />
          <Route path="/character/:characterId" render={routerProps => {
            return (
              <CharacterDetail 
                routerProps={routerProps}
                characters={this.state.characters}
              />
            );
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
