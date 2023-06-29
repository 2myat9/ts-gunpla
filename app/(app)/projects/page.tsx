"use client";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { koulen, space_grotesk } from "../fonts";
import { useEffect, useState } from "react";
import Tag from "../components/Tag";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [renderedProjects, setRenderedProjects] = useState<Project[]>([]);
  // recommend having 4 featured tags for optimal styling and simplicity
  // want to change these often? change tags to document type in Sanity and add 'featured: boolean' field
  const FEATURED_TAGS = ["all", "resin-conversion", "mx", "2023", "fast-build"];

  // fetch all projects when page loads
  useEffect(() => {
    const getProjects = async () => {
      const projectsQuery = groq`*[_type == 'project']{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "coverImage": coverImage.asset->url,
        description,
        tags,
      }`;
      const res = await createClient(clientConfig).fetch(projectsQuery);
      setProjects(res);
    };
    getProjects();
  }, []);

  // filter by tags and sort by creation time when Projects are loaded
  useEffect(() => {
    let filteredProjects = [];
    if (selectedTag !== "all") {
      filteredProjects = projects.filter((project) =>
        project.tags?.includes(selectedTag)
      );
    } else {
      filteredProjects = projects;
    }

    const sortedProjects = filteredProjects.sort((a, b) => {
      // sort projects by time of creation
      const aDate = new Date(a._createdAt);
      const bDate = new Date(b._createdAt);
      return aDate.getTime() - bDate.getTime();
    });

    setRenderedProjects(sortedProjects);
  }, [projects, selectedTag]);

  return (
    <div
      className={`max-w-screen-lg mx-auto flex flex-col items-center gap-12 mb-24`}
    >
      <NavBar />
      <div
        className={`uppercase text-3xl font-bold ${koulen.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400`}
      >
        All Projects
      </div>
      <div className={`-mt-6 flex gap-2 ${space_grotesk.className}`}>
        {FEATURED_TAGS.map((tag) => (
          <button key={tag} onClick={() => setSelectedTag(tag)}>
            <Tag name={tag} isSelected={selectedTag === tag} />
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 max-h-40 justify-center items-stretch">
        {renderedProjects.map((project) => (
          <Card
            key={project._id}
            title={project.name}
            body={project.description}
            image={project.coverImage}
            path={`projects/${project.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
