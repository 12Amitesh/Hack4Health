import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-4 mt-10 border-t-4 border-teal-400">
      <div className="max-w-4xl mx-auto px-4">
        {/* Tagline and Socials */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-teal-300 mb-1">Health4U</h2>
            <p className="text-teal-100 text-sm max-w-xs mx-auto md:mx-0">Empowering your health journey with trusted care and technology.</p>
          </div>
          <div className="flex justify-center md:justify-end gap-4 mt-2 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-teal-300 transition-colors text-2xl">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-teal-300 transition-colors text-2xl">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-300 transition-colors text-2xl">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-teal-300 transition-colors text-2xl">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37c-.967.967-1.24 2.14-1.298 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.058 1.277.331 2.45 1.298 3.417.967.967 2.14 1.24 3.417 1.298C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.331 3.417-1.298.967-.967 1.24-2.14 1.298-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.331-2.45-1.298-3.417-.967-.967-2.14-1.24-3.417-1.298C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
          </div>
        </div>
        {/* Links and Contact */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4 text-center md:text-left">
          <div className="space-x-4 mb-2 md:mb-0">
            <a href="/about" className="text-teal-300 hover:text-white font-medium transition-colors">About Us</a>
            <a href="/contact" className="text-teal-300 hover:text-white font-medium transition-colors">Contact</a>
            <a href="/privacy" className="text-teal-300 hover:text-white font-medium transition-colors">Privacy Policy</a>
          </div>
          <div className="text-base flex flex-col md:flex-row justify-center md:justify-end items-center gap-2">
            <span className="flex items-center mx-2"><span className="mr-2">📞</span>+1 800-HEALTHY</span>
            <span className="flex items-center mx-2"><span className="mr-2">✉️</span>support@health4u.com</span>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-sm opacity-80 text-center">
          &copy; {new Date().getFullYear()} Health4U. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
