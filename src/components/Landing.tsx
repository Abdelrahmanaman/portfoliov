import { Atom, Contact, Droplet } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="mt-20 flex flex-col items-center gap-10 text-white/90">
      <h1 className="flex flex-wrap justify-center gap-4 text-center text-7xl font-extrabold md:text-8xl">
        <span className="relative inline-block text-center after:absolute after:inset-0 after:content-['Create.']">
          <span className="animate-contact after: relative z-20 bg-gradient-to-r from-[#007cf0] to-[#00dfd8] bg-clip-text text-transparent opacity-0 after:absolute after:inset-0 after:top-14 after:-z-10 after:h-[20px] after:bg-gradient-to-r after:from-[#007cf0] after:to-[#00dfd8] after:p-1 after:blur-2xl">
            Create.
          </span>
        </span>{" "}
        <span className="after: relative -z-20 inline-block text-center after:absolute after:inset-0 after:text-gray-300 after:content-['Build.']">
          <span className="animate-build after: relative z-20 bg-gradient-to-r from-[#7928ca] to-[#ff0080] bg-clip-text text-transparent opacity-0 after:absolute after:inset-0 after:top-14 after:-z-10 after:h-[20px] after:bg-gradient-to-r after:from-purple-800 after:to-pink-400 after:p-1 after:blur-2xl">
            Build.
          </span>
        </span>{" "}
        <span className="relative inline-block after:absolute after:inset-0 after:text-white/90 after:content-['Deliver.']">
          <span className="animate-deliver after: relative z-20 bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] bg-clip-text text-transparent opacity-0 after:absolute after:inset-0 after:top-14 after:-z-10 after:h-[20px] after:bg-gradient-to-r after:from-red-800 after:to-orange-400 after:p-1 after:blur-2xl">
            Deliver.
          </span>
        </span>{" "}
      </h1>
      <p className="w-[90%] text-justify text-sm text-white/65 sm:w-[70%] md:line-clamp-3 md:w-[60%] md:text-center md:text-xl lg:w-[50%]">
        Hi, I am Abdelrahman, an experienced web developer passionate about
        bringing ideas to life. I thrive on creatying seamless, user-friendly
        and most importantly accessible websites.
      </p>
      <div className="flex flex-wrap justify-center gap-16 md:gap-4">
        <div className="relative">
          <Link
            href={"#projects"}
            className="group flex w-48 max-w-48 items-center justify-center gap-2 rounded-md bg-white py-3 font-semibold text-black"
          >
            <Atom className="size-5 transition-all duration-300 group-hover:rotate-180" />{" "}
            Projects
          </Link>
          <div className="absolute -bottom-[9px] right-2 h-0 w-0 border-x-[10px] border-t-[10px] border-white border-x-transparent"></div>
          <div className="absolute -bottom-[9px] left-[6px] h-0 w-0 border-x-[10px] border-t-[10px] border-white border-x-transparent"></div>
          <div className="absolute -bottom-[9px] right-9 h-0 w-0 border-x-[10px] border-t-[10px] border-white border-x-transparent"></div>

          <div className="absolute -bottom-[45px] right-[14px] h-10 w-[6px] rounded-b bg-white">
            <Droplet className="animate-drop absolute -left-[3px] bottom-1 size-3 fill-white" />
          </div>
          <div className="b absolute -bottom-[29px] left-[13px] h-6 w-[6px] rounded-b bg-white">
            <Droplet className="animate-drop2 absolute -left-[3px] bottom-1 size-3 fill-white" />
          </div>
          <div className="b absolute -bottom-[21px] left-[143px] h-4 w-2 rounded-b bg-white">
            <Droplet className="animate-drop3 absolute -left-[3px] bottom-1 size-3 fill-white" />
          </div>
        </div>
        <div>
          <Link
            href={"#contact"}
            className=" relative flex w-48 max-w-48 items-center justify-center gap-2 rounded bg-black py-3 font-semibold shadow-sm shadow-black transition-all duration-200 before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-r before:from-green-500 before:to-teal-400 before:content-[''] after:absolute after:inset-0 after:-z-10 after:h-20 after:w-48 after:rounded-md after:bg-gradient-to-r after:from-green-600 after:via-teal-600 after:text-transparent after:blur-[100px] after:content-[''] hover:border-0 hover:bg-transparent hover:text-black hover:opacity-100"
          >
            <Contact className="size-5" />
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
