import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

// Technology component
interface TechnologyProps {
  name: string;
  description: string;
  documentation: string;
}

const Technology: React.FC<TechnologyProps> = (props) => {
  return (
    <>
      <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
        <h2 className="text-lg text-gray-700">{props.name}</h2>
        <p className="text-sm text-gray-600">{props.description}</p>
        <a
          className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
          href={props.documentation}
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>
      </div>
    </>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen min-h-screen flex flex-col justify-center items-center p-4 overflow-y-scroll">
        <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h2>
        <p className="text-2xl text-gray-700">This stack uses</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-rows-2 md:grid-rows-2 justify-center items-center lg:grid-cols-2 md:grid-cols-2 gap-3 mt-3 pt-3 w-full lg:w-2/3 md:w-full">
          <Technology
            name={"NextJS"}
            description={"The React framework for production"}
            documentation={"https://nextjs.org/"}
          />
          <Technology
            name={"TypeScript"}
            description={
              "Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            }
            documentation={"https://www.typescriptlang.org/"}
          />
          <Technology
            name={"TailwindCSS"}
            description={
              "Rapidly build modern websites without ever leaving your HTML"
            }
            documentation={"https://tailwindcss.com/"}
          />
          <Technology
            name={"tRPC"}
            description={"End-to-end typesafe APIs made easy"}
            documentation={"https://trpc.io/"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
