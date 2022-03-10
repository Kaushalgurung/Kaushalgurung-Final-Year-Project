import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Success from "./pages/Success";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";

const App = () => {
  const user =  useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/products/:catagory" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
        </Routes> 
    </BrowserRouter>
  );
};

export default App;