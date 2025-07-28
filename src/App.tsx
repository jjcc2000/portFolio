import { Navigate, Route, Routes } from "react-router-dom";

import "./index.css";
import ValidProjectsRoute from "./validators/ValidProjectsRoute";
import NotFound from "./components/NotFound";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="blockchainbackend" />} />
          <Route path=":projectRepo" element={<ValidProjectsRoute />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
