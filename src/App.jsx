import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detay/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
