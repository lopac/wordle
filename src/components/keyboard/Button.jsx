import PropTypes from 'prop-types';
import React from 'react';

function Button({ letter, isSpecial = false }) {
  let width = 'max-w-[43px]';

  if (isSpecial) {
    width = 'max-w-[65px]';
  }

  return (
    <div className={`flex bg-gray-400 rounded text-center w-full ${width} h-14 m-1 select-none`}>
      <div className="m-auto">
        <p className="text-xs font-bold text-black dark:text-white uppercase">{letter}</p>
      </div>
    </div>
  );
}

Button.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  letter: PropTypes.any.isRequired,
  isSpecial: PropTypes.bool.isRequired,
};

export default Button;
