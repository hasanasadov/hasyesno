"use client";

import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className=" container flex flex-col items-center justify-center h-screen ">
      <div className={`${isClicked ? "hidden" : "block"}`}>
        Will you be my valentine ?
      </div>
      <div className={`text-center ${isClicked ? "block" : "hidden"}`}>
        I know you will say yes.Meet you tomorrow at 8 p.m. I love you  &lt;3 .
      </div>
      <div
        className={`relative w-full p-4 flex items-center gap-10 justify-center min-h-64
      ${isClicked ? "hidden" : "flex"}
        
        `}
      >
        <button
          onClick={() => {
            setIsClicked(true);
          }}
          className=" bg-green-500 text-white px-4 py-2 rounded"
        >
          YES
        </button>
        <button
          onMouseEnter={(e) => {
            const button = e.target;
            const container = button.parentElement;
            const containerRect = container.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();
            const maxX = containerRect.width - buttonRect.width;
            const maxY = containerRect.height - buttonRect.height;
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            button.style.position = "absolute";
            button.style.left = `${randomX}px`;
            button.style.top = `${randomY}px`;
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          NO
        </button>
      </div>
    </div>
  );
}
