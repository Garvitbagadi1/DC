import React, { useState } from 'react';
import './eat.css';

const questions = [
    {
      questionText: 'Do you have a fear of gaining weight, even if you are underweight?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you engage in frequent dieting or restrictive eating?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you ever made yourself vomit as a way to control your weight or shape?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you often feel guilty or ashamed after eating?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you lost a significant amount of weight recently without a medical reason?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you avoid eating in front of others?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced dizziness or fainting due to not eating enough?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you obsessively count calories or weigh your food portions?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you feel a need to exercise excessively to "burn off" calories from eating?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced hair loss or brittle nails due to nutritional deficiencies?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you feel preoccupied with thoughts about food, weight, or body shape?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you ever used laxatives or diuretics to control your weight or shape?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you eat in secret or hide food from others?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you had irregular menstrual periods due to low body weight?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you experience cold intolerance or always feel cold, even in warm environments?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
  ];
  

const EatingDisorderTest = () => {
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
      { minScore: 0, maxScore: 5, message: 'You are not showing significant signs of an eating disorder.' },
      { minScore: 6, maxScore: 10, message: 'You may have mild symptoms of an eating disorder.' },
      { minScore: 11, maxScore: 15, message: 'You are experiencing moderate symptoms of an eating disorder.' },
      { minScore: 16, maxScore: 30, message: 'You may have severe symptoms of an eating disorder.' },
      { minScore: 31, maxScore: 100, message: 'You have severe Final stage of an eating disorder.' },

    ];

    const matchingRange = scoreRanges.find(
      (range) => totalScore >= range.minScore && totalScore <= range.maxScore
    );

    if (matchingRange) {
      setResultMessage(matchingRange.message);
      setNextSteps(getEatingDisorderGuidance(matchingRange));
    }
  };

  const getEatingDisorderGuidance = (range) => {
    if (range.minScore >= 0 && range.maxScore <= 5) {
      return 'Continue practicing a healthy relationship with food and seek support from friends and family if needed.';
    } else if (range.minScore >= 6 && range.maxScore <= 10) {
      return 'Consider consulting with a registered dietitian or a mental health professional for guidance on maintaining a balanced diet and mental well-being.';
    } else if (range.minScore >= 11 && range.maxScore <= 15) {
      return 'It is recommended to consult with a mental health specialist or an eating disorder therapist for evaluation and treatment.';
    } else if (range.minScore >= 16 && range.maxScore <= 30) {
      return 'Seek immediate help from a mental health professional or an eating disorder treatment center.';
    } else {
      return 'Need Emergency Assistance';
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
    <div className="eating-disorder-test">
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
          <h2>Eating Disorder Test</h2>
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

export default EatingDisorderTest;
