import Doctor from "../assets/Doctor.png"
export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen p-6 md:p-12 space-y-20 opacity-0 animate-fadeInPage">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16 opacity-0 animate-fadeInUp animation-delay-200 rounded-3xl shadow-2xl bg-white">
        <div className="flex-1 space-y-7 px-4 relative z-10">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full shadow mb-2 tracking-wide text-sm animate-fadeInUp animation-delay-300">Trusted by 10,000+ Patients</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 drop-shadow-lg leading-tight">
            <span className="text-blue-900">Your Health,</span> <br />
            <span className="text-blue-800">Our <span className="underline decoration-blue-300 decoration-4">Priority</span></span>
          </h1>
          <div className="w-28 h-1 my-4 bg-blue-200 rounded-full opacity-90"></div>
          <p className="text-gray-700 text-xl max-w-2xl leading-relaxed">
            Manage appointments, doctors, and patient records easily with our
            all-in-one healthcare platform designed for your convenience.
          </p>
          <button className="group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-4 rounded-full shadow-xl hover:from-blue-700 hover:to-teal-600 transition-transform transform hover:-translate-y-1 flex items-center gap-3 text-lg font-semibold">
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
            Get Started
          </button>
        </div>
        <div className="flex-1 px-4 relative z-10 flex justify-center items-center">
          <div className="flex items-center justify-center">
            <img
              src={Doctor}
              alt="Smiling doctor in white coat"
              className="w-72 h-72 object-cover"
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>

      {/* Stats Section */}

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center opacity-0 animate-fadeInUp animation-delay-400">
        {[
          {
            number: "10K+",
            label: "Appointments Booked",
            icon: (
              <svg className="w-10 h-10 mx-auto mb-3 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            ),
            detail: "Seamless online appointment scheduling for patients."
          },
          {
            number: "200+",
            label: "Doctors Available",
            icon: (
              <svg className="w-10 h-10 mx-auto mb-3 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 3-3.87"/></svg>
            ),
            detail: "Expert medical professionals across specialties."
          },
          {
            number: "99.9%",
            label: "Patient Satisfaction",
            icon: (
              <svg className="w-10 h-10 mx-auto mb-3 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></svg>
            ),
            detail: "Our users love the platform and support."
          },
        ].map(({ number, label, icon, detail }) => (
          <div
            key={label}
            className="bg-white rounded-xl shadow-lg py-8 px-6 hover:shadow-2xl transition-shadow cursor-default"
          >
            {icon}
            <h3 className="text-4xl font-bold text-blue-700 mb-2">{number}</h3>
            <p className="text-gray-600 font-medium mb-2">{label}</p>
            <p className="text-gray-400 text-sm">{detail}</p>
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
                <span className="inline-block bg-blue-100 rounded-full p-4 mb-5 animate-bounce-slow">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                </span>
              ),
              title: "Appointment Scheduling",
              description:
                "Easily book, reschedule, or cancel appointments online with instant confirmation.",
              delay: "[0.1s]"
            },
            {
              icon: (
                <span className="inline-block bg-teal-100 rounded-full p-4 mb-5 animate-bounce-slow" style={{animationDelay:'0.2s'}}>
                  <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 3-3.87"/></svg>
                </span>
              ),
              title: "Doctor Profiles",
              description:
                "View detailed profiles of doctors and specialists including qualifications and patient reviews.",
              delay: "[0.2s]"
            },
            {
              icon: (
                <span className="inline-block bg-yellow-100 rounded-full p-4 mb-5 animate-bounce-slow" style={{animationDelay:'0.3s'}}>
                  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 17v-6a2 2 0 0 1 2-2h1"/><path d="M14 7h3a2 2 0 0 1 2 2v8"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
                </span>
              ),
              title: "Patient Records",
              description:
                "Securely access and update patient medical history from anywhere, anytime.",
              delay: "[0.3s]"
            },
          ].map(({ icon, title, description, delay }, idx) => (
            <div
              key={title}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer transform opacity-0 animate-fadeInUp`}
              style={{animationDelay: `${0.2 + idx * 0.15}s`}}
            >
              {icon}
              <h3 className="text-2xl font-semibold mb-3 text-blue-900">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.2s infinite;
          }
        `}</style>
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
          ].map((doc, idx) => (
            <div
              key={doc.name}
              className="relative bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow cursor-pointer transform hover:-translate-y-2 hover:scale-105 duration-300 group opacity-0 animate-fadeInUp"
              style={{animationDelay: `${0.3 + idx * 0.12}s`}}
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-blue-200 via-teal-100 to-white rounded-full blur-2xl opacity-60 z-0"></div>
              <div className="relative z-10">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow-xl"
                />
                <span className="inline-block px-3 py-1 mb-2 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-wide shadow">{doc.specialty}</span>
                <h3 className="text-xl font-semibold text-blue-900 mb-1 mt-2">{doc.name}</h3>
                <div className="mt-3">
                  <p className="text-gray-500 text-sm mb-1"><span className="font-semibold text-blue-700">Experience:</span> {[
                    "12 years",
                    "8 years",
                    "10 years",
                    "15 years"
                  ][idx]}</p>
                  <p className="text-gray-400 text-xs italic">{[
                    "Heart health specialist & patient advocate",
                    "Expert in skin care and dermatological surgery",
                    "Child wellness & preventive care",
                    "Bone & joint care, sports injuries"
                  ][idx]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
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

      
      <style jsx>{`
        @keyframes fadeInPage {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeInPage {
          animation: fadeInPage 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
        }
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
          animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
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
