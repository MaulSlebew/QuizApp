import React from 'react';

function Footer({ themeColors }) {
  return (
    <footer className="w-full max-w-5xl mt-12 mb-6 bg-white border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,1,1,1)] text-center flex flex-col items-center justify-center gap-2">

      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 font-black text-xs md:text-sm uppercase tracking-wider text-black">
        <span>MADE BY</span>
        <span
          className="px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,1,1,1)] text-center"
          style={{ backgroundColor: themeColors.badge }}
        >
          FARID MAULANA RHAMADAN
        </span>
      </div>

      <p className="text-[10px] md:text-xs font-bold text-gray-600 uppercase tracking-wide mt-1">
        PORTFOLIO PROJECT &bull; REACT & TAILWIND CSS
      </p>

    </footer>
  );
}

export default Footer;