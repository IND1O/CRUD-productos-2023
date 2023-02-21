import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import TablaProd from "./components/TablaProd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TablaProd />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
