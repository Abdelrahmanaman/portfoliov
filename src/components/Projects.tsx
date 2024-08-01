import { Github, Link as Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    src: "/rentopia.png",
    alt: "rentopia",
    link: "https://rentopia-x.vercel.app/",
    git: "https://github.com/Abdelrahmanaman/rentopia-x",
  },
  {
    src: "/promptopia.png",
    alt: "promptopia",
    link: "https://promptopia-opal-two.vercel.app/",
    git: "https://github.com/Abdelrahmanaman/Promptopia",
  },
  {
    src: "/jobhunt.png",
    alt: "job hunt",
    link: "https://job-hunt-seven.vercel.app/",
    git: "https://github.com/Abdelrahmanaman/job-hunt",
  },
];

export default function Projects() {
  return (
    <section className="my-20 flex flex-col items-center justify-center gap-2 text-white/45">
      <div className="">
        <div className="left-[19px] mx-auto h-[100px] w-[1px] bg-gradient-to-t from-[#019ae9] to-[#000000]"></div>
        <div className="relative flex size-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-purple-500 text-lg font-semibold text-black after:absolute after:inset-0 after:rounded-full after:bg-blue-700 after:blur-xl">
          2
        </div>
      </div>
      <h2 className="bg-gradient-to-b from-purple-500 to-sky-500 bg-clip-text font-dancing-font text-3xl text-transparent">
        Projects
      </h2>
      <div className="skills flex  flex-wrap justify-center gap-4 opacity-5 transition-opacity duration-500">
        {projects.map((project) => (
          <div
            className="flex h-64 w-80 flex-col justify-between rounded-md border border-zinc-700 bg-zinc-950 p-2"
            key={project.alt}
          >
            <Image
              src={project.src}
              alt={project.alt}
              width={400}
              height={400}
              className="rounded-md object-cover"
            />
            <div className="flex items-center justify-between">
              <span className="uppercase text-white">{project.alt}</span>
              <div className="flex items-center gap-2">
                <Link
                  href={project.link}
                  target="_blankF"
                  className="flex items-center gap-1 rounded-md bg-orange-600 p-1 text-base/3 text-white hover:bg-white hover:text-orange-600"
                >
                  Demo
                  <Link2 className="size-5" />
                </Link>
                <Link
                  href={project.git}
                  target="_blankF"
                  className="flex items-center gap-1 rounded-md border border-zinc-600 bg-zinc-950 p-1 text-base/3 text-white hover:bg-white hover:text-black"
                >
                  Github
                  <Github className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
