import PropTypes from 'prop-types';
import React from 'react';

function Cell({ value }) {
  return (
    <div className={value ? 'active' : ''} aria-hidden="true">
      <div
        className={`cell ${
          value ? 'active' : 'inactive'
        } flex border-2 dark:border-white border-black h-12 w-12 md:h-16 md:w-16 text-center cursor-default select-none`}>
        <div className="m-auto">
          <p className="dark:text-white text-black text-3xl font-bold uppercase">{value ?? ''}</p>
        </div>
      </div>
    </div>
  );
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Cell;
