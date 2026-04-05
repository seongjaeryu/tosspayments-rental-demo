import { Routes, Route } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/SuccessPage";
import FailPage from "./pages/FailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OrderPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/fail" element={<FailPage />} />
    </Routes>
  );
}
