import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import SplashScreen from "./pages/SplashScreen";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CategorySelect from "./pages/CategorySelect";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import AddStory from "./pages/AddStory";
import PublicProfile from "./pages/PublicProfile"; // ✅ Import public profile

import ProtectedRoute from "./components/ProtectedRoute";
import PublicOnlyRoute from "./components/PublicOnlyRoute";
import AccountSettings from "./pages/AccountSettings";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />

        {/* 🆕 Public-only Routes */}
        <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
        <Route path="/signup" element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />

        <Route path="/categories" element={<CategorySelect />} />

        {/* ✅ Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/update-profile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
        <Route path="/add-story" element={<ProtectedRoute><AddStory /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><AccountSettings /></ProtectedRoute>} />

        {/* ✅ New: Public profile route */}
        <Route path="/public-profile/:id" element={<ProtectedRoute><PublicProfile /></ProtectedRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
