import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Deliver from "./pages/Deliver"
import Login from "./components/Login";
import Admins from "./pages/Admins";
import ErorPage from "./components/help/ErorPage";
import Xatolik from "./components/help/xatolik";
function App() {
  return (
    <Routes>
            <Route path="/" element={<ErorPage />} />
      <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      <Route path="/admins" element={<Admins />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/deliver" element={<Deliver />} />
      <Route path="/*" element={<Xatolik />} />

    </Routes>
  );
}

export default App;