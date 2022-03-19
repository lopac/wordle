import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

function Row({ letters, hasSpecialKeys = false, isMiddle = false }) {
  const keys = [];

  if (isMiddle) {
    keys.push(<div key="spacer-start" className="max-w-[21px] w-full" />);
  }

  if (hasSpecialKeys) {
    keys.push(<Button key="enter" letter="enter" isSpecial />);
  }

  for (let i = 0; i < letters.length; i += 1) {
    keys.push(<Button key={`key-${i}`} letter={letters[i]} />);
  }

  if (hasSpecialKeys) {
    keys.push(<Button key="bcksp" letter="backspace" isSpecial />);
  }

  if (isMiddle) {
    keys.push(<div key="spacer-end" className="max-w-[21px] w-full" />);
  }

  return <div className="flex">{keys}</div>;
}

Row.defaultProps = {
  hasSpecialKeys: false,
  isMiddle: false,
};

Row.propTypes = {
  letters: PropTypes.string.isRequired,
  hasSpecialKeys: PropTypes.bool,
  isMiddle: PropTypes.bool,
};

export default Row;
