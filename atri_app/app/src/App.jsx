import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/About-us.jsx";
import ContactUs from "./pages/Contact-us.jsx";
import Product from "./pages/Product.jsx";
import Shop from "./pages/Shop.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/about-us" element={<AboutUs />} />
<Route path="/contact-us" element={<ContactUs />} />
<Route path="/product" element={<Product />} />
<Route path="/shop" element={<Shop />} />
    </Routes>
  );
}
