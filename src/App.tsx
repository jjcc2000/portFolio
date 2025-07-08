import "./index.css";


import Info from "./components/info";
import Links from "./components/links";
import ProjectDisplayer from "./components/projectDisplayer";
import Projects from "./components/projects";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Info />
      <Links />
      <ProjectDisplayer />
      <Routes>
        <Route path="/:projectRepo" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
