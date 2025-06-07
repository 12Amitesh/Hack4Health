export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen p-6 md:p-12 space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-12 opacity-0 animate-fadeInUp animation-delay-200">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-extrabold text-blue-900 drop-shadow-lg">
            Your Health, Our Priority
          </h1>
          <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
            Manage appointments, doctors, and patient records easily with our
            all-in-one healthcare platform designed for your convenience.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1">
            Get Started
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1588776814546-0f4ad3c73d18?auto=format&fit=crop&w=600&q=80"
            alt="Healthcare illustration"
            className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-3 gap-12 text-center opacity-0 animate-fadeInUp animation-delay-400">
        {[
          { number: "10K+", label: "Appointments Booked" },
          { number: "200+", label: "Doctors Available" },
          { number: "99.9%", label: "Patient Satisfaction" },
        ].map(({ number, label }) => (
          <div
            key={label}
            className="bg-white rounded-xl shadow-lg py-8 px-6 hover:shadow-2xl transition-shadow cursor-default"
          >
            <h3 className="text-4xl font-bold text-blue-700 mb-2">{number}</h3>
            <p className="text-gray-600 font-medium">{label}</p>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-12 opacity-0 animate-fadeInUp animation-delay-600">
        <h2 className="text-4xl font-semibold text-center mb-14 text-blue-900 drop-shadow-sm">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: (
                <svg
                  className="w-10 h-10 text-blue-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 17v-6a2 2 0 0 1 2-2h1" />
                  <path d="M14 7h3a2 2 0 0 1 2 2v8" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              ),
              title: "Appointment Scheduling",
              description:
                "Easily book, reschedule, or cancel appointments online with instant confirmation.",
            },
            {
              icon: (
                <svg
                  className="w-10 h-10 text-blue-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              ),
              title: "Doctor Profiles",
              description:
                "View detailed profiles of doctors and specialists including qualifications and patient reviews.",
            },
            {
              icon: (
                <svg
                  className="w-10 h-10 text-blue-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 17v-6a2 2 0 0 1 2-2h1" />
                  <path d="M14 7h3a2 2 0 0 1 2 2v8" />
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
              ),
              title: "Patient Records",
              description:
                "Securely access and update patient medical history from anywhere, anytime.",
            },
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            >
              {icon}
              <h3 className="text-2xl font-semibold mb-3 text-blue-900">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="max-w-7xl mx-auto py-12 opacity-0 animate-fadeInUp animation-delay-800">
        <h2 className="text-4xl font-semibold text-center mb-14 text-blue-900 drop-shadow-sm">
          Meet Our Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              name: "Dr. Sarah Johnson",
              specialty: "Cardiologist",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Dr. Mark Wilson",
              specialty: "Dermatologist",
              img: "https://randomuser.me/api/portraits/men/46.jpg",
            },
            {
              name: "Dr. Priya Patel",
              specialty: "Pediatrician",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "Dr. James Lee",
              specialty: "Orthopedic",
              img: "https://randomuser.me/api/portraits/men/72.jpg",
            },
          ].map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-28 h-28 mx-auto rounded-full mb-5 object-cover border-4 border-blue-200"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-1">{doc.name}</h3>
              <p className="text-blue-600 italic">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto py-16 text-center opacity-0 animate-fadeInUp animation-delay-1000">
        <h2 className="text-4xl font-semibold mb-12 text-blue-900 drop-shadow-sm">
          What Our Patients Say
        </h2>
        <blockquote className="bg-white p-12 rounded-3xl shadow-xl italic text-gray-700 max-w-3xl mx-auto relative">
          <svg
            className="absolute top-4 left-6 w-10 h-10 text-blue-200 opacity-40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.17 6A5 5 0 0 0 2 11v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4a4 4 0 0 1 4-4h2V6zM17.17 6A5 5 0 0 0 12 11v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4a4 4 0 0 1 4-4h2V6z" />
          </svg>
          "The platform made it so easy for me to book appointments and
          access my medical records. Highly recommended!"
          <footer className="mt-8 font-semibold text-blue-900">– Ananya S.</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-16 text-center rounded-3xl max-w-4xl mx-auto shadow-lg opacity-0 animate-fadeInUp animation-delay-1200">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-md">
          Ready to improve your healthcare?
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-lg">
          Sign up today and get started with managing your health the smart way.
        </p>
        <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-md">
          Sign Up Now
        </button>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </main>
  );
}
