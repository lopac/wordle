import PropTypes from 'prop-types';
import React from 'react';

function Cell({ value }) {
  return (
    <div className={value ? 'active' : ''}>
      <div
        className={`cell ${
          value ? 'active' : 'inactive'
        } flex border-2 dark:border-white border-black h-14 w-14 text-center cursor-default select-none`}>
        <div className="m-auto">
          <p className="dark:text-white text-black text-4xl font-bold uppercase">{value ?? ''}</p>
        </div>
      </div>
    </div>
  );
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Cell;
