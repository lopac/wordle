import React from 'react';
import Row from './Row';

function Keyboard() {
  return (
    <div className="m-auto max-w-md">
      <Row letters="QWERTYUIOP" />
      <Row letters="ASDFGHJKL" isMiddle />
      <Row letters="ZXCVBNM" hasSpecialKeys />
    </div>
  );
}

export default Keyboard;
