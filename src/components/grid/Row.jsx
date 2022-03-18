import PropTypes from 'prop-types';
import React from 'react';
import Cell from './Cell';

function Row({ value }) {
  const cells = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    const cellValue = value[i] ?? '';

    cells.push(<Cell key={`cell-${i}`} value={cellValue} />);
  }

  return <div className="flex justify-center gap-2 mb-2">{cells}</div>;
}

Row.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Row;
