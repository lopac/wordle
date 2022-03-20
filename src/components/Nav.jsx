import React from 'react';
import ThemeModeBtn from './ThemeModeBtn';

function Nav() {
  return (
    <>
      <div className="grid grid-cols-3 gap-0">
        <div />
        <p className="text-center font-nova tracking-widest text-3xl dark:text-white">LeWord</p>
        <div className="text-right">
          <ThemeModeBtn />
        </div>
      </div>
      <hr className="mt-2 sm:mt-6" />
    </>
  );
}

export default Nav;
