import React from 'react';
import './Filters.scss';
import PropTypes from 'prop-types';

class Filters extends React.Component {

  render () {

    const {
      getInputValue,
      getSelectValue,
      getRadiusValue,
      radiusValue,
      getEpisodesValue
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

        <label htmlFor="episodes">
          Número de episodios en los que aparece:
        </label>
        <input 
          type="number" 
          id="episodes" 
          name="episodes" 
          onChange={getEpisodesValue}
        />

        <label htmlFor="origin">Origen:</label>
        <select id="origin" name="origin" onChange={getSelectValue}>
        <option value=''>Elige una opción</option>
          <option value="Earth (C-137)">Earth (C-137)</option>
          <option value="Earth (Replacement Dimension)">Earth (Replacement Dimension)</option>
          <option value="Abadango">Abadango</option>
          <option value="unknown">unknown</option>
        </select>

        <div>
          <label htmlFor="gender-1">
            <input
              id="gender-1"
              type="radio"
              value="Female"
              name="gender"
              checked = {radiusValue === 'Female'}
              onChange = {getRadiusValue}
            />
            Femenino
          </label>
        </div>
        <div>
          <label htmlFor="gender-2">
            <input
              id="gender-2"
              type="radio"
              value="Male"
              name="gender"
              checked = {radiusValue === 'Male'}
              onChange = {getRadiusValue}
            />
            Masculino
          </label>
        </div>
        <div>
          <label htmlFor="gender-3">
            <input
              id="gender-3"
              type="radio"
              value="unknown"
              name="gender"
              checked = {radiusValue === 'unknown'}
              onChange = {getRadiusValue}
            />
            Desconocido
          </label>
        </div>
        <div>
          <label htmlFor="gender-4">
            <input
              id="gender-4"
              type="radio"
              value="All"
              name="gender"
              checked = {radiusValue === 'All'}
              onChange = {getRadiusValue}
            />
            Todos
          </label>
        </div>

      </form>
    );

  }

}

Filters.propTypes = {
  getInputValue: PropTypes.func.isRequired
}

export default Filters;