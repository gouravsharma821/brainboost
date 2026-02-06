'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojis = ['🧠', '🎯', '⚡', '🎨', '🔥', '🌟', '💎', '🎮'];

export default function MemoryMatchGame() {
  const router = useRouter();
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameOver) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const card1 = cards.find(c => c.id === first);
      const card2 = cards.find(c => c.id === second);

      if (card1 && card2 && card1.emoji === card2.emoji) {
        // Match found
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === first || card.id === second
                ? { ...card, isMatched: true }
                : card
            )
          );
          setScore(prev => prev + 10);
          setFlippedCards([]);
          
          // Check if game is over
          const allMatched = cards.every(c => c.isMatched || c.id === first || c.id === second);
          if (allMatched) {
            endGame();
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === first || card.id === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  const initializeGame = () => {
    const gameEmojis = [...emojis, ...emojis];
    const shuffled = gameEmojis
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setScore(0);
    setTime(0);
    setGameOver(false);
  };

  const handleCardClick = (id: number) => {
    if (!gameStarted) setGameStarted(true);
    
    const card = cards.find(c => c.id === id);
    if (!card || card.isFlipped || card.isMatched || flippedCards.length === 2) {
      return;
    }

    setCards(prevCards =>
      prevCards.map(c => (c.id === id ? { ...c, isFlipped: true } : c))
    );
    setFlippedCards(prev => [...prev, id]);
  };

  const endGame = async () => {
    setGameOver(true);
    const finalScore = Math.max(0, 100 - moves + Math.floor(100 / time));
    setScore(finalScore);

    // Save score to backend
    try {
      await fetch('/api/games/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          game: 'memoryMatch',
          score: finalScore,
        }),
      });
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
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
                <p className="text-lg font-bold text-gray-900">{formatTime(time)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Moves</p>
                <p className="text-lg font-bold text-gray-900">{moves}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Score</p>
                <p className="text-lg font-bold text-primary">{score}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🧠 Memory Match
          </h1>
          <p className="text-gray-600">
            Same emojis ko match karen. Kam moves mein jitna better!
          </p>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isMatched || card.isFlipped}
              className={`aspect-square rounded-xl text-5xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
                card.isFlipped || card.isMatched
                  ? 'bg-white shadow-lg'
                  : 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md hover:shadow-xl'
              } ${card.isMatched ? 'opacity-50' : ''}`}
            >
              {card.isFlipped || card.isMatched ? card.emoji : '?'}
            </button>
          ))}
        </div>

        {/* Game Over Modal */}
        {gameOver && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Congratulations!
              </h2>
              <p className="text-gray-600 mb-6">
                Aapne game complete kar liya!
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="text-xl font-bold text-gray-900">{formatTime(time)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Moves</p>
                  <p className="text-xl font-bold text-gray-900">{moves}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Score</p>
                  <p className="text-xl font-bold text-primary">{score}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    initializeGame();
                    setGameStarted(false);
                  }}
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
              <span>Kisi bhi card par click karein usse dekhne ke liye</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>Dusra card select karen aur match karne ki koshish karen</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>Jaldi complete karen kam moves mein zyada score ke liye</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>Sare cards match karne par game khatam ho jayega</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
