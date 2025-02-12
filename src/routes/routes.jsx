import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
