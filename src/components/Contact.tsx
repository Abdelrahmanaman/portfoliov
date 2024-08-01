import React from "react";

export default function Contact() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <div className="">
        <div className="left-[19px] mx-auto h-[100px] w-[1px] bg-gradient-to-t from-[#019ae9] to-[#000000]"></div>
        <div className="relative flex size-10 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-sky-500 text-lg font-semibold text-black after:absolute after:inset-0 after:rounded-full after:bg-blue-700 after:blur-xl">
          3
        </div>
      </div>
      <h2 className="bg-gradient-to-b from-purple-500 to-sky-500 bg-clip-text font-dancing-font text-3xl text-transparent">
        Contact me
      </h2>
      <form className="flex max-w-[800px] flex-col gap-4">
        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="w-96 rounded p-2 outline-sky-700"
            type="email"
            name="email"
            id="email"
            placeholder="example@ex.com"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="subject">
            Subject
          </label>
          <input
            className="w-96 rounded p-2 outline-sky-400"
            type="text"
            name="subject"
            id="subject"
            placeholder="subject"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            placeholder="message"
            className="h-44 w-96 resize-none rounded p-2 outline-sky-400"
            name="message"
            id="message"
            required
          />
        </div>
        <button className="w-44 rounded-md border border-zinc-700 bg-black p-2 text-white hover:bg-white hover:text-zinc-700">
          Submit
        </button>
      </form>
    </div>
  );
}
