import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login.jsx";
import Desktop from "./pages/Desktop/Desktop.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import Chart from "./chart/Chart.jsx";
import Analytics from "./pages/analytics/Analytics.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import BMRForm from "./pages/EBMR/BMRForm.jsx";
import AdminLogin from "./pages/admin/adminlogin/AdminLogin.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* Admin Components */}
            <Route path="/admin-login" element={<AdminLogin />} />
            {/* User Components */}
            <Route path="/chart" element={<Chart />} />
            <Route path="/" element={<Login />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/desktop" element={<Desktop />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/eBMR" element={<BMRForm />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer autoClose={2000} pauseOnHover={false} />
      </Provider>
    </>
  );
}

export default App;
