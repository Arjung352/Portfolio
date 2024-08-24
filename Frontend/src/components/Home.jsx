import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/flip-words";
import HoverBorderGradient from "./ui/hover-border-gradient";
import DownloadIcon from "@mui/icons-material/Download";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

export function Home() {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="fixed inset-0 h-svh flex flex-col overflow-hidden justify-between"
        >
          {/* Navbar */}
          <Navbar />
          {/* Main content */}
          <main>
            <div className="bg-clip-text  text-transparent bg-gradient-to-r from-gray-600 to-white font-salsa flex flex-col max-md:gap-3 gap-6">
              <p className="text-5xl text-center max-md:text-3xl">Hey there!</p>
              <p className="text-8xl text-center max-md:text-4xl">
                I'm Arjun Gupta.
              </p>
              <p className="text-5xl text-center bg-clip-text  text-transparent max-md:text-3xl bg-gradient-to-r from-gray-600 to-white">
                <FlipWords
                  words={[
                    "Web-Developer",
                    "JavaScript-Enthusiast",
                    "Problem-Solver",
                    "Tech-Enthusiast",
                  ]}
                />
              </p>
              <div className="flex justify-center">
                <a
                  href="https://drive.google.com/uc?export=download&id=1zLdX3d7j0vsoCDXA7kLQKj2dZRVfxkcU"
                  download
                  title="Resume"
                >
                  <HoverBorderGradient className="max-md:text-base">
                    Resume <DownloadIcon />
                  </HoverBorderGradient>
                </a>
              </div>
            </div>
          </main>
          {/* Footer */}
          <Footer />
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
