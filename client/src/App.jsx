import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/about";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import Products from "./pages/Products";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/products" element={<Products/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App