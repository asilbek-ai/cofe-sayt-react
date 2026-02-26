import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Deliver from "./pages/Deliver"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Deliver" element={<Deliver />} />
    </Routes>
  );
}

export default App;