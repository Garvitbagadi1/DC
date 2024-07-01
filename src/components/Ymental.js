import React, { useState } from 'react';
import './ymental.css';

const questions = [
    {
      questionText: 'How often have you felt extremely sad or down in the past two weeks?',
      answerOptions: [
        { answerText: 'Not at all', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
        { answerText: 'Very often', score: 4 },
      ],
    },
    {
      questionText: 'Have you experienced changes in your appetite or weight recently?',
      answerOptions: [
        { answerText: 'No', score: 0 },
        { answerText: 'Slightly', score: 1 },
        { answerText: 'Moderately', score: 2 },
        { answerText: 'Significantly', score: 3 },
      ],
    },
    {
      questionText: 'Do you often have trouble falling asleep or staying asleep?',
      answerOptions: [
        { answerText: 'No', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
        { answerText: 'Every night', score: 4 },
      ],
    },
    {
      questionText: 'Have you lost interest in activities you used to enjoy?',
      answerOptions: [
        { answerText: 'Not at all', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
        { answerText: 'Very often', score: 4 },
      ],
    },
    {
      questionText: 'Have you had thoughts of self-harm or suicide?',
      answerOptions: [
        { answerText: 'No', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
        { answerText: 'Frequently', score: 4 },
      ],
    },
    {
      questionText: 'How often do you feel anxious or worried?',
      answerOptions: [
        { answerText: 'Not at all', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
        { answerText: 'Very often', score: 4 },
      ],
    },
    {
      questionText: 'Have you experienced physical symptoms like headaches or stomachaches due to stress?',
      answerOptions: [
        { answerText: 'No', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
        { answerText: 'Frequently', score: 4 },
      ],
    },
    {
      questionText: 'Do you often feel overwhelmed by your responsibilities and obligations?',
      answerOptions: [
        { answerText: 'Not at all', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
        { answerText: 'Very often', score: 4 },
      ],
    },
    {
      questionText: 'Have you experienced a significant change in your social life or relationships?',
      answerOptions: [
        { answerText: 'No', score: 0 },
        { answerText: 'Slightly', score: 1 },
        { answerText: 'Moderately', score: 2 },
        { answerText: 'Significantly', score: 3 },
      ],
    },
    {
      questionText: 'How often do you engage in physical activity or exercise?',
      answerOptions: [
        { answerText: 'Regularly', score: 0 },
        { answerText: 'Occasionally', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Never', score: 3 },
      ],
    },
    {
      questionText: 'Do you have difficulty concentrating or making decisions?',
      answerOptions: [
        { answerText: 'Not at all', score: 0 },
        { answerText: 'Rarely', score: 1 },
        { answerText: 'Sometimes', score: 2 },
        { answerText: 'Often', score: 3 },
        { answerText: 'Very often', score: 4 },
      ],
    },
    {
      questionText: 'Have you experienced a traumatic event in the past year?',
      answerOptions: [
        { answerText: 'No', score: 0 },
        { answerText: 'Yes', score: 4 },
      ],
    },
    {
      questionText: 'Do you have a support system or someone you can talk to about your feelings?',
      answerOptions: [
        { answerText: 'Yes, I have a strong support system', score: 0 },
        { answerText: 'Yes, but it could be better', score: 2 },
        { answerText: 'No, I feel isolated', score: 4 },
      ],
    },
    {
      questionText: 'How would you rate your overall life satisfaction?',
      answerOptions: [
        { answerText: 'Very satisfied', score: 0 },
        { answerText: 'Satisfied', score: 1 },
        { answerText: 'Neutral', score: 2 },
        { answerText: 'Dissatisfied', score: 3 },
        { answerText: 'Very dissatisfied', score: 4 },
      ],
    },
    {
      questionText: 'Have you sought help or counseling for your mental health in the past?',
      answerOptions: [
        { answerText: 'Yes', score: 0 },
        { answerText: 'No', score: 4 },
      ],
    },
  ];

const YouthMentalHealthTest = () => {
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
      { minScore: 0, maxScore: 5, message: 'Your mental health appears to be in good shape.' },
      { minScore: 6, maxScore: 10, message: 'You may be experiencing mild mental health challenges. Consider seeking professional advice.' },
      { minScore: 11, maxScore: 15, message: 'Your mental health may be a cause for concern. Consult with a mental health specialist.' },
      { minScore: 16, maxScore: 30, message: 'Your mental health appears to be significantly impacted. Seek immediate professional help.' },
      { minScore: 31, maxScore: 100, message: 'Your mental health appears in Worst condition.' },
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
      return 'Continue to prioritize self-care and reach out to friends and family for support.';
    } else if (range.minScore >= 6 && range.maxScore <= 10) {
      return 'Consider speaking to a mental health professional for guidance and support.';
    } else if (range.minScore >= 11 && range.maxScore <= 15) {
      return 'It is recommended to consult with a mental health specialist for a comprehensive assessment and possible treatment.';
    } else if (range.minScore >= 16 && range.maxScore <= 30) {
      return 'Seek immediate help from a mental health professional or crisis helpline.';
    } else {
      return 'Need Emergency Assistance'; // Handle other cases if necessary
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
    <div className="youth-mental-health-test">
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
          <h2>Youth Mental Health Test</h2>
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

export default YouthMentalHealthTest;
