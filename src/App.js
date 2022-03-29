import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HeroPage from "./pages/HeroPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
