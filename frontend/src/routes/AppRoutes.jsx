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
import DigitalTwin from "../pages/DigitalTwin";
import Heatmap from "../pages/Heatmap";
import Weather from "../pages/Weather";
import MapLayers from "../pages/MapLayers";
import Timeline from "../pages/Timeline";
import Analytics from "../pages/Analytics";
import NationalKPI from "../pages/NationalKPI";
import SDGDashboard from "../pages/SDGDashboard";
import Leaderboard from "../pages/Leaderboard";
import DisasterPrediction from "../pages/DisasterPrediction";
import FloodRisk from "../pages/FloodRisk";
import HeatwaveRisk from "../pages/HeatwaveRisk";
import CycloneRisk from "../pages/CycloneRisk";
import DroughtRisk from "../pages/DroughtRisk";
import EarthquakeRisk from "../pages/EarthquakeRisk";

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

        <Route
          path="/digital-twin"
          element={
            <ProtectedRoute>
              <DigitalTwin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/heatmap"
          element={
            <ProtectedRoute>
              <Heatmap/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/weather"
          element={
            <ProtectedRoute>
              <Weather/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/map-layers"
          element={
            <ProtectedRoute>
            <MapLayers/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/timeline"
          element={
            <ProtectedRoute>
              <Timeline />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/national-kpi"
          element={
            <ProtectedRoute>
              <NationalKPI />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sdg-dashboard"
          element={
            <ProtectedRoute>
            <SDGDashboard/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
            <Leaderboard/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/disaster"
          element={
            <ProtectedRoute>
            <DisasterPrediction/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/flood-risk"
          element={
            <ProtectedRoute>
            <FloodRisk/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/heatwave-risk"
          element={
            <ProtectedRoute>
            <HeatwaveRisk/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cyclone-risk"
          element={
            <ProtectedRoute>
              <CycloneRisk />
            </ProtectedRoute>
          }
        />

        <Route
          path="/drought-risk"
          element={
            <ProtectedRoute>
            <DroughtRisk/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/earthquake-risk"
          element={
            <ProtectedRoute>
            <EarthquakeRisk/>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}