import { lazy, Suspense } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

// Lazy load the components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/pages/About"));
const Project = lazy(() => import("./components/pages/Project"));
const Contact = lazy(() => import("./components/pages/Contact"));

const App = () => {
  return (
    <div className="relative min-h-screen">
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
