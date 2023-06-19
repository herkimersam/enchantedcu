import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  LoadingMessage,
  ErrorPage,
  EnchantedMap,
  About,
  Data,
} from "./components/";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<LoadingMessage />}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/map" element={<EnchantedMap />} />
          <Route path="/map.html" element={<EnchantedMap />} />
          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/data" element={<Data />} />
          <Route path="/data.html" element={<Data />} />
          <Route element={<ErrorPage />} />
          <Route />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
