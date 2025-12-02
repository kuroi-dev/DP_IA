
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
//import Dashboard from "./pages/Dashboard/Dashboard";
//import NotFound from "./pages/Error/NotFound";
//import Forbidden from "./pages/Error/Forbidden";
//import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> 
        <Route path="/403" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
