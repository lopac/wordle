import PropTypes from 'prop-types';
import React from 'react';

function Cell({ value, bgClass }) {
  let cellClass = !value ? 'inactive' : 'active';
  let textColorClass = 'dark:text-white text-black';

  if (bgClass) {
    textColorClass = 'text-white';
    cellClass = '';
  }

  return (
    <div aria-hidden="true">
      <div
        className={`cell ${bgClass} ${cellClass} flex border-2 h-12 w-12 md:h-16 md:w-16 text-center cursor-default select-none`}>
        <div className="m-auto">
          <p className={`${textColorClass} text-3xl font-bold uppercase`}>{value ?? ''}</p>
        </div>
      </div>
    </div>
  );
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  bgClass: PropTypes.string.isRequired,
};

export default Cell;
