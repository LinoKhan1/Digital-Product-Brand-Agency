/* React */
import React from "react";
/* React Routing */
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

/* Components */
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import NoPage from "./pages/NoPage/NoPage.jsx";
import GetProposal from "./pages/Contact/GetProposal.jsx";
import Apply from "./pages/Contact/ApplyJob.jsx";
import Sell from './pages/Contact/SellProduct.jsx';
import Client from './pages/Contact/PreviousClient.jsx';

/* Styles and CSS */
import './styles/Global/global.scss';
import './pages/Home/Home.scss';
import './components/layout/layout.scss';

function App() {


  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

function MainRoutes() {
  const location = useLocation();
  const hideLayoutContact = location.pathname === '/contact-us';
  const hideLayoutProposal = location.pathname === '/get-proposal';
  const hideLayoutApply = location.pathname === '/apply-job';
  const hideLayoutSell = location.pathname === '/sell-product';
  const hideClient = location.pathname === '/previous-client';

  return (
    <div>
      {!hideLayoutContact && !hideClient && !hideLayoutSell && !hideLayoutApply && !hideLayoutProposal && <Layout />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/get-proposal" element={<GetProposal />} />
        <Route path="/apply-job" element={<Apply />} />
        <Route path="/sell-product" element={<Sell />} />
        <Route path="/previous-client" element={<Client />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;

