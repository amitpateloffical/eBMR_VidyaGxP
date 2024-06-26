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
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard.jsx";
import Wrapper from "./pages/admin/Wrapper.jsx";
import AddNewUser from "./pages/admin/addUser/addUser.jsx";
import DuplicateUser from "./pages/admin/DuplicateUser/DuplicateUser.jsx";
import EditUser from "./pages/admin/EditUser/EditUser.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* User Components */}
            <Route path="/" element={<Login />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/desktop" element={<Desktop />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/eBMR" element={<BMRForm />} />

            {/* Admin Components */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="" element={<Wrapper />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin-add-user" element={<AddNewUser />} />
              <Route path="/admin-edit-user" element={<EditUser />} />
              <Route path="/duplicate-user" element={<DuplicateUser />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer autoClose={2000} pauseOnHover={false} />
      </Provider>
    </>
  );
}

export default App;
