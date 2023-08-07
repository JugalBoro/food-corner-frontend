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
            path="/"
            element={
       
                <Homepage />
             
            }
          />
          <Route
            path="/get-item"
            element={
            
                <ItemPage />

            }
          />
          <Route
            path="/cart"
            element={
            
                <CartPage />
              
            }
          />
          <Route
            path="/bills"
            element={
           
                <BillsPage />
          
            }
          />
          <Route
            path="/customers"
            element={
          
                <CutomerPage />
           
            }
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}



export function ProtectedRoute({ children }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}


export default App;


