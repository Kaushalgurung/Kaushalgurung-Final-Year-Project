import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/home";
import UserList from "./pages/userList/userList";
import User from "./pages/user/user"
import NewUser from "./pages/newUser/newUser";
import ProductList from "./pages/productList/productList"
import Product from "./pages/product/product";
import NewProduct from "./pages/newProduct/newProduct";
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home />}className="link" />
        <Route path="/users" element={<UserList />} className="link"/>
        <Route path="/user/:userId" element={<User />} className="link"/>
        <Route path="/newUser" element={<NewUser />} className="link"/>
        <Route path="/products" element={<ProductList />} className="link"/>
        <Route path="/product/:productId" element={<Product />} className="link"/>
        <Route path="/newproduct" element={<NewProduct />} className="link"/>     
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;