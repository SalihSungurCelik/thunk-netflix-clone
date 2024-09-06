import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { useState } from "react";

const App = () => {
  const [showBar, setShowBar] = useState(true);
  return (
    <BrowserRouter>
      <Header setShowBar={setShowBar} showBar={showBar} />
      <Routes>
        <Route path="/" element={<MainPage setShowBar={setShowBar} />} />
        <Route path="/detay/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
