import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { AuroraBackground } from "../ui/aurora-background";
import Footer from "./Footer";

function Contact() {
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
        className="relative flex flex-col h-svh justify-between "
      >
        {/* Navbar */}
        <Navbar />
        <section id="contact" className="pb-8 pt-4 ">
          <div className="container mx-auto px-5">
            <h2 className="text-5xl font-salsa  text-center mb-10  bg-clip-text  text-transparent bg-gradient-to-r from-gray-600 to-white">
              Contact Me
            </h2>

            <div className="flex flex-col text-white md:flex-row justify-between items-start md:items-center gap-10">
              {/* Contact Form */}
              <div className=" shadow-md rounded-lg p-8 w-full relative md:w-1/2 shadow-white">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg  "></div>

                <form
                  action="https://formspree.io/f/{your-form-id}" // replace with your Formspree ID
                  method="POST"
                  className="relative z-10"
                >
                  <div className="mb-4">
                    <label
                      className="block text-lg font-semibold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full text-black font-bold  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
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
                      id="email"
                      name="email"
                      className="w-full text-black font-bold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
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
                      id="message"
                      name="message"
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
              </div>

              {/* Contact Information */}
              <div className="relative w-full md:w-1/2">
                {/* Glass effect background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg  "></div>

                {/* Content inside the glass effect */}
                <div className="relative z-10 shadow-md shadow-white rounded-lg p-8">
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

                  {/* Social Media Links */}
                  <div className="flex justify-center md:justify-start mt-8">
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      className="text-blue-700 text-2xl mx-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/yourusername"
                      className="text-gray-800 text-2xl mx-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://twitter.com/yourusername"
                      className="text-blue-400 text-2xl mx-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="mailto:youremail@example.com"
                      className="text-red-600 text-2xl mx-4"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </motion.div>
    </AuroraBackground>
  );
}

export default Contact;
