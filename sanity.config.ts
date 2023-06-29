import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./sanity/schemas";

// config for initializing Sanity Studio instance
const config = defineConfig({
  projectId: "bbyrjfzp",
  dataset: "production",
  title: "TS Gunpla",
  apiVersion: "2023-06-25",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schema },
});

export default config;
