// src/components/PTSDTest.js
import React, { useState } from 'react';
import './ptsd.css';
const questions = [
    {
      questionText: 'Have you experienced a traumatic event or witnessed one?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you often have distressing memories or dreams related to the traumatic event?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced flashbacks or relived the traumatic event as if it were happening again?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do certain sounds or smells trigger intense emotional reactions or distress related to the trauma?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you avoided places, people, or activities that remind you of the traumatic event?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you experience ongoing negative thoughts or feelings about yourself or others as a result of the trauma?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you noticed a significant change in your mood or emotional reactions since the traumatic event?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you become more irritable or easily startled since the trauma occurred?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you had trouble sleeping, such as difficulty falling asleep or frequent nightmares related to the trauma?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you experienced physical symptoms like increased heart rate or sweating when reminded of the traumatic event?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you feel emotionally numb or detached from others since the traumatic event?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you had difficulty concentrating or experiencing memory problems related to the trauma?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you used substances like drugs or alcohol to cope with symptoms or experiences related to the trauma?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Do you experience intense guilt or blame yourself for the traumatic event?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you noticed a significant decline in your overall quality of life since the traumatic event?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
  ];
  

  const PTSDTest = () => {
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
        { minScore: 0, maxScore: 9, message: 'You are not showing significant signs of PTSD.' },
        { minScore: 10, maxScore: 19, message: 'You may have mild symptoms of PTSD.' },
        { minScore: 20, maxScore: 29, message: 'You are experiencing moderate symptoms of PTSD.' },
        { minScore: 30, maxScore: 45, message: 'You may have severe symptoms of PTSD.' },
      ];
  
      // Find the matching score range and result message
      const matchingRange = scoreRanges.find(
        (range) => totalScore >= range.minScore && totalScore <= range.maxScore
      );
  
      if (matchingRange) {
        setResultMessage(matchingRange.message);
        setNextSteps(getPTSDGuidance(totalScore)); // Call the guidance function here
      } else {
        setResultMessage('Unable to determine your PTSD level based on your answers.');
        setNextSteps('');
      }
    };
  
    // Example usage:
    // const userAnswers = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]; // Replace with the user's actual answers
  
    
        const getPTSDGuidance = (score) => {
            if (score >= 0 && score <= 9) {
              return 'Based on your score, you are not showing significant signs of PTSD. Continue monitoring your mental health and reach out to a mental health professional if you have concerns.';
            } else if (score >= 10 && score <= 19) {
              return 'Your score suggests you may have mild symptoms of PTSD. It is important to take care of your mental health. Consider discussing your symptoms with a mental health professional for guidance and support.';
            } else if (score >= 20 && score <= 29) {
              return 'Your score indicates that you are experiencing moderate symptoms of PTSD. We recommend seeking help from a mental health specialist for evaluation and treatment.';
            } else if (score >= 30 && score <= 45) {
              return 'Your score suggests that you may have severe symptoms of PTSD. It is crucial to seek immediate help from a mental health professional or a crisis helpline.';
            } else {
              return 'Unable to determine your PTSD level based on your score. Please consult with a mental health professional for a more accurate assessment.';
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
      <div className="ptsd-test">
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
            <h2>PTSD (Post-Traumatic Stress Disorder) Test</h2>
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
  
  export default PTSDTest;