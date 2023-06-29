// import all schemas, bundle them into an array, and export them as one
// this is used in sanity config
import project from "./project-schema";
import about from "./about-schema";

const schema = [project, about];

export default schema;
