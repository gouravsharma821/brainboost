'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Question {
  num1: number;
  num2: number;
  operator: string;
  answer: number;
}

export default function MathChallengeGame() {
  const router = useRouter();
  const [question, setQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    generateQuestion();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameOver && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameOver, timeLeft]);

  const generateQuestion = () => {
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let num1, num2, answer;
    
    switch (operator) {
      case '+':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 50) + 20;
        num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        answer = num1 * num2;
        break;
      default:
        num1 = 0;
        num2 = 0;
        answer = 0;
    }
    
    setQuestion({ num1, num2, operator, answer });
    setUserAnswer('');
    setFeedback(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gameStarted) {
      setGameStarted(true);
    }
    
    if (!question || !userAnswer) return;
    
    const isCorrect = parseInt(userAnswer) === question.answer;
    
    if (isCorrect) {
      setFeedback('correct');
      const points = 10 + streak * 2;
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
      
      setTimeout(() => {
        setQuestionCount(prev => prev + 1);
        generateQuestion();
      }, 500);
    } else {
      setFeedback('wrong');
      setStreak(0);
      
      setTimeout(() => {
        setQuestionCount(prev => prev + 1);
        generateQuestion();
      }, 1000);
    }
  };

  const endGame = async () => {
    setGameOver(true);
    
    try {
      await fetch('/api/games/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          game: 'mathChallenge',
          score: score,
        }),
      });
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  const restartGame = () => {
    setScore(0);
    setQuestionCount(0);
    setTimeLeft(60);
    setGameStarted(false);
    setGameOver(false);
    setStreak(0);
    generateQuestion();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Dashboard</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Time</p>
                <p className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-600' : 'text-gray-900'}`}>
                  {timeLeft}s
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Questions</p>
                <p className="text-lg font-bold text-gray-900">{questionCount}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Score</p>
                <p className="text-lg font-bold text-primary">{score}</p>
              </div>
              {streak > 0 && (
                <div className="text-center">
                  <p className="text-sm text-gray-500">Streak</p>
                  <p className="text-lg font-bold text-orange-600">🔥 {streak}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🔢 Math Challenge
          </h1>
          <p className="text-gray-600">
            60 seconds mein jitne zyada questions solve karo!
          </p>
        </div>

        {/* Game Area */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-8 max-w-2xl mx-auto">
          {question && !gameOver && (
            <div>
              {/* Question Display */}
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-gray-900 mb-4">
                  {question.num1} {question.operator} {question.num2} = ?
                </div>
              </div>

              {/* Answer Input */}
              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className={`w-full text-4xl text-center border-4 rounded-xl py-6 px-4 focus:outline-none transition-all ${
                    feedback === 'correct'
                      ? 'border-green-500 bg-green-50'
                      : feedback === 'wrong'
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 focus:border-primary'
                  }`}
                  placeholder="Answer"
                  autoFocus
                  disabled={gameOver}
                />
                
                <button
                  type="submit"
                  className="w-full btn-primary mt-6 text-xl py-4"
                  disabled={!userAnswer || gameOver}
                >
                  Submit ✓
                </button>
              </form>

              {/* Feedback */}
              {feedback && (
                <div className={`text-center mt-6 text-2xl font-bold ${
                  feedback === 'correct' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {feedback === 'correct' ? '✓ Sahi!' : `✗ Galat! Answer: ${question.answer}`}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Game Over Modal */}
        {gameOver && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
              <div className="text-6xl mb-4">
                {score >= 100 ? '🏆' : score >= 50 ? '🎉' : '👍'}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Time Up!
              </h2>
              <p className="text-gray-600 mb-6">
                Aapka final score
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Questions Solved</p>
                  <p className="text-2xl font-bold text-gray-900">{questionCount}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Total Score</p>
                  <p className="text-2xl font-bold text-primary">{score}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={restartGame}
                  className="flex-1 btn-secondary"
                >
                  Play Again
                </button>
                <Link href="/dashboard" className="flex-1 btn-primary text-center">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📖 Kaise Khelen?</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">1️⃣</span>
              <span>Math problem solve karein aur answer type karein</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>Submit button click karein ya Enter press karein</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>Streak maintain karein extra points ke liye</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>60 seconds mein jitne zyada solve kar sako!</span>
            </li>
          </ul>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              💡 <strong>Tip:</strong> Streak maintain karein! Har correct answer pe extra points milte hain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
