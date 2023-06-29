// all the functions used to query data from Sanity
import { Project } from "@/types/Project";
import { AboutPage } from "@/types/AboutPage";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// query for an array of all projects
export async function getProjects(): Promise<Project[]> {
  const projectsQuery = groq`
  *[_type == 'project']{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    description
  }
  `;
  return createClient(clientConfig).fetch(projectsQuery);
}

// query specific project for a given slug
export async function getProject(slug: string): Promise<Project> {
  const projectQuery = groq`
  *[_type == 'project' && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    content,
    tags,
    images[] {
      "url": image.asset->url,
      "metadata": image.asset->metadata
    } // TODO: maybe separate fetching of all these images to a separate trigger event + query?
  }
  `;
  return createClient(clientConfig).fetch(projectQuery, { slug });
}

// query information for the about page
export async function getAbout(): Promise<AboutPage> {
  const aboutQuery = groq`
  *[_type == 'about'][0]{
    heading,
    content,
    'url': profile.asset->url,
    'metadata': profile.asset->metadata,
  }
  `;
  return createClient(clientConfig).fetch(aboutQuery);
}
