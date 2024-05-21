import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import GetProposal from "./pages/Contact/GetProposal";
import Apply from "./pages/Contact/ApplyJob";
import Sell from './pages/Contact/SellProduct';
import Client from './pages/Contact/PreviousClient';
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
  const hideLayoutContact = location.pathname === '/contact';
  const hideLayoutProposal = location.pathname === '/get_proposal';
  const hideLayoutApply = location.pathname === '/apply';
  const hideLayoutSell = location.pathname === '/sell';
  const hideClient = location.pathname === '/client';

  return (
    <div>
      {!hideLayoutContact && !hideClient && !hideLayoutSell && !hideLayoutApply  && !hideLayoutProposal && <Layout />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get_proposal" element={<GetProposal/>}/>
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/sell" element={<Sell/>}/>
        <Route path="/client" element={<Client/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
