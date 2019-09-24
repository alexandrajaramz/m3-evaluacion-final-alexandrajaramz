import React from 'react';
import './Home.scss';

class Header extends React.Component {

  render () {
 
    return (
        <header className="app__header">
          <h1 className="app__header-title">Rick and Morty</h1>
        </header>
    );
    
  }

}

export default Header;