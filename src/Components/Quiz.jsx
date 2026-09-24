import React, { useState, useEffect } from 'react';

function Quiz({ apiUrl, onBackToHome, themeColors }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  const text = {
    loading: "LOADING MISSION...",
    error: "FAILED TO LOAD QUESTIONS FROM API!",
    backBtn: "BACK",
    finished: "MISSION COMPLETE!",
    scoreText: "YOUR SCORE:",
    otherMission: "CHOOSE OTHER MISSION",
    questionLabel: "QUESTION"
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setQuestions(data.results);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return (
    <p
      className="text-center font-black text-xl border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,1,1,1)]"
      style={{ backgroundColor: themeColors.badge }}
    >
      {text.loading}
    </p>
  );
  
  if (questions.length === 0) return (
    <div
      className="border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,1,1,1)] text-center"
      style={{ backgroundColor: themeColors.error }}
    >
      <p className="font-black text-black mb-4 text-lg">{text.error}</p>
      <button
        onClick={onBackToHome}
        className="hover:brightness-110 border-2 border-black px-4 py-2 font-black shadow-[3px_3px_0px_0px_rgba(0,1,1,1)]"
        style={{ backgroundColor: themeColors.badge }}
      >
        {text.backBtn}
      </button>
    </div>
  );
  
  if (isFinished) return (
    <div
      className="border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,1,1,1)] text-center"
      style={{ backgroundColor: themeColors.panel }}
    >
      <h2 className="text-3xl font-black mb-4 uppercase text-black">{text.finished} 🎉</h2>
      <div
        className="border-3 border-black p-4 mb-6 font-black text-xl inline-block shadow-[4px_4px_0px_0px_rgba(0,1,1,1)]"
        style={{ backgroundColor: themeColors.badge }}
      >
        {text.scoreText} {score} / {questions.length}
      </div>
      <button 
        onClick={onBackToHome} 
        className="w-full hover:brightness-110 border-4 border-black py-3 font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(0,1,1,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
        style={{ backgroundColor: themeColors.success }}
      >
        {text.otherMission}
      </button>
    </div>
  );

  const currentQuestion = questions[currentIndex];
  const options = ["True", "False"];

  const answerColors = [
    themeColors.answerTrue,
    themeColors.answerFalse
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div
      className="border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,1,1,1)] relative"
      style={{ backgroundColor: themeColors.panel }}
    >
      
      <div className="flex justify-between items-center mb-6">
        <span
          className="border-2 border-black px-3 py-1 font-black text-sm shadow-[3px_3px_0px_0px_rgba(0,1,1,1)] uppercase"
          style={{ backgroundColor: themeColors.secondary }}
        >
          {text.questionLabel} {currentIndex + 1} / {questions.length}
        </span>
        <div className="w-20 bg-white border-2 border-black h-4 overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,1,1,1)]">
          <div 
            className="bg-black h-full transition-all duration-300" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white border-3 border-black p-5 mb-6 shadow-[4px_4px_0px_0px_rgba(0,1,1,1)]">
        <p className="text-xl font-black leading-snug text-black" dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      </div>

      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => handleAnswer(option)}
            className="w-full py-4 px-6 hover:brightness-110 border-4 border-black font-black text-xl uppercase shadow-[4px_4px_0px_0px_rgba(0,1,1,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all text-center"
            style={{ backgroundColor: answerColors[index] }}
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  );
}

export default Quiz;