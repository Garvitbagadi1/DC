// src/components/DepressionTest.js
import React, { useState } from 'react';
import './post.css';

const questions = [
  {
    questionText: 'I have been able to laugh and see the funny side of things',
    answerOptions: [
      { answerText: 'AS MUCH AS I ALWAYS COULD', score: 0 },
      { answerText: 'NOT QUITE SO MUCH NOW', score: 1 },
      { answerText: 'DEFINITELY NOT SO MUCH NOW', score: 2 },
      { answerText: 'NOT AT ALL', score: 3 },
    ],
  },
  {
    questionText: 'I have looked forward with enjoyment to things',
    answerOptions: [
      { answerText: 'AS MUCH AS I EVER DID', score: 0 },
      { answerText: 'RATHER LESS THAN I USED TO', score: 1 },
      { answerText: 'DEFINITELY LESS THAN I USED TO', score: 2 },
      { answerText: 'HARDLY AT ALL', score: 3 },
    ],
  },
  {
    questionText: 'I have blamed myself unnecessarily when things went wrong',
    answerOptions: [
      { answerText: 'YES, MOST OF THE TIME', score: 2 },
      { answerText: 'YES, SOME OF THE TIME', score: 1 },
      { answerText: 'NOT VERY OFTEN', score: 0 },
      { answerText: 'NO, NEVER', score: 0 },
    ],
  },
  {
    questionText: 'I have been anxious or worried for no good reason',
    answerOptions: [
      { answerText: 'NO, NOT AT ALL', score: 0 },
      { answerText: 'HARDLY EVER', score: 1 },
      { answerText: 'YES, SOMETIMES', score: 2 },
      { answerText: 'YES, VERY OFTEN', score: 3 },
    ],
  },
  {
    questionText: 'I have felt scared or panicky for no very good reason',
    answerOptions: [
      { answerText: 'YES, QUITE A LOT', score: 2 },
      { answerText: 'YES, SOMETIMES', score: 1 },
      { answerText: 'NO, NOT MUCH', score: 0 },
      { answerText: 'NO, NOT AT ALL', score: 0 },
    ],
  },
  {
    questionText: 'Things have been getting on top of me',
    answerOptions: [
      { answerText: 'YES, MOST OF THE TIME I HAVEN\'T BEEN ABLE TO COPE AT ALL', score: 2 },
      { answerText: 'YES, SOMETIMES I HAVEN\'T BEEN COPING AS WELL AS USUAL', score: 1 },
      { answerText: 'NO, MOST OF THE TIME I HAVE COPED QUITE WELL', score: 0 },
      { answerText: 'NO, I HAVE BEEN COPING AS WELL AS EVER', score: 0 },
    ],
  },
  {
    questionText: 'I have been so unhappy that I have had difficulty sleeping',
    answerOptions: [
      { answerText: 'YES, MOST OF THE TIME', score: 2 },
      { answerText: 'YES, SOMETIMES', score: 1 },
      { answerText: 'NOT VERY OFTEN', score: 0 },
      { answerText: 'NO, NOT AT ALL', score: 0 },
    ],
  },
  {
    questionText: 'I have felt sad or miserable',
    answerOptions: [
      { answerText: 'YES, MOST OF THE TIME', score: 2 },
      { answerText: 'YES, QUITE OFTEN', score: 1 },
      { answerText: 'NOT VERY OFTEN', score: 0 },
      { answerText: 'NO, NOT AT ALL', score: 0 },
    ],
  },
  {
    questionText: 'I have been so unhappy that I have been crying',
    answerOptions: [
      { answerText: 'YES, MOST OF THE TIME', score: 2 },
      { answerText: 'YES, QUITE OFTEN', score: 1 },
      { answerText: 'ONLY OCCASIONALLY', score: 0 },
      { answerText: 'NO, NEVER', score: 0 },
    ],
  },
  {
    questionText: 'The thought of harming myself has occurred to me',
    answerOptions: [
      { answerText: 'YES, QUITE OFTEN', score: 2 },
      { answerText: 'SOMETIMES', score: 1 },
      { answerText: 'HARDLY EVER', score: 0 },
      { answerText: 'NEVER', score: 0 },
    ],
  },
];

const DepressionTest = () => {
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
      const scoreRanges = [
        { minScore: 0, maxScore: 5, message: 'You are not experiencing significant depression symptoms.' },
        { minScore: 6, maxScore: 10, message: 'You are experiencing mild depression symptoms.' },
        { minScore: 11, maxScore: 15, message: 'You are experiencing moderate depression symptoms.' },
        { minScore: 16, maxScore: 30, message: 'You are experiencing severe depression symptoms.' },
      ];
  
      const matchingRange = scoreRanges.find(
        (range) => totalScore >= range.minScore && totalScore <= range.maxScore
      );
  
      if (matchingRange) {
        setResultMessage(matchingRange.message);
        setNextSteps(getNextSteps(matchingRange));
      }
    };
  
    const getNextSteps = (range) => {
      if (range.minScore >= 0 && range.maxScore <= 5) {
        return 'Continue practicing self-care and seek support from friends and family.';
      } else if (range.minScore >= 6 && range.maxScore <= 10) {
        return 'Consider talking to a mental health professional for guidance.';
      } else if (range.minScore >= 11 && range.maxScore <= 15) {
        return 'It is recommended to consult with a mental health specialist for evaluation and treatment.';
      } else if (range.minScore >= 16 && range.maxScore <= 30) {
        return 'Seek immediate help from a mental health professional or crisis helpline.';
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
      <div className="depression-test">
        {showResult ? (
          <div className="result-section">
            <h2>Result</h2>
            <p className="result-message">{resultMessage}</p>
            <p className="next-steps">{nextSteps}</p>
            <button className="retake-button" onClick={handleRetakeClick}>
              Retake The Test
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