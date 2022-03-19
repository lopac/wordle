import PropTypes from 'prop-types';
import React from 'react';
import CellState from '../../constants/CellState';

function Cell({ value = null, state }) {
  const textColorClass =
    state === CellState.INIT || state === CellState.ACTIVE
      ? 'dark:text-white text-black'
      : 'text-white';

  return (
    <div aria-hidden="true">
      <div
        className={`cell ${state} flex border-2 h-12 w-12 md:h-16 md:w-16 text-center cursor-default select-none`}>
        <div className="m-auto">
          <p className={`${textColorClass} text-3xl font-bold uppercase`}>{value ?? ''}</p>
        </div>
      </div>
    </div>
  );
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default Cell;
