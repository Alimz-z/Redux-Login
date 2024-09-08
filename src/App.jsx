import "./App.css";
import Users from "./components/Users";
import Articles from "./components/Articles";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} /> 
        <Route path="login" element={<Users />} />
        <Route path="articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
