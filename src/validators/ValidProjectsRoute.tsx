import { useParams } from "react-router-dom";

import NotFound from "../components/NotFound";
import Projects from "../components/projects";
export default function ValidProjectsRoute() {
  const { projectRepo } = useParams();
  const validProjects = ["blockchainbackend", "reactapp"];

  if (!projectRepo || !validProjects.includes(projectRepo)) {
    return <NotFound />;
  }

  return <Projects />;
}
