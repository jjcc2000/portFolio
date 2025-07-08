"user client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  created_at: string;
  updated_at: string;
}

export default function Projects() {
  const { projectRepo } = useParams();
  console.log(projectRepo);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/jjcc2000/repos", {
         headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      });
    
       

      const repos = await data.json();

      // If the projectRepo is undefined return;
      if (!projectRepo) return;

      const topic = projectRepo ?? "";

      const filteredRepos = repos.filter((repo: GitHubRepo) =>
        repo.topics?.includes(topic),
      );

      setRepos(filteredRepos);
    }; 

    fetchData();
  }, [projectRepo]);
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectRepo ? (
        repos.map((ele: GitHubRepo) => (
          <div
            key={ele.id}
            className="rounded-lg border border-white/10 bg-white/5 p-4 text-white shadow-md"
          >
            <h3 className="mb-1 text-xl font-semibold text-cyan-300">
              {ele.name}
            </h3>
            <p className="mb-1 text-sm text-gray-400">
              {ele.language || "No language"}
            </p>
            <p className="mb-2 text-sm">
              {(ele.topics ?? ["No topics"]).join(" • ")}
            </p>
            <a
              href={ele.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              View on GitHub
            </a>
          </div>
        ))
      ) : (
        <h1 className="text-center text-white">No topic provided in URL.</h1>
      )}
    </div>
  );
}
