import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Idea from "./Pages/Idea";
import Footer from "./components/Footer";

import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/idea" element={<Idea />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
