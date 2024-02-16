import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Main } from "./Pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
