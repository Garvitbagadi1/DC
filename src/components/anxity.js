// src/components/AnxietyTest.js
import React, { useState } from 'react';
import './Anxity.css';
const questions = [
    {
      questionText: 'How often do you feel nervous or anxious?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'Do you often worry excessively about various aspects of your life?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'Do you have trouble falling asleep due to anxious thoughts?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'How often do you experience physical symptoms of anxiety, such as a racing heart or trembling hands?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'Do you avoid situations or places because they make you feel anxious?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'How often do you feel tense or on edge?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'Do you have trouble concentrating or mind going blank due to anxiety?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'How often do you experience restlessness or an inability to relax?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'Do you have recurring, intrusive, or distressing thoughts or images related to anxiety?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'How often do you experience sudden episodes of intense fear or discomfort?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'Do you find it difficult to control your worrying thoughts?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'How often do you experience physical symptoms like sweating, shortness of breath, or dizziness due to anxiety?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'Do you frequently feel overwhelmed by anxious thoughts or feelings?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
    {
      questionText: 'How often do you experience muscle tension or physical discomfort due to anxiety?',
      answerOptions: [
        { answerText: 'Not at all', score: 1 },
        { answerText: 'Rarely', score: 2 },
        { answerText: 'Sometimes', score: 3 },
        { answerText: 'Often', score: 4 },
        { answerText: 'Very often', score: 5 },
      ],
    },
  ];
  

  const AnxietyTest = () => {
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
      if (totalScore <= 20) {
        setResultMessage('You have a low level of anxiety.');
        setTreatmentSuggestions('Consider practicing relaxation techniques and maintaining a healthy lifestyle.');
      } else if (totalScore <= 40) {
        setResultMessage('You have a moderate level of anxiety.');
        setTreatmentSuggestions('Consult a mental health professional for guidance and support.');
      } else if (totalScore <= 60) {
        setResultMessage('You have a high level of anxiety.');
        setTreatmentSuggestions('It is advisable to seek help from a mental health expert for evaluation and treatment.');
      } else {
        setResultMessage('You have a very high level of anxiety.');
        setTreatmentSuggestions('Seek immediate help from a mental health specialist or therapist.');
      }
    };
    const handleRetakeTest = () => {
        setCurrentQuestion(0);
        setTotalScore(0);
        setShowResult(false);
        setResultMessage('');
        setTreatmentSuggestions('');
      };
  
      return (
        <div className="anxiety-test">
          {showResult ? (
            <div className="result-section">
              <h2>Result</h2>
              <p className="result-message">{resultMessage}</p>
              <p className="treatment-suggestions">{treatmentSuggestions}</p>
              {/* <p className="total-score">Your Total Score: {totalScore}</p> */}
              <button className="retake-button" onClick={handleRetakeTest}>
                Retake The Test
              </button>
            </div>
          ) : (
            <div>
              <h2>Test Your Anxiety Level</h2>
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
    
    export default AnxietyTest;