import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppLayout from "./Layout/AppLayout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";

axios.defaults.baseURL = "https://urlbackend-psdy.onrender.com/api/";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
