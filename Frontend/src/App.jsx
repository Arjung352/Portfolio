import { lazy, Suspense, useEffect, useRef, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import * as THREE from "three"; // Required for Vanta.js
import FOG from "vanta/dist/vanta.fog.min"; // Import the Vanta.js Fog effect

// Lazy load the components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/pages/About"));
const Project = lazy(() => import("./components/pages/Project"));
const Contact = lazy(() => import("./components/pages/Contact"));

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  // Initialize Vanta.js on mount and clean it up on unmount
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE, // Required for Vanta
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x797979,
          midtoneColor: 0x37206f,
          lowlightColor: 0x6f31b1,
          baseColor: 0x0,
          blurFactor: 0.33,
          speed: 2,
          zoom: 3,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef} // Attach the Vanta.js effect to this div
      className="relative min-h-svh max-h-svh"
    >
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="w-full bg-black h-screen flex justify-center items-center">
              <TailSpin
                height="80"
                width="80"
                color="#3f66dd"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div className="h-screen flex justify-center items-center bg-black">
                  <h1 className="text-6xl font-salsa text-white">
                    404 Not Found
                  </h1>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
