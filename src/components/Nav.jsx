import React from 'react';
import ThemeModeBtn from './ThemeModeBtn';

function Nav() {
  return (
    <>
      <div className="grid grid-cols-3 gap-0">
        <div />
        <h2 className="text-center font-nova tracking-widest text-5xl dark:text-white">Wordle</h2>
        <div className="text-right">
          <ThemeModeBtn />
        </div>
      </div>
      <hr className="mt-6" />
    </>
  );
}

export default Nav;
