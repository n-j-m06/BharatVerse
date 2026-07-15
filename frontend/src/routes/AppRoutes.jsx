import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";
import Chat from "../pages/Chat";
import Simulation from "../pages/Simulation";
import ClimateAgent from "../pages/ClimateAgent";
import TrafficAgent from "../pages/TrafficAgent";
import EconomyAgent from "../pages/EconomyAgent";
import EnergyAgent from "../pages/EnergyAgent";
import AIRecommendation from "../pages/AIRecommendation";
import AIEngine from "../pages/AIEngine";
import AIAgentStatus from "../pages/AIAgentStatus";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
            path="/chat"
            element={
                <ProtectedRoute>
                    <Chat />
                </ProtectedRoute>
            }
        />

        <Route
          path="/simulation"
          element={
            <ProtectedRoute>
              <Simulation />
            </ProtectedRoute>
          }
        />

        <Route
            path="/climate"
            element={
                <ProtectedRoute>
                    <ClimateAgent />
                </ProtectedRoute>
            }
        />

        <Route
            path="/traffic"
            element={
                <ProtectedRoute>
                    <TrafficAgent />
                </ProtectedRoute>
            }
        />

        <Route
          path="/economy"
          element={
            <ProtectedRoute>
              <EconomyAgent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/energy"
          element={
            <ProtectedRoute>
              <EnergyAgent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recommendations"
          element={
            <ProtectedRoute>
              <AIRecommendation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/engine"
          element={
            <ProtectedRoute>
              <AIEngine />
            </ProtectedRoute>
          }
        />

        <Route
          path="/agent-status"
          element={
            <ProtectedRoute>
              <AIAgentStatus />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}