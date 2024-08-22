import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/flip-words";
import HoverBorderGradient from "./ui/hover-border-gradient";
import DownloadIcon from "@mui/icons-material/Download";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
export function Home() {
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
        className="relative flex flex-col h-svh overflow-hidden justify-between"
      >
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <main>
          <div className="bg-clip-text  text-transparent bg-gradient-to-r from-gray-600 to-white font-salsa flex flex-col gap-6">
            <p className="text-5xl text-center">Hey there!</p>
            <p className="text-8xl text-center">I'm Arjun Gupta.</p>
            <p className="text-5xl text-center bg-clip-text  text-transparent bg-gradient-to-r from-gray-600 to-white">
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
              <a href="./src/components/ui/image.png" download title="Resume">
                <HoverBorderGradient>
                  Resume <DownloadIcon />
                </HoverBorderGradient>
              </a>
              {/* Need to add the resume */}
            </div>
          </div>
        </main>
        <Footer />
        {/* Footer */}
      </motion.div>
    </AuroraBackground>
  );
}
