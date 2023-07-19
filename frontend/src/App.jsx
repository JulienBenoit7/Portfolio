import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import ListProjet from "./components/ListProjet";
import ListExperience from "./components/ListExperience";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projet"
          element={
            <>
              <Navbar />
              <ListProjet />
            </>
          }
        />
        <Route path="/ListExperience" element={<ListExperience />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </main>
  );
}

export default App;
