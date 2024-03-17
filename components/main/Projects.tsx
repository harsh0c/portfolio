import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Promptception"
          description="The application allows users to discover, create, and share AI-powered prompts."
          links="https://nextjs-promptception.vercel.app/"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Movies Catalogue-Movieception"
          description="Browse Trending Movies and TV shows, offering seamless navigation, search functionality, and a favorites section."
          links="https://nextjs-promptception.vercel.app/"
        />
        <ProjectCard
          src="/DocWebsite.png"
          title="Doctor Appointment Website"
          description="Revitalize healthcare experience with the cutting-edge MERN stack platform.Seamlessly book appointments with specialized doctors"
          links="https://nextjs-promptception.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
