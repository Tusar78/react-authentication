import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Product from "./Components/Product/Product";
import Register from "./Components/Register/Register";
import UserDetails from "./Components/UserDetails/UserDetails";
import Users from "./Components/Users/Users";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId" element={<UserDetails />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
