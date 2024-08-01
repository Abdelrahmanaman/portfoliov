import React from "react";
import TechStack from "./TechStack";

export default function Skills() {
  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-2 text-white/45 ">
      <h1 className="text-sm font-light uppercase tracking-[4px]">
        Explore my skills
      </h1>
      <div className="">
        <div className="left-[19px] mx-auto h-[100px] w-[1px] bg-gradient-to-t from-[#019ae9] to-[#000000]"></div>
        <div className="relative flex size-10 items-center justify-center rounded-full bg-gradient-to-b from-purple-500 to-sky-500 text-lg font-semibold text-black after:absolute after:inset-0 after:rounded-full after:bg-blue-700 after:blur-xl">
          1
        </div>
      </div>
      <span className="font-dancing-font bg-gradient-to-b from-purple-500 to-sky-500 bg-clip-text text-3xl text-transparent">
        My skills
      </span>
      <div>
        <TechStack />
      </div>
    </section>
  );
}
