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
import NewPharmacy from "./pages/newPharmacy/newPharmacy"
import Pharmacy from "./pages/pharmacy/pharmacy";
import PharmacyList from "./pages/pharmacyList/pharmacyList";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const admin = true;
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
        <Route path="/newpharmacy" element={<NewPharmacy />} className="link"/>
        <Route path="/pharmacy/:pharmacyId" element={<Pharmacy />} className="link"/>
        <Route path="/pharmacys" element={<PharmacyList />} className="link"/>      
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;