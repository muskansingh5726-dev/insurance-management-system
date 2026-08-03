import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import Policies from "./pages/Policies";
import AddPolicy from "./pages/AddPolicy";
import Claims from "./pages/Claims";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          {/* Public Routes */}

          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}

          <Route element={<ProtectedRoute />}>

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/customers" element={<Customers />} />
            <Route path="/add-customer" element={<AddCustomer />} />

            <Route path="/policies" element={<Policies />} />
            <Route path="/add-policy" element={<AddPolicy />} />

            <Route path="/claims" element={<Claims />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/profile" element={<Profile />} />

          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;