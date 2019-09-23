import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {

  render () {

    const {
      getInputValue
    } = this.props;

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
            onChange={getInputValue}
        />
      </form>
    );

  }

}

Filters.propTypes = {
  getInputValue: PropTypes.func.isRequired
}

export default Filters;