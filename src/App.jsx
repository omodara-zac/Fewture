import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";
import Collections from "./pages/Collections";

import ProductDetails from "./pages/ProductDetails";
import ProductDetails2 from "./pages/ProductDetails2";

import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/privacy" element={<Privacy />} />

                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products2/:id" element={<ProductDetails2 />} />
                <Route path="/collections" element={<Collections />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;