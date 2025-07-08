"use Client";

import { NavLink } from "react-router-dom";

export default function ProjectDisplayer() {
  return (
    <div className="flex w-full justify-center py-4">
      <ul className="flex space-x-8">
        <NavLink
          to="/blockchainbackend"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-cyan-400 pb-1 text-cyan-400"
              : "text-gray-400 hover:text-white"
          }
        >
          Blockchain & Backend
        </NavLink>
        <NavLink
          to="/reactapps"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-cyan-400 pb-1 text-cyan-400"
              : "text-gray-400 hover:text-white"
          }
        >
          React Apps
        </NavLink>
      </ul>
    </div>
  );
}