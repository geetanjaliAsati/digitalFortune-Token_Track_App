import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
// import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/compare" element={<ComparePage />} />
          <Route path="/coin" element={<CoinPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
