import Image from "next/image";

const images = [
  {
    src: "/html.svg",
    color: "#FB802B",
    alt: "html",
  },
  {
    src: "/css.svg",
    color: "#2086C4",
    alt: "css",
  },
  {
    src: "/javascript.svg",
    color: "#ECD51D",
    alt: "javascript",
  },
  {
    src: "/typescript.svg",
    color: "#2E79C7",
    alt: "typescript",
  },
  {
    src: "/nodejs.svg",
    color: "#76B835",
    alt: "nodejs",
  },
  {
    src: "/postgres.svg",
    color: "#336791",
    alt: "postgres",
  },
  {
    src: "/mongodb.svg",
    color: "#00AC42",
    alt: "mongodb",
  },
  {
    src: "/prisma.svg",
    color: "#0C344B",
    alt: "prisma",
  },
  {
    src: "/react.svg",
    color: "#01A3E7",
    alt: "react",
  },
  {
    src: "/nextjs.svg",
    color: "#BABBBB",
    alt: "nextjs",
  },
  {
    src: "/tailwind.svg",
    color: "#1DA8BB",
    alt: "tailwind",
  },
  {
    src: "/supbase.svg",
    color: "#3ECD8D",
    alt: "supabase",
  },
];
const platforms = [
  {
    src: "/git.svg",
    color: "#3ECD8D",
    alt: "github",
  },
  {
    src: "/aws.svg",
    color: "#3ECD8D",
    alt: "supabase",
  },
  {
    src: "/ubuntu.svg",
    color: "#3ECD8D",
    alt: "ubuntu",
  },
  {
    src: "/netlify.svg",
    color: "#3ECD8D",
    alt: "netlify",
  },
  {
    src: "/vercel.svg",
    color: "#3ECD8D",
    alt: "vercel",
  },
  {
    src: "/figma.svg",
    color: "#3ECD8D",
    alt: "figma",
  },
  {
    src: "/postman.svg",
    color: "#3ECD8D",
    alt: "postman",
  },
  {
    src: "/framer.svg",
    color: "#3ECD8D",
    alt: "framer",
  },
];
export default function TechStack() {
  return (
    <div className="skills flex max-w-[800px] flex-wrap justify-center gap-4 opacity-5 transition-opacity duration-500">
      {images.map((image) => (
        <div
          key={image.alt}
          className="relative flex w-28 flex-shrink-0 flex-col items-center gap-4 rounded-md border border-zinc-700 bg-zinc-950 pt-4 after:absolute after:top-10 after:-z-10 after:size-10 after:rounded-full after:bg-white after:blur-3xl"
        >
          <Image
            className="rounded-t-md"
            width={50}
            height={50}
            src={image.src}
            alt={image.alt}
          />
          <div className="flex w-full rounded-b-md">
            <span className={`text-gray w-full py-2 text-center uppercase`}>
              {image.alt}
            </span>
          </div>
        </div>
      ))}
      <div className="grid place-content-center gap-2">
        <span className="bg-gradient-to-b from-purple-500 to-sky-500 bg-clip-text text-center font-dancing-font text-3xl text-transparent">
          Tools
        </span>
        <div className="skills f flex max-w-[800px] flex-wrap justify-center gap-4 opacity-5 transition-opacity duration-500">
          {platforms.map((platform) => (
            <div
              key={platform.alt}
              className="relative flex w-28 flex-shrink-0 flex-col items-center gap-4 rounded-md border border-zinc-700 bg-zinc-950 pt-4 after:absolute after:top-10 after:-z-10 after:size-10 after:rounded-full after:bg-white after:blur-3xl"
            >
              <Image
                className="rounded-t-md"
                width={50}
                height={50}
                src={platform.src}
                alt={platform.alt}
              />
              <div className="flex w-full rounded-b-md">
                <span className={`text-gray w-full py-2 text-center uppercase`}>
                  {platform.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
