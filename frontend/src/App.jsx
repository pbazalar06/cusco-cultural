import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Mapa from "./views/Mapa.jsx";
import GuiaIA from "./views/GuiaIA.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mapa" element={<Mapa />} />
                <Route path="/guia-ia" element={<GuiaIA />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
