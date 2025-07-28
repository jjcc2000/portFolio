"user client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  url: string;
  description: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  created_at: string;
  updated_at: string;
  owner: {
    login: string;
  };
}

export default function Projects() {
  const { projectRepo } = useParams();
  console.log(projectRepo);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  //? //! GRAPHQL API BASE REQUEST
  //   useEffect(() => {
  //   if (!projectRepo) {
  //     console.log("⛔ No projectRepo in URL");
  //     return;
  //   }

  //   const query = `
  //     query {
  //       viewer {
  //         repositories(first: 100, affiliations: OWNER, ownerAffiliations: OWNER) {
  //           nodes {
  //             id
  //             name
  //             url
  //             description
  //             primaryLanguage {
  //               name
  //             }
  //             repositoryTopics(first: 10) {
  //               nodes {
  //                 topic {
  //                   name
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `;

  //   const fetchGraphQLRepos = async () => {
  //     try {
  //       const res = await fetch("https://api.github.com/graphql", {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ query }),
  //       });

  //       const data = await res.json();
  //       const repos = data.data.viewer.repositories.nodes;

  //       const enrichedRepos: GitHubRepo[] = repos.map((repo: any) => ({
  //         id: repo.id,
  //         name: repo.name,
  //         url: repo.url,
  //         description: repo.description,
  //         language: repo.primaryLanguage?.name ?? "Unknown",
  //         topics: repo.repositoryTopics?.nodes.map((n: any) => n.topic.name) ?? [],
  //       }));

  //       const filteredRepos = enrichedRepos.filter((repo) =>
  //         repo.topics.some(
  //           (t: string) => t.toLowerCase() === projectRepo.toLowerCase()
  //         )
  //       );

  //       console.log("✅ Matching repos:", filteredRepos.map(r => r.name));
  //       setRepos(filteredRepos);
  //     } catch (error) {
  //       console.error("❌ Error fetching repos via GraphQL:", error);
  //     }
  //   };

  //   fetchGraphQLRepos();
  // }, [projectRepo]);

  //! REST API BASE REQUEST
  useEffect(() => {
    const fetchReposWithTopics = async () => {
      if (!projectRepo) {
        console.log("⛔ No projectRepo in URL");
        return;
      }

      try {
        // Step 1: Fetch repositories
        const response = await fetch(
          "https://api.github.com/user/repos?per_page=100&affiliation=owner",
          {
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          },
        );

        const repos = await response.json();

        // Step 2: Enrich each repo with its topics
        const enrichedRepos = await Promise.all(
          repos.map(async (repo: GitHubRepo) => {
            try {
              const topicRes = await fetch(
                `https://api.github.com/repos/${repo.owner.login}/${repo.name}/topics`,
                {
                  headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                  },
                },
              );

              const topicData = await topicRes.json();
              return {
                ...repo,
                topics: topicData.names ?? [],
              };
            } catch (err) {
              console.warn(`Failed to fetch topics for ${repo.name}`, err);
              return { ...repo, topics: [] };
            }
          }),
        );
        console.log(enrichedRepos);

        // Step 3: Filter based on projectRepo
        const filteredRepos = enrichedRepos.filter((repo) =>
          (repo.topics ?? []).some(
            (t: string) => t.toLowerCase() === projectRepo.toLowerCase(),
          ),
        );
        setRepos(filteredRepos);
        console.log(repos);
      } catch (err) {
        console.error("❌ Error fetching repos via REST", err);
      }
    };

    fetchReposWithTopics();
    console.log(repos);
  }, [projectRepo]);

  return (
    <div className="w-full overflow-x-auto px-4 py-6 lg:pl-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex w-max justify-center gap-4">
          {projectRepo?.length ? (
            repos.map((ele: GitHubRepo) => (
              <div
                key={ele.id}
                className="min-w-[90vw] max-w-[22vw] flex-shrink-0 rounded-lg border border-white/10 bg-white/5 p-4 text-white shadow-md sm:min-w-[45vw] lg:min-w-[22vw]"
              >
                <h3 className="mb-1 text-xl text-cyan-300">{ele.name}</h3>

                {/* Description goes here */}
                <p className="mb-2 text-sm text-gray-300">
                  {ele.description || "No description available."}
                </p>

                <p className="mb-1 text-sm text-gray-400">
                  {ele.language || "No language"}
                </p>

                <a
                  href={ele.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View on GitHub
                </a>
              </div>
            ))
          ) : (
            <h1 className="text-yellow text-center">Error on the fecth.</h1>
          )}
        </div>
      </div>
    </div>
  );
}
