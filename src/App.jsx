import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Deliver from "./pages/Deliver"
import Login from "./components/Login";
import Admins from "./pages/Admins";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      <Route path="/Admins" element={<Admins />} />
      <Route path="/Admin/login" element={<Login />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Deliver" element={<Deliver />} />
    </Routes>
  );
}

export default App;