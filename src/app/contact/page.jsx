import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <section className="max-w-4xl mx-auto px-6 py-16">
    
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Have questions or want to plan your next adventure? Send us a message and we'll get back to you!
        </p>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-lg grid gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-black">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-black">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-black">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold text-black  text-lg mb-2">Email</h3>
            <p className="text-gray-600">contact@travelagency.com</p>
          </div>
          <div>
            <h3 className="font-bold text-black  text-lg mb-2">Phone</h3>
            <p className="text-gray-600">+880 1234 567 890</p>
          </div>
          <div>
            <h3 className="font-bold text-black text-lg mb-2">Address</h3>
            <p className="text-gray-600">123 Travel St, Dhaka, Bangladesh</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
