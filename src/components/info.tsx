"use client";

export default function Info() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1b] px-4 py-12 font-futuristic">
      <div className="flex items-center gap-6">
        <img
          src=""
          alt="Profile Picture"
          className="h-32 w-32 rounded-full border-4 border-b-black object-cover"
        />
        <h1 className="max-w-xl text-lg leading-relaxed">
          Hi my name is Johan, I'm a Web3 engineer who builds at the
          intersection of smart contracts and scalable systems. From crafting
          frontends with React using Tailwdin Css, backends with Nodejs and
          Golang that connect to blockchains and smart Contracts developed with
          Solidity.
        </h1>
      </div>
    </div>
  );
}
