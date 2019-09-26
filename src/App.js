import React from 'react';
import './App.scss';
import {getCharacters} from './services/get-characters';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      inputValue: '',
      selectValue: '',
      radiusValue: 'All',
      episodes: 0
    }

    this.getInputValue = this.getInputValue.bind(this);
    this.getSelectValue = this.getSelectValue.bind(this);
    this.getRadiusValue = this.getRadiusValue.bind(this);
    this.getEpisodesValue = this.getEpisodesValue.bind(this);
  }

  componentDidMount () {
    getCharacters ()
      .then(data => {
        this.setState({
          characters: data.results
        });
      });
  } 

  getInputValue (event) {
    const inputValue = event.currentTarget.value; 
    this.setState ({
      inputValue: inputValue
    })
  }

  getSelectValue (event) {
    const selectValue = event.currentTarget.value; 
    this.setState ({
      selectValue: selectValue
    })
    console.log(this.state.selectValue);
  }

  getRadiusValue (event) {
    const radiusValue = event.currentTarget.value; 
    this.setState ({
      radiusValue: radiusValue
    })
  }

  getEpisodesValue (event) {
    const episodesValue = parseInt(event.currentTarget.value);
    this.setState ({
      episodesValue: episodesValue
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
              getSelectValue={this.getSelectValue}
              selectValue={this.state.selectValue}
              getRadiusValue={this.getRadiusValue}
              radiusValue={this.state.radiusValue}
              getEpisodesValue={this.getEpisodesValue}
              episodesValue={this.state.episodesValue}

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
