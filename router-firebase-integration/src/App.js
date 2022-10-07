import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import SignIn from "./Components/SignIn/SignIn";
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
        <Route
          path="/user/:userId"
          element={
            <RequireAuth>
              <UserDetails />
            </RequireAuth>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
