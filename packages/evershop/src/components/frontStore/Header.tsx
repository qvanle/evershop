import Area from '@components/common/Area.js';
import React from 'react';

export function Header() {
  return (
    <header className="header bg-background">
      {/* Announcement bar area (Announcement bar widget lands here). */}
      <Area
        id="headerTop"
        className="header__top"
        isGlobal
        editableInPageBuilder
      />
      {/* Three columns: logo on the left edge, menu centered, search / account /
          cart on the right edge, constrained to the page width. */}
      <div className="header__middle page-width grid grid-cols-[1fr_auto_1fr] items-center gap-6 py-3.5">
        <Area
          id="headerMiddleLeft"
          className="header__middle__left flex justify-start items-center"
          isGlobal
          editableInPageBuilder
        />
        <Area
          id="headerMiddleCenter"
          className="header__middle__center flex justify-center items-center"
          isGlobal
          editableInPageBuilder
        />
        <Area
          id="headerMiddleRight"
          className="header__middle__right flex justify-end items-center gap-3"
          isGlobal
          editableInPageBuilder
        />
      </div>
      <Area
        id="headerBottom"
        className="header__bottom"
        isGlobal
        editableInPageBuilder
      />
    </header>
  );
}
