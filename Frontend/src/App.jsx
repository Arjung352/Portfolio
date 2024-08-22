import { Home } from "./components/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="relative min-h-screen">
      <BrowserRouter>
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
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
};

export default App;
