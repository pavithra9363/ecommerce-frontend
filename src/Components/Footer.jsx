
import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand Section */}
        <div>
          <h2 className="text-green-400 text-2xl font-bold">freshgo</h2>
          <p className="mt-2 text-gray-400">
            We provide specialized winterization services to safeguard your pool during the off-season, and when spring arrives, we handle the thorough opening process.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-green-400" aria-label="Facebook" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400" aria-label="Twitter" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400" aria-label="Email" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400" aria-label="Phone" rel="noopener noreferrer">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-green-400 font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-green-400">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-400">Portfolio</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-400">Help & FAQs</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-400">Blog</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-400">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-green-400 font-bold">Contact Us</h3>
          <p className="text-gray-400 mt-2">8502 Preston Rd, Inglewood, Maine 98380</p>
          <p className="text-gray-400">📞 +1 (163) 265-43564</p>
          <p className="text-gray-400">📞 +1 (163) 265-54321</p>
          <p className="text-gray-400">📧 freshgo@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-10">
        Copyright &copy; {new Date().getFullYear()} Frutin. All Rights Reserved.
      </div>
    </footer>
  );
};



export default Footer;
