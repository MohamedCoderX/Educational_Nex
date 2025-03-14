import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="fot text-white py-12 px-8 mt-40" style={{ fontFamily: "var(--primary)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left - Contact Info */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4 ">Contact Info</h2>
          <p className="flex items-center gap-3"><FaMapMarkerAlt /> Barid House, 15-19 St Cross St 123, United State Ecin BUW</p>
          <p className="flex items-center gap-3 mt-2"><FaPhoneAlt /> +93 (0)38 3938 393</p>
          <p className="flex items-center gap-3 mt-2"><FaEnvelope /> username@domain.com</p>
        </div>

        {/* Middle - Quick Links */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Quick Links.</h2>
          <div className="grid grid-cols-2 gap-3">
            <p className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer"><AiOutlineCheck /> Home</p>
            <p className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer"><AiOutlineCheck /> Courses</p>
            <p className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer"><AiOutlineCheck /> About-us</p>
            <p className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer"><AiOutlineCheck /> Contact</p>
            <p className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer"><AiOutlineCheck /> Log In</p>
            <p className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer"><AiOutlineCheck /> Sign In/Registration</p>
         
          </div>
        </div>

        {/* Right - Newsletter */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Subscribe Newsletter</h2>
          <p className="text-sm text-gray-300 mb-3">Awesome Hexagon Themed Stream Pack. You Can Change Hexagon</p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded-md text-black bg-white"
          />
          <button className="bg-[#f59e0b] text-white py-2 px-4 rounded-md mt-3 w-full">
            Subscribe Now →
          </button>
          <p className="text-sm mt-2 text-gray-400">Get Updates On New Courses And News</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-center border-t border-gray-700 pt-6">
        <p className="text-gray-400">© 2025 <span className="text-yellow-500">NexiTeach Hub</span> | All Rights Reserved</p>
        
      </div>
    </footer>
  );
};

export default Footer;
