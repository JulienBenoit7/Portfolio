import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";
import ListProjet from "./components/ListProjet";
import ListExperience from "./components/ListExperience";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navbar />} />

        <Route path="/projet" element={<ListProjet />} />
        <Route path="/ListExperience" element={<ListExperience />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </main>
  );
}

export default App;
