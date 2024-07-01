// src/components/BipolarTest.js
import React, { useState } from 'react';
import './bipolar.css';

const questions = [
    {
      questionText: 'Have you experienced episodes of abnormally elevated mood or increased energy that lasted for at least one week?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you ever had episodes of abnormally irritable mood that lasted for at least one week?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced a decreased need for sleep during elevated mood episodes?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you engaged in impulsive or risky behaviors during elevated mood episodes?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced periods of abnormally low mood, lack of interest, or pleasure in daily activities (depression)?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced significant changes in appetite and weight during mood episodes?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you had trouble concentrating or making decisions during mood episodes?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced feelings of worthlessness or excessive guilt during depressive episodes?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you had thoughts of death or suicide during depressive episodes?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you noticed changes in your energy levels during mood episodes (e.g., feeling very energetic and active or extremely fatigued and slowed down)?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced mood swings that affect your ability to function or have caused relationship problems?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you ever been diagnosed with Bipolar Disorder or received treatment for mood-related symptoms?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you used substances like drugs or alcohol to cope with mood swings or symptoms?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced disruptions in your daily life, work, or relationships due to mood episodes?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you had a family history of Bipolar Disorder or other mood disorders?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
  ];
  

const BipolarTest = () => {
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
    const totalQuestions = questions.length;
    const threshold = totalQuestions / 2; // Define a threshold (e.g., half of the questions)

    if (totalScore >= threshold) {
      setResultMessage('You may have symptoms consistent with Bipolar Disorder.');
      setNextSteps('Consult with a mental health professional for a thorough evaluation and guidance.');
    } else {
      setResultMessage('You are not showing significant signs of Bipolar Disorder.');
      setNextSteps('Continue monitoring your mood and consult a healthcare professional if needed.');
    }
  };

  return (
    <div className="bipolar-test">
      {showResult ? (
        <div className="result-section">
          <h2>Result</h2>
          <p className="result-message">{resultMessage}</p>
          <p className="next-steps">{nextSteps}</p>
          <button className="retake-button" onClick={() => window.location.reload()}>Retake the Test</button>
        </div>
      ) : (
        <div>
          <h2>Test for Bipolar Disorder</h2>
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

export default BipolarTest;
