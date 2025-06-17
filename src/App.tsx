import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { inject } from "@vercel/analytics";

inject({ mode: 'auto' });

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
