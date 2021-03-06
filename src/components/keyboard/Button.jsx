import PropTypes from 'prop-types';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { keyboardColorsMapState } from '../../atoms';
import CellState from '../../constants/CellState';

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

function Button({ letter, isSpecial = false }) {
  const colorMap = useRecoilValue(keyboardColorsMapState);

  const bgClass = colorMap[letter];

  const textColorClass =
    !bgClass || bgClass === CellState.ACTIVE ? 'text-black dark:text-white' : 'text-white';

  let width = 'max-w-[43px]';

  if (isSpecial) {
    width = 'max-w-[65px]';
  }

  const onKeyDown = () => {
    const event = new KeyboardEvent('keydown', {
      key: letter,
    });
    window.dispatchEvent(event);
  };

  const letterDom = letter === 'backspace' ? bcksp : letter;

  return (
    <div
      aria-hidden
      onClick={onKeyDown}
      className={`flex key ${bgClass} bg-gray-400 rounded text-center w-full ${width} h-14 m-1 select-none`}>
      <div className="m-auto">
        <p className={`text-xs font-bold ${textColorClass} uppercase`}>{letterDom}</p>
      </div>
    </div>
  );
}

Button.defaultProps = {
  isSpecial: false,
};

Button.propTypes = {
  letter: PropTypes.string.isRequired,
  isSpecial: PropTypes.bool,
};

export default Button;
