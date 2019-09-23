import React from 'react';

class Filters extends React.Component {

  render () {
    return (
      <form className="app__header-form">
        <label htmlFor="search" className="header__form-label">
          Busca un personaje:
        </label>
        <input 
            type="text" 
            id="search" 
            name="search" 
            className="header__form-input"
            onChange={this.props.getInputValue}
        />
      </form>
    );
  }

}

export default Filters;