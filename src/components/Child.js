import React, { useState } from 'react';
import './child.css';

const questions = [
    {
      questionText: 'Does your child often seem sad or down?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Has your child lost interest in activities they used to enjoy?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Does your child have difficulty sleeping (e.g., trouble falling asleep, waking up frequently)?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Has your child appetite significantly changed (e.g., eating significantly more or less than usual)?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Has your child been withdrawing from friends and family, spending more time alone?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Is your child experiencing difficulties in school (e.g., declining grades, trouble concentrating)?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Has your child expressed feelings of hopelessness or worthlessness?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Has your child mentioned thoughts of self-harm or suicide?',
      answerOptions: [
        { answerText: 'Yes', score: 4 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Is your child engaging in risky behaviors (e.g., substance abuse, dangerous activities)?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Have you noticed significant changes in your child appearance or personal hygiene?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Does your child seem excessively anxious or worried?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Has your child mentioned experiencing nightmares or night terrors?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Is your child frequently complaining of physical ailments (e.g., headaches, stomachaches) with no apparent medical cause?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Has your child shown aggressive or violent behavior towards others?',
      answerOptions: [
        { answerText: 'Yes', score: 3 },
        { answerText: 'No', score: 0 },
      ],
    },
    {
      questionText: 'Is your child excessively irritable or easily angered?',
      answerOptions: [
        { answerText: 'Yes', score: 2 },
        { answerText: 'No', score: 0 },
      ],
    },
  ];
  

  const ParentTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [resultMessage, setResultMessage] = useState('');
    const [suggestion, setSuggestion] = useState('');
  
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
        { minScore: 0, maxScore: 5, message: 'Your child\'s mental health appears to be in good shape.' },
        { minScore: 6, maxScore: 10, message: 'Your child may be experiencing mild mental health challenges. Consider seeking professional advice.' },
        { minScore: 11, maxScore: 15, message: 'Your child\'s mental health may be a cause for concern. Consult with a mental health specialist.' },
        { minScore: 16, maxScore: 30, message: 'Your child\'s mental health appears to be significantly impacted. Seek immediate professional help.' },
        { minScore: 31, maxScore: 100, message: 'Your child have severe Final stage of an Mental Health.' },
      ];
  
      const matchingRange = scoreRanges.find(
        (range) => totalScore >= range.minScore && totalScore <= range.maxScore
      );
  
      if (matchingRange) {
        setResultMessage(matchingRange.message);
        setSuggestion(getSuggestion(matchingRange));
      }
    };
  
    const getSuggestion = (range) => {
      // Define suggestions based on score ranges
      if (range.minScore >= 0 && range.maxScore <= 5) {
        return 'Continue to maintain a supportive and open communication with your child.';
      } else if (range.minScore >= 6 && range.maxScore <= 10) {
        return 'Consider consulting with a child psychologist or counselor for guidance and support.';
      } else if (range.minScore >= 11 && range.maxScore <= 15) {
        return 'It is advisable to seek professional evaluation from a child mental health specialist.';
      } else if (range.minScore >= 16 && range.maxScore <= 30) {
        return 'Please seek immediate assistance from a mental health professional or crisis helpline.';
      } else {
        return ' Need Emergency Assistance'; // Handle other cases if necessary
      }
    };
  
    const handleRetakeClick = () => {
      setCurrentQuestion(0);
      setTotalScore(0);
      setShowResult(false);
      setResultMessage('');
      setSuggestion('');
    };
  
    return (
      <div className="parent-test">
        {showResult ? (
          <div className="result-section">
            <h2>Result</h2>
            <p className="result-message">{resultMessage}</p>
            <p className="suggestion">{suggestion}</p>
            <button className="retake-button" onClick={handleRetakeClick}>
              Retake the Test
            </button>
          </div>
        ) : (
          <div>
            <h2>Parent Test: Your Child’s Mental Health</h2>
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
  
  export default ParentTest;