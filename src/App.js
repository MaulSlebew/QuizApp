import React, { useState } from 'react';
import Quiz from './Components/Quiz';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; // Impor Footer

function App() {
  const [selectedApiUrl, setSelectedApiUrl] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [theme, setTheme] = useState('pink');

  const themesConfig = {
    pink: {
      background: "#ff79b0",
      pattern: "#ff4d94",
      badge: "#ffd166",
      badgeHover: "#ffe08a",
      panel: "#ffb3d1",
      secondary: "#a7f3d0",
      answerTrue: "#67e8f9",
      answerFalse: "#fb7185",
      success: "#86efac",
      error: "#f87171"
    },
    blue: {
      background: "#70a1ff",
      pattern: "#1e90ff",
      badge: "#fcd34d",
      badgeHover: "#fde68a",
      panel: "#bae6fd",
      secondary: "#c4b5fd",
      answerTrue: "#67e8f9",
      answerFalse: "#fda4af",
      success: "#86efac",
      error: "#f87171"
    },
    yellow: {
      background: "#facc15",
      pattern: "#eab308",
      badge: "#fb923c",
      badgeHover: "#fdba74",
      panel: "#fef08a",
      secondary: "#93c5fd",
      answerTrue: "#67e8f9",
      answerFalse: "#fb7185",
      success: "#86efac",
      error: "#f87171"
    },
    purple: {
      background: "#c084fc",
      pattern: "#9333ea",
      badge: "#f9a8d4",
      badgeHover: "#fbcfe8",
      panel: "#e9d5ff",
      secondary: "#86efac",
      answerTrue: "#67e8f9",
      answerFalse: "#fb7185",
      success: "#86efac",
      error: "#f87171"
    }
  };

  const currentTexts = {
    navTitle: "COMIC QUIZ",
    subtitle: "CHOOSE ONE OF THE 9 QUIZ MISSIONS BELOW",
    mission: "MISSION",
    playBtn: "START",
    exitBtn: "EXIT",
    categories: [
      { name: 'GENERAL KNOWLEDGE', desc: 'Test your insights on unique world facts!' },
      { name: 'TECHNOLOGY & COMPUTERS', desc: 'Challenges around coding and devices.' },
      { name: 'VIDEO GAMES', desc: 'Test how well you know the gaming world.' },
      { name: 'HISTORY QUIZ', desc: 'Test your knowledge of past world history!' },
      { name: 'SPORTS QUIZ', desc: 'Guess fun facts about the sports world!' },
      { name: 'SCIENCE & NATURE', desc: 'Explore science, biology, and the universe.' },
      { name: 'FILM & MOVIES', desc: 'How well do you know the movie industry?' },
      { name: 'MUSIC & SONGS', desc: 'Test your memory on tunes and musicians.' },
      { name: 'BOOKS & LITERATURE', desc: 'Puzzles from various literary works.' }
    ]
  };

  const apiUrls = [
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean',
    'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean',
    'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean',
    'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean',
    'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=boolean',
    'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=boolean',
    'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean',
    'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean',
    'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=boolean'
  ];

  const currentTheme = themesConfig[theme];
  const themeNames = Object.keys(themesConfig);

  const handleSelectCategory = (index) => {
    setSelectedApiUrl(apiUrls[index]);
    setCategoryName(currentTexts.categories[index].name);
  };

  const toggleTheme = () => {
    const nextThemeIndex = (themeNames.indexOf(theme) + 1) % themeNames.length;
    setTheme(themeNames[nextThemeIndex]);
  };

  return (
    <div
      className="min-h-screen [background-size:16px_16px] text-black flex flex-col items-center justify-between p-6 font-sans transition-colors duration-300"
      style={{
        backgroundColor: currentTheme.background,
        backgroundImage: `radial-gradient(${currentTheme.pattern} 2px, transparent 2px)`
      }}
    >

      <div className="w-full flex flex-col items-center">
        <Navbar 
          theme={theme}
          themeColors={currentTheme}
          onToggleTheme={toggleTheme}
          title={currentTexts.navTitle} 
        />

        {!selectedApiUrl ? (
          <div className="w-full max-w-5xl text-center py-2">
            
            <p
              className="text-base md:text-lg font-bold border-2 border-black inline-block px-4 py-1 shadow-[3px_3px_0px_0px_rgba(0,1,1,1)] mb-8 transform rotate-1"
              style={{ backgroundColor: currentTheme.badge }}
            >
              {currentTexts.subtitle}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {currentTexts.categories.map((cat, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectCategory(index)}
                  className="bg-white border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,1,1,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,1,1,1)] transition-all cursor-pointer flex flex-col justify-between text-left"
                >
                  <div>
                    <span className="text-xs font-black bg-black text-white px-2 py-1 uppercase">
                      {currentTexts.mission} 0{index + 1}
                    </span>
                    <h3 className="text-xl font-black mt-3 mb-2">{cat.name}</h3>
                    <p className="text-xs font-semibold text-gray-700 mb-6">{cat.desc}</p>
                  </div>
                  
                  <button
                    className="w-full hover:brightness-110 border-2 border-black py-2 font-black text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,1,1,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
                    style={{ backgroundColor: currentTheme.badge }}
                  >
                    {currentTexts.playBtn}
                  </button>
                </div>
              ))}
            </div>

          </div>
        ) : (
          <div className="w-full max-w-lg mt-4">
            <div className="mb-4 flex justify-between items-center bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,1,1,1)]">
              <span
                className="font-black text-xs uppercase border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,1,1,1)]"
                style={{ backgroundColor: currentTheme.badge }}
              >
                {categoryName}
              </span>
              <button 
                onClick={() => setSelectedApiUrl(null)}
                className="hover:brightness-110 font-black text-xs border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,1,1,1)] active:shadow-none"
                style={{ backgroundColor: currentTheme.error }}
              >
                {currentTexts.exitBtn}
              </button>
            </div>
            
            <Quiz 
              apiUrl={selectedApiUrl} 
              onBackToHome={() => setSelectedApiUrl(null)} 
              themeColors={currentTheme}
            />
          </div>
        )}
      </div>

      {/* Pasang Footer di Bagian Paling Bawah */}
      <Footer themeColors={currentTheme} />

    </div>
  );
}

export default App;