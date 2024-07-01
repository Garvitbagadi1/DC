// src/components/ADHDTest.js
import React, { useState } from 'react';
import './adhs.css';

const questions = [
    {
      questionText: 'How often do you find it difficult to concentrate on tasks or activities that require sustained attention?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How often do you have difficulty organizing tasks and activities?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How frequently do you avoid or delay tasks that require sustained mental effort?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How often do you lose things necessary for tasks and activities (e.g., keys, phone, wallet)?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How frequently do you forget to do daily activities (e.g., paying bills, chores)?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How often do you interrupt others during conversations or activities?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How frequently do you have trouble waiting your turn (e.g., in line, during games)?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How often do you blurt out answers before questions have been completed?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How frequently do you have difficulty in following through on commitments and finishing tasks (e.g., work-related duties)?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How often do you have difficulty organizing tasks and activities?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How frequently do you avoid, dislike, or are reluctant to engage in tasks that require sustained mental effort (e.g., schoolwork or homework)?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How often do you lose things necessary for tasks and activities (e.g., school materials, books, tools, wallets, keys)?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How frequently do you become easily distracted by extraneous stimuli?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
    {
      questionText: 'How often do you forget to do something daily (e.g., missing appointments, forgetting to return phone calls, paying bills)?',
      answerOptions: [
        { answerText: 'Never', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
      ],
    },
  ];
  

const ADHDTest = () => {
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
    // Define score ranges and corresponding messages here
    if (totalScore <= 5) {
      setResultMessage('You are not showing significant signs of ADHD.');
      setNextSteps('Continue monitoring your symptoms and consult a healthcare professional if needed.');
    } else if (totalScore <= 10) {
      setResultMessage('You may have mild symptoms of ADHD.');
      setNextSteps('Consider talking to a healthcare professional for further evaluation and guidance.');
    } else if (totalScore <= 15) {
      setResultMessage('You are showing moderate symptoms of ADHD.');
      setNextSteps('It is recommended to consult with a specialist for a thorough evaluation and treatment options.');
    } else {
      setResultMessage('You are displaying significant signs of ADHD.');
      setNextSteps('Seek immediate consultation with a healthcare professional for a comprehensive assessment and treatment.');
    }
  };

  return (
    <div className="adhd-test">
      {showResult ? (
        <div className="result-section">
          <h2>Result</h2>
          <p className="result-message">{resultMessage}</p>
          <p className="next-steps">{nextSteps}</p>
          <button className="retake-button" onClick={() => window.location.reload()}>Retake the Test</button>
        </div>
      ) : (
        <div>
          <h2>Test Your ADHD Level</h2>
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

export default ADHDTest;
