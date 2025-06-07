import React from 'react';

function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1500&q=80')"
    }}>
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-teal-700/60 to-blue-900/80 animate-pulse-slow"></div>
      {/* Static Overlay for readability */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      {/* Floating Healthcare Icon */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <span className="inline-block text-6xl md:text-7xl text-teal-300 drop-shadow-lg">🩺</span>
      </div>
      {/* Content */}
      <div className="relative z-30 max-w-2xl mx-auto text-center text-white px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-teal-300 drop-shadow-lg animate-fade-in-up">
          Welcome to Health4U
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-teal-100 animate-fade-in-up delay-200">
          Your Trusted Partner in Healthcare
        </h2>
        <p className="mb-8 text-lg md:text-xl text-blue-100 animate-fade-in-up delay-400">
          Health4U connects you with top doctors, provides easy appointment scheduling, and offers personalized health insights—all in one secure platform. Empower your health journey with technology and care you can trust.
        </p>
        <a
          href="/about"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-lg animate-fade-in-up delay-600 hover:shadow-teal-400/60 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
        >
          Learn More
        </a>
      </div>
      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
