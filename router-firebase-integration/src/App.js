import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Posts from "./Components/Posts/Posts";
import Footer from "./Components/ShareComponent/Card/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";
import Users from "./Components/Users/Users";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users" element={<Posts />} />
        <Route path="/users" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
