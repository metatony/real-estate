import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage/HomePage";
import PropertyPage from "./pages/PropertyPage/PropertyPage";
import Navbar from "./components/Navbar";
import { GlobalProvider } from "./provider/GlobalProvider";
import Agent from "./pages/Agent/Agent";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <GlobalProvider>
      <div className="px-4 container mx-auto ">
        <BrowserRouter>
          <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/propertyPage" element={<PropertyPage />} />
            <Route path="/propertyPage/:id" element={<PropertyPage />} />
            <Route path="/agent" element = {<Agent/>} />
            <Route path="/blog" element = {<Blog/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
