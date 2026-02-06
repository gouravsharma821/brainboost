'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  name: string;
  email: string;
  gameProgress: {
    memoryMatch: { score: number; played: number };
    mathChallenge: { score: number; played: number };
    colorMatch: { score: number; played: number };
    speedClick: { score: number; played: number };
  };
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/user');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        router.push('/login');
      }
    } catch (error) {
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    document.cookie = 'auth-token=; Max-Age=0; path=/;';
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const games = [
    {
      id: 'memory-match',
      name: 'Memory Match',
      icon: '🧠',
      color: 'from-yellow-400 to-orange-500',
      description: 'Cards ko yaad rakhen aur match karen',
      skill: 'Memory',
      progress: user.gameProgress.memoryMatch,
    },
    {
      id: 'math-challenge',
      name: 'Math Challenge',
      icon: '🔢',
      color: 'from-green-400 to-blue-500',
      description: 'Tezi se math problems solve karen',
      skill: 'Math & Speed',
      progress: user.gameProgress.mathChallenge,
    },
    {
      id: 'color-match',
      name: 'Color Match',
      icon: '🎨',
      color: 'from-pink-400 to-purple-500',
      description: 'Sahi color aur word ka match karen',
      skill: 'Attention',
      progress: user.gameProgress.colorMatch,
    },
    {
      id: 'speed-click',
      name: 'Speed Click',
      icon: '⚡',
      color: 'from-blue-400 to-indigo-500',
      description: 'Jaldi se target ko click karen',
      skill: 'Reaction Time',
      progress: user.gameProgress.speedClick,
    },
  ];

  const totalGames = Object.values(user.gameProgress).reduce((sum, game) => sum + game.played, 0);
  const avgScore = totalGames > 0 
    ? Math.round(Object.values(user.gameProgress).reduce((sum, game) => sum + game.score, 0) / totalGames)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BrainBoost
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <div className="text-sm text-gray-500">Welcome back,</div>
                <div className="font-semibold text-gray-900">{user.name}</div>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Total Games Played</p>
                <p className="text-3xl font-bold text-gray-900">{totalGames}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Average Score</p>
                <p className="text-3xl font-bold text-gray-900">{avgScore}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Today's Streak</p>
                <p className="text-3xl font-bold text-gray-900">🔥 3</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎮 Apne Games Khelen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/games/${game.id}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${game.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${game.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                        {game.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {game.name}
                        </h3>
                        <p className="text-sm text-gray-600">{game.description}</p>
                      </div>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Skill</p>
                      <p className="font-semibold text-gray-900">{game.skill}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Best Score</p>
                      <p className="font-semibold text-gray-900">{game.progress.score || 0}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Times Played</p>
                      <p className="font-semibold text-gray-900">{game.progress.played}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">🎯 Aaj Ka Challenge</h3>
              <p className="text-white/90 mb-4">
                3 different games khelo aur 50+ points score karo
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-white/20 rounded-full h-3">
                  <div className="bg-white rounded-full h-3 w-1/3"></div>
                </div>
                <span className="text-sm">1/3 completed</span>
              </div>
            </div>
            <div className="text-6xl">🏆</div>
          </div>
        </div>
      </div>
    </div>
  );
}
