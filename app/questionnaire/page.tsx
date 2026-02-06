'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuestionnairePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    goal: '',
    concerns: [] as string[],
    playTime: '',
  });

  const goals = [
    { id: 'memory', label: '🧠 Memory Improve Karni Hai', desc: 'Cheezein yaad rakhna hai better' },
    { id: 'focus', label: '🎯 Focus Badhana Hai', desc: 'Concentration improve karni hai' },
    { id: 'speed', label: '⚡ Mental Speed Badhani Hai', desc: 'Tez sochna hai' },
    { id: 'relax', label: '😌 Mind Ko Relax Karna Hai', desc: 'Stress kam karna hai' },
  ];

  const concerns = [
    '📚 Padhai mein dikkat',
    '💼 Kaam mein concentration ki kami',
    '🤔 Cheezein bhool jaata/jaati hoon',
    '😰 Stress aur anxiety',
    '👴 Aging ke effects',
    '🎮 Bas maze ke liye',
  ];

  const playTimes = [
    { id: '5-10', label: '5-10 minute daily' },
    { id: '10-20', label: '10-20 minute daily' },
    { id: '20-30', label: '20-30 minute daily' },
    { id: 'flexible', label: 'Jab time mile' },
  ];

  const toggleConcern = (concern: string) => {
    setFormData(prev => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter(c => c !== concern)
        : [...prev.concerns, concern]
    }));
  };

  const handleSubmit = async () => {
    if (!formData.goal || !formData.playTime || formData.concerns.length === 0) {
      alert('Please sabhi questions ka answer dein');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        alert('Kuch galat ho gaya. Please try again.');
      }
    } catch (error) {
      alert('Error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-bg py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">Step {step} of 4</span>
            <span className="text-white/80">{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-white rounded-full h-3 transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Aapki Umr Kya Hai?
              </h2>
              <p className="text-gray-600 mb-6">
                Isse hum aapke liye behtar training plan bana sakte hain
              </p>
              <input
                type="number"
                className="input-field text-2xl text-center"
                placeholder="25"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                min="5"
                max="120"
              />
              <button
                onClick={() => setStep(2)}
                disabled={!formData.age}
                className="w-full btn-primary mt-6 disabled:opacity-50"
              >
                Next →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Aapka Main Goal Kya Hai?
              </h2>
              <p className="text-gray-600 mb-6">
                Aap BrainBoost se kya achieve karna chahte hain?
              </p>
              <div className="space-y-4">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setFormData({ ...formData, goal: goal.id })}
                    className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                      formData.goal === goal.id
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="text-xl font-semibold mb-1">{goal.label}</div>
                    <div className="text-gray-600">{goal.desc}</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 btn-secondary"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!formData.goal}
                  className="flex-1 btn-primary disabled:opacity-50"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Aapki Concerns Kya Hain?
              </h2>
              <p className="text-gray-600 mb-6">
                Koi bhi apply hone wale options select karein (multiple select kar sakte hain)
              </p>
              <div className="space-y-3">
                {concerns.map((concern) => (
                  <button
                    key={concern}
                    onClick={() => toggleConcern(concern)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      formData.concerns.includes(concern)
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{concern}</span>
                      {formData.concerns.includes(concern) && (
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 btn-secondary"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  disabled={formData.concerns.length === 0}
                  className="flex-1 btn-primary disabled:opacity-50"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Roz Kitna Time De Sakte Hain?
              </h2>
              <p className="text-gray-600 mb-6">
                Brain training ke liye daily kitna time nikal sakte hain?
              </p>
              <div className="space-y-4">
                {playTimes.map((time) => (
                  <button
                    key={time.id}
                    onClick={() => setFormData({ ...formData, playTime: time.id })}
                    className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                      formData.playTime === time.id
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="text-xl font-semibold">{time.label}</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 btn-secondary"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.playTime || loading}
                  className="flex-1 btn-primary disabled:opacity-50"
                >
                  {loading ? 'Saving...' : 'Start Training 🚀'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
