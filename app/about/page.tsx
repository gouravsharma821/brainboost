'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About BrainBoost
          </h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            BrainBoost is a modern learning and growth platform designed to
            help individuals improve focus, skills, and productivity.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              BrainBoost is built with the vision of empowering learners,
              professionals, and students through smart tools and
              engaging experiences. We believe learning should be simple,
              effective, and accessible to everyone.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform focuses on performance, clarity, and growth —
              helping you unlock your true potential.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Improve focus & mental clarity</li>
              <li>✅ Enable continuous learning</li>
              <li>✅ Build productivity-driven tools</li>
              <li>✅ Support personal & professional growth</li>
            </ul>
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 mt-1">Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-600 mt-1">Learning Modules</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-600 mt-1">Satisfaction Rate</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600 mt-1">Support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Ready to Boost Your Brain?
        </h2>
        <p className="text-gray-600 mb-6">
          Join BrainBoost today and start your journey towards better focus
          and productivity.
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

    </div>
  );
}