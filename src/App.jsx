import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./views/data";
import Hours from "./views/hours";
import Home from "./views/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página principal */}
        <Route path="/data" element={<Data />} /> {/* Ruta para Data */}
        <Route path="/hours" element={<Hours />} /> {/* Ruta para Hours */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
