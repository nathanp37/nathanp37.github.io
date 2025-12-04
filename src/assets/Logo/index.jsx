import React from "react";

export default function LogoNathan() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-48 h-48"
      >
        <path d="M50 200h20v80H50zM100 180h20v120h-20zM150 160h20v160h-20zM200 180h20v120h-20zM240 200h20v80h-20z" />
        <path d="M300 220c40 0 80-20 120-20 20 0 40 10 40 30s-20 30-40 30c-40 0-80-20-120-20v-20z" />
      </svg>
      <h1 className="text-4xl font-bold">NATHAN</h1>
    </div>
  );
}
