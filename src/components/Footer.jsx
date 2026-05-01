import React from "react";
import { FaFacebookF, FaInstagram ,FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 pt-10">
        
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo + Description */}
        <div>
          <h2 className="text-xl font-bold">QurbaniHaat</h2>
          <p className="text-sm text-gray-600 mt-3">
            We provide healthy and well-raised cattle from trusted farmers
            across Bangladesh. Our goal is to make your Qurbani easy, reliable,
            and hassle-free.
          </p>
        </div>

        {/* Middle: Links + Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                All Animals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Featured
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-primary text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary text-lg">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <p className="text-sm text-gray-600">Phone: +880 1234-567890</p>
          <p className="text-sm text-gray-600 mt-2">
            Email: support@qurbanihaat.com
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Address: Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} QurbaniHaat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
