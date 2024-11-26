import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Logo or Brand Name */}
          <div>
            <h1 className="text-lg font-bold text-white">Monis Foods</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-white transition">
              About
            </Link>
            <Link to="/terms " className="hover:text-white transition">
              Terms and Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/refund" className="hover:text-white transition">
              Refund Policy
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2024 YourBrand. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
