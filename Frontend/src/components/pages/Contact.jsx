import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { AuroraBackground } from "../ui/aurora-background";
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
      .post("http://localhost:5000/send", formData)
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
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col h-svh justify-between overflow-x-hidden "
      >
        {/* Navbar */}
        <Navbar />
        <section id="contact" className="pb-8 pt-4 ">
          <div className="container mx-auto px-5">
            <h2 className="text-5xl font-salsa max-md:mb-5  max-md:text-4xl text-center mb-10  bg-clip-text  text-transparent bg-gradient-to-r from-gray-600 to-white">
              Contact Me
            </h2>

            <div className="flex flex-col text-white md:flex-row justify-between items-start md:items-center gap-10">
              {/* Contact Form */}
              {/* Contact Information */}
              <div className="relative w-full md:w-1/2">
                {/* Glass effect background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg  "></div>

                {/* Content inside the glass effect */}
                <div className="relative z-10 shadow shadow-white rounded-lg p-8">
                  <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                  <p className="mb-6">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your visions. Reach out to me
                    through the form, or use the contact information below.
                  </p>
                  <ul>
                    <li className="mb-4">
                      <span className="font-semibold">Email:</span>{" "}
                      <a
                        href="mailto:arjung7751@gmail.com"
                        className="text-blue-500 hover:underline"
                      >
                        arjung7751@gmail.com
                      </a>
                    </li>
                    <li className="mb-4">
                      <span className="font-semibold">Phone:</span>{" "}
                      <a
                        href="tel:+91 9999882574"
                        className="text-blue-500 hover:underline"
                      >
                        +91 999 988 2574
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">Location:</span> Delhi,
                      India
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" shadow rounded-lg p-8 w-full relative md:w-1/2 shadow-white">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg  "></div>

                <form className="relative z-10" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-lg font-semibold mb-2"
                      htmlFor="name"
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
                      className="w-full text-black font-bold  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-lg font-semibold mb-2"
                      htmlFor="email"
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
                      className="block text-lg font-semibold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full text-black font-bold  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
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
        </section>
        <Footer />
        <ToastContainer />
      </motion.div>
    </AuroraBackground>
  );
}

export default Contact;
