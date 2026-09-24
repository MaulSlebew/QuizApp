import React from 'react';

function Navbar({ theme, themeColors, onToggleTheme, title }) {
  return (
    <nav className="w-full max-w-5xl bg-white border-4 border-black p-4 mb-8 shadow-[6px_6px_0px_0px_rgba(0,1,1,1)] flex justify-between items-center flex-wrap gap-4">
      
      {/* Logo / Judul di Navbar */}
      <div
        className="border-2 border-black px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,1,1,1)] transform -rotate-1"
        style={{ backgroundColor: themeColors.badge }}
      >
        <span className="font-black text-lg md:text-xl uppercase tracking-wider">
          {title || "COMIC QUIZ"}
        </span>
      </div>

      {/* Theme control */}
      <div className="flex gap-3">
        <button
          onClick={onToggleTheme}
          className="hover:brightness-110 border-3 border-black px-3 py-1.5 font-black text-xs md:text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,1,1,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          style={{ backgroundColor: themeColors.badge }}
        >
          THEME: {theme.toUpperCase()}
        </button>
        
      </div>

    </nav>
  );
}

export default Navbar;