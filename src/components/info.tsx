"use client";

export default function Info() {
  return (
    <div className="flex justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1b] px-4 py-12 font-futuristic">
      <div className="flex max-w-5xl flex-col items-center gap-6 text-white sm:flex-row sm:items-start">
        <img
          src=""
          alt="Profile Picture"
          className="h-32 w-32 rounded-full border-4 border-b-black object-cover"
        />
        <h1 className="max-w-xl text-center text-base leading-relaxed sm:text-left sm:text-lg sm:leading-relaxed">
          Hi, I'm Johan a FullStack-Web3 engineer building at the intersection
          of <span className="text-indigo-300">smart contracts</span> and
          scalable systems. I craft frontends with{" "}
          <span className="text-sky-300">React</span> and{" "}
          <span className="text-cyan-300">Tailwind</span>, build backends with
          <span className="text-green-300"> Node.js</span> and{" "}
          <span className="text-blue-300">Golang</span>, and deploy apps using{" "}
          <span className="text-purple-300">Docker</span>,{" "}
          <span className="text-teal-300">Kubernetes</span>, and{" "} 
          <span className="text-orange-300">AWS</span>.
        </h1>
      </div>
    </div>
  );
}
