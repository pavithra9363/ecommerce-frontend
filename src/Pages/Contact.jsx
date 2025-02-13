import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-100 m-5 lg:m-10">
      {/* Left Section - Contact Info and Map */}
      <div className="w-full lg:w-1/2 bg-green-500 text-white p-6 lg:p-10 flex flex-col justify-between rounded-md shadow-lg mb-6 lg:mb-0">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            We'd love to hear from you! Contact us for any inquiries or feedback.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">Address</h4>
              <p>123 Green Lane, Farmville, Earth</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Phone</h4>
              <p>+1 (234) 567-890</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Email</h4>
              <p>support@farmfresh.com</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="p-6 lg:p-10 mt-6 lg:mt-12">
          <iframe
            title="Farm Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093626!2d144.9537353153168!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f5e6e48e7e0!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1638342280935!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-lg shadow-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 lg:p-10 flex items-center justify-center">
        <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Full Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email Address"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
