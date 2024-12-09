import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://portfolio-api-sigma-umber.vercel.app/send", formData)
      .then((response) => {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message Sent Successfully!");
      })
      .catch((error) => {
        setStatus("Failed to send message.");
        toast.error("Failed to send message.");
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col h-svh justify-between overflow-x-hidden"
    >
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Contact Section */}
        <main id="projects" className="flex-grow flex items-center pt-3">
          <div className="px-5">
            <h2 className="text-5xl font-salsa max-md:mb-5 max-md:text-4xl text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-white">
              Contact Me
            </h2>

            <div className="flex flex-col text-white md:flex-row justify-between items-start md:items-center gap-10">
              {/* Contact Information */}
              <div className="relative w-full md:w-1/2">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg"></div>
                <div className="relative z-10 shadow shadow-white rounded-lg p-8">
                  <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                  <p className="mb-6">
                    I'm always excited to collaborate on innovative projects,
                    explore creative ideas, and contribute to meaningful
                    visions. Feel free to reach out via the contact form or
                    through the information provided below. Let’s bring ideas to
                    life together!
                  </p>
                  <ul>
                    <li className="mb-4">
                      <span className="font-semibold">Email:</span>{" "}
                      <a
                        href="mailto:arjung7751@gmail.com"
                        className="text-blue-500 hover:underline"
                      >
                        Arjung.dev29@gmail.com
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">Location:</span> Delhi,
                      India
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="relative shadow rounded-lg p-8 w-full md:w-1/2 shadow-white mb-8">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg"></div>
                <form className="relative z-10" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full text-black font-bold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full text-black font-bold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-lg font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      required
                      className="w-full text-black font-bold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <p>{status}</p>
              </div>
            </div>
          </div>
        </main>
        <ToastContainer />
        <div>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
