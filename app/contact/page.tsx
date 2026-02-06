'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    email: '',
    mobile: '',
    firstName: '',
    lastName: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.mobile) {
      alert('Email and Mobile Number are required');
      return;
    }

    setLoading(true);

    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setShowPopup(true);

    setForm({
      email: '',
      mobile: '',
      firstName: '',
      lastName: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-24 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT INFO */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-10">
          <h2 className="text-4xl font-extrabold mb-4">
            Let’s Talk 👋
          </h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            Have a question, idea, or business inquiry?  
            Fill out the form and our team will get back to you shortly.
          </p>

          <ul className="space-y-4 text-sm">
            <li>📧 support@mindcare.com</li>
            <li>📞 +91 98765 43210</li>
            <li>📍 Ambala, Haryana, India</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Contact Form
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* MOBILE */}
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              value={form.mobile}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* NAME ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition"
            >
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-2xl">
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Inquiry Submitted ✅
            </h2>
            <p className="text-gray-700 mb-4">
              Thank you! We have received your inquiry and will contact you soon.
            </p>

            <div className="text-sm text-gray-600 mb-6">
              <p><strong>Email:</strong> {form.email || 'Provided'}</p>
              <p><strong>Mobile:</strong> {form.mobile || 'Provided'}</p>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="px-8 py-2 bg-blue-600 text-white rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}