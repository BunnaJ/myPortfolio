// pages/contact.js

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Intouch() {
  return (
    <div className="md:pt-32 pt-20">
      <h1 className="md:text-4xl text-xl font-bold text-center mb-6 text-gray-800">Get in Touch</h1>
      <p className="text-center text-gray-600 max-w-lg mx-auto mb-8 ">
      I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.
      </p>

      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 mb-4 md:mb-0 bg-[var(--light-gray)]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-[var(--light-gray)]"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-[var(--light-gray)]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white bg-black hover:bg-gray-800 py-3 px-6 rounded-lg font-semibold  transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="border mt-20 hidden md:block border-b-emerald-300"></div>

    </div>
  );
}
