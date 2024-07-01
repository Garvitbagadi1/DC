// src/components/DepressionTest.js
import React, { useState } from 'react';
import './depression.css';

const questions = [
  {
    questionText: 'Over the last two weeks, how often have you felt little interest or pleasure in doing things you usually enjoy?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'Over the last two weeks, how often have you felt down, depressed, or hopeless?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'How often have you had trouble falling asleep, staying asleep, or sleeping too much over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'Have you experienced a significant change in your appetite or weight (either loss or gain) over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'How often have you felt fatigued or had a lack of energy over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'Have you experienced feelings of worthlessness or excessive guilt over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'How often have you had difficulty concentrating or making decisions over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'Have you had thoughts of death or suicide over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'How often have you felt irritable over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'Have you experienced a loss of interest or pleasure in your sex life over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'How often have you experienced physical symptoms such as headaches, body aches, or stomach problems over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'Have you had difficulty falling asleep or staying asleep over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'How often have you felt a sense of hopelessness or despair over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'Have you experienced a significant change in your sleep patterns, such as sleeping too much or too little, over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
  {
    questionText: 'How often have you felt overwhelmed or unable to cope with daily life over the last two weeks?',
    answerOptions: [
      { answerText: 'Not at all', score: 0 },
      { answerText: 'Several days', score: 1 },
      { answerText: 'More than half the days', score: 2 },
      { answerText: 'Nearly every day', score: 3 },
    ],
  },
];


const DepressionTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [treatmentSuggestions, setTreatmentSuggestions] = useState('');

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
    // Define score ranges and corresponding messages here
    if (totalScore <= 5) {
      setResultMessage('You are not experiencing significant depression symptoms.');
      setTreatmentSuggestions('Continue to focus on self-care and seek support from loved ones.');
    } else if (totalScore <= 10) {
      setResultMessage('You are experiencing mild depression symptoms.');
      setTreatmentSuggestions('Consider talking to a therapist or counselor for support.');
    } else if (totalScore <= 15) {
      setResultMessage('You are experiencing moderate depression symptoms.');
      setTreatmentSuggestions('Seek professional help and consider therapy or counseling.');
    } else {
      setResultMessage('You are experiencing severe depression symptoms.');
      setTreatmentSuggestions('Seek immediate professional help and therapy.');
    }
  };

  return (
    <div className="depression-test">
      {showResult ? (
        <div className="result-section">
          <h2>Result</h2>
          <p className="result-message">{resultMessage}</p>
          <p className="treatment-suggestions">{treatmentSuggestions}</p>
          <button
            className="retake-button"
            onClick={() => {
              setCurrentQuestion(0);
              setTotalScore(0);
              setShowResult(false);
            }}
          >
            Retake the Test
          </button>
        </div>
      ) : (
        <div>
          <h2>Test Your Depression Level</h2>
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

export default DepressionTest;