import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignUp from "./SignUp";
import Table from "./Table";
import View from "./View";
import Edit from "./Edit";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full">
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        <div className="bg-[url('./assets/1.jpg')] min-h-screen  bg-cover bg-center bg-fixed z-0">
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<SignUp/>} />
              <Route path="/table" element={<Table/>} />
              <Route path="/view" element={<View/>} />
              <Route path="/edit" element={<Edit/>} />
              <Route path="/signUp" element={<SignUp/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
