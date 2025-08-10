import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage/HomePage";
import PropertyPage from "./pages/PropertyPage/PropertyPage";
import Navbar from "./components/Navbar";
import { GlobalProvider } from "./provider/GlobalProvider";
import Agent from "./pages/Agent/Agent";
import Blog from "./pages/Blog/Blog";
import Join from "./pages/Join/Join";
import About from "./pages/About/About";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const helmetContext = {};
  return (
    <GlobalProvider>
      <HelmetProvider context={helmetContext}>
        <div className="px-4 container mx-auto">
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/property" element={<PropertyPage />} />
              <Route path="/property/:id" element={<PropertyPage />} />
              <Route path="/agent" element={<Agent />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/join" element={<Join />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </HelmetProvider>
    </GlobalProvider>
  );
}

export default App;
