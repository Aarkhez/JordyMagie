import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
      <SpeedInsights />
    </div>
  );
}
export default App;
