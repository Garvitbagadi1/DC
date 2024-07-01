// src/components/PsychosisTest.js
import React, { useState } from 'react';
import './pst.css';

const questions = [
  {
    questionText: 'Have you experienced hallucinations (seeing or hearing things that others cannot)?',
    answerOptions: [
      { answerText: 'Yes', score: 3 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you experienced delusions (false beliefs that are resistant to reason or contrary to reality)?',
    answerOptions: [
      { answerText: 'Yes', score: 3 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you had trouble distinguishing between reality and imagination?',
    answerOptions: [
      { answerText: 'Yes', score: 3 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you felt paranoid or excessively suspicious of others without evidence?',
    answerOptions: [
      { answerText: 'Yes', score: 3 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you experienced disorganized thinking or speech (e.g., speaking incoherently)?',
    answerOptions: [
      { answerText: 'Yes', score: 2 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you withdrawn from social interactions and activities you once enjoyed?',
    answerOptions: [
      { answerText: 'Yes', score: 2 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you experienced a decline in personal hygiene or self-care?',
    answerOptions: [
      { answerText: 'Yes', score: 2 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you had difficulty focusing or paying attention to tasks and conversations?',
    answerOptions: [
      { answerText: 'Yes', score: 2 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you experienced sudden changes in emotions or mood that are difficult to explain?',
    answerOptions: [
      { answerText: 'Yes', score: 2 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you noticed a decline in your ability to work or study effectively?',
    answerOptions: [
      { answerText: 'Yes', score: 2 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you ever been diagnosed with schizophrenia or another psychotic disorder?',
    answerOptions: [
      { answerText: 'Yes', score: 3 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you used substances like drugs or alcohol to cope with symptoms or experiences?',
    answerOptions: [
      { answerText: 'Yes', score: 2 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you experienced a significant decrease in your overall functioning and quality of life?',
    answerOptions: [
      { answerText: 'Yes', score: 3 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you had a family history of schizophrenia or other psychotic disorders?',
    answerOptions: [
      { answerText: 'Yes', score: 2 },
      { answerText: 'No', score: 0 },
    ],
  },
  {
    questionText: 'Have you ever received treatment or medication for symptoms related to psychosis or schizophrenia?',
    answerOptions: [
      { answerText: 'Yes', score: 2 },
      { answerText: 'No', score: 0 },
    ],
  },
];


const PsychosisTest = () => {
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
    const threshold = totalQuestions / 2;

    if (totalScore >= threshold) {
      setResultMessage('You may have symptoms consistent with Psychosis or Schizophrenia.');
      setNextSteps('Consult with a mental health professional for a thorough evaluation and guidance.');
    } else {
      setResultMessage('You are not showing significant signs of Psychosis or Schizophrenia.');
      setNextSteps('Continue monitoring your symptoms and consult a healthcare professional if needed.');
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
    <div className="psychosis-test">
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
          <h2>Psychosis & Schizophrenia Test</h2>
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

export default PsychosisTest;

