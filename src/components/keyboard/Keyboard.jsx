import React from 'react';
import Row from './Row';

function Keyboard() {
  return (
    <div className="m-auto max-w-md">
      <Row letters="qwertyuiop" />
      <Row letters="asdfghjkl" isMiddle />
      <Row letters="zxcvbnm" hasSpecialKeys />
    </div>
  );
}

export default Keyboard;
