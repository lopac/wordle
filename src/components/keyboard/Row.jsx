import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const bcksp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
    />
  </svg>
);

function Row({ letters, hasSpecialKeys = false, isMiddle = false }) {
  const keys = [];

  if (isMiddle) {
    keys.push(<div className="max-w-[21px] w-full" />);
  }

  if (hasSpecialKeys) {
    keys.push(<Button key="enter" letter="enter" isSpecial />);
  }

  for (let i = 0; i < letters.length; i += 1) {
    keys.push(<Button key={`key-${i}`} letter={letters[i]} />);
  }

  if (hasSpecialKeys) {
    keys.push(<Button key="bcksp" letter={bcksp} isSpecial />);
  }

  if (isMiddle) {
    keys.push(<div className="max-w-[21px] w-full" />);
  }

  return <div className="flex">{keys}</div>;
}

Row.propTypes = {
  letters: PropTypes.string.isRequired,
  hasSpecialKeys: PropTypes.bool.isRequired,
  isMiddle: PropTypes.bool.isRequired,
};

export default Row;
