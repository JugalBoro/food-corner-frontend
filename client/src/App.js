import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BillsPage from "./pages/BillsPage";
import CutomerPage from "./pages/CutomerPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="https://food-corner-backend.onrender.com/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="https://food-corner-backend.onrender.com/items"
            element={
              <ProtectedRoute>
                <ItemPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="https://food-corner-backend.onrender.com/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="https://food-corner-backend.onrender.com/bills"
            element={
              <ProtectedRoute>
                <BillsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="https://food-corner-backend.onrender.com/customers"
            element={
              <ProtectedRoute>
                <CutomerPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="https://food-corner-backend.onrender.com/login"
            element={<Login />}
          />
          <Route
            path="https://food-corner-backend.onrender.com/register"
            element={<Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export function ProtectedRoute({ children }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}


export default App;

export function ProtectedRoute({ children }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
