import React, { useState } from 'react';
import './Addiction.css';

const questions = [
    {
      questionText: 'Do you find it difficult to control your use of a substance or engage in a behavior?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you tried to cut down or control your substance use or behavior without success?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you spend a significant amount of time obtaining, using, or recovering from the substance or behavior?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Is your substance use or behavior causing problems in your relationships, work, or other important areas of your life?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you given up or reduced important social, occupational, or recreational activities because of your substance use or behavior?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you continue your substance use or behavior despite knowing that it is causing or worsening a physical or psychological problem?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you experience cravings or a strong desire to engage in the substance or behavior?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you failed to fulfill major role obligations at work, school, or home because of your substance use or behavior?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you use the substance or engage in the behavior in situations where it is physically hazardous?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you continue to use the substance or engage in the behavior despite knowing it is causing or worsening a psychological problem?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you need more of the substance or behavior to achieve the desired effect (tolerance)?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you experience withdrawal symptoms when you stop using the substance or engaging in the behavior or use it to relieve withdrawal symptoms?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you made unsuccessful efforts to cut down or control your substance use or behavior?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you lost interest or reduced participation in activities that were once important or enjoyable due to your substance use or behavior?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
  ];
  

const AddictionTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [nextSteps, setNextSteps] = useState('');

  const handleAnswerOptionClick = (score) => {
    setTotalScore(totalScore + score);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    // Define score ranges and corresponding result messages
    const scoreRanges = [
      { minScore: 0, maxScore: 5, message: 'You are not showing significant signs of addiction.' },
      { minScore: 6, maxScore: 10, message: 'You may have mild symptoms of addiction.' },
      { minScore: 11, maxScore: 15, message: 'You are experiencing moderate symptoms of addiction.' },
      { minScore: 16, maxScore: 30, message: 'You may have severe symptoms of addiction.' },
    ];

    const matchingRange = scoreRanges.find(
      (range) => totalScore >= range.minScore && totalScore <= range.maxScore
    );

    if (matchingRange) {
      setResultMessage(matchingRange.message);
      setNextSteps(getAddictionGuidance(matchingRange));
    }
  };

  const getAddictionGuidance = (range) => {
    if (range.minScore >= 0 && range.maxScore <= 5) {
      return 'Continue monitoring your use and consider seeking support if needed.';
    } else if (range.minScore >= 6 && range.maxScore <= 10) {
      return 'It may be helpful to seek professional advice or counseling.';
    } else if (range.minScore >= 11 && range.maxScore <= 15) {
      return 'Consult with a healthcare professional or addiction specialist for guidance.';
    } else if (range.minScore >= 16 && range.maxScore <= 30) {
      return 'Seek immediate help from a healthcare professional or addiction treatment center.';
    } else {
      return ''; // Handle other cases if necessary
    }
  };

  const handleRetakeClick = () => {
    setCurrentQuestion(0);
    setTotalScore(0);
    setShowResult(false);
    setResultMessage('');
    setNextSteps('');
  };

  return (
    <div className="addiction-test">
      {showResult ? (
        <div className="result-section">
          <h2>Result</h2>
          <p className="result-message">{resultMessage}</p>
          <p className="next-steps">{nextSteps}</p>
          <button className="retake-button" onClick={handleRetakeClick}>
            Retake the Test
          </button>
        </div>
      ) : (
        <div>
          <h2>Addiction Test</h2>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                className="answer-option"
                onClick={() => handleAnswerOptionClick(option.score)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddictionTest;
