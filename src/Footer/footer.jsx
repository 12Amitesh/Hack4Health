import React from 'react'

function footer() {
  return (
  <>
  <footer class="bg-green-100 text-gray-800 mt-10">
  <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <!-- Logo & About -->
    <div>
      <h2 class="text-2xl font-bold text-green-700">HealthCare+</h2>
      <p class="mt-4 text-sm text-gray-600">
        Your trusted partner in health and wellness. Providing quality healthcare solutions for every step of your journey.
      </p>
    </div>

    <!-- Quick Links -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="/" class="hover:text-green-600">Home</a></li>
        <li><a href="/about" class="hover:text-green-600">About Us</a></li>
        <li><a href="/services" class="hover:text-green-600">Services</a></li>
        <li><a href="/contact" class="hover:text-green-600">Contact</a></li>
      </ul>
    </div>

    <!-- Services -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Our Services</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-green-600">Online Consultation</a></li>
        <li><a href="#" class="hover:text-green-600">Health Checkups</a></li>
        <li><a href="#" class="hover:text-green-600">Medical Reports</a></li>
        <li><a href="#" class="hover:text-green-600">Mental Health</a></li>
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
      <p class="text-sm text-gray-600">📍 123 Wellness Street, New Delhi</p>
      <p class="text-sm text-gray-600">📞 +91 98765 43210</p>
      <p class="text-sm text-gray-600">✉️ contact@healthcareplus.com</p>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="border-t border-gray-300 py-4 text-center text-sm text-gray-500">

  </>
  )
}

export default footer