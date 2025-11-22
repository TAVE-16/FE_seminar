import client from "./client";

export const getProjects = async () => {
  const response = await client.get("/projects");
  return response.data;
};

export const createProject = async (project) => {
  const response = await client.post("/projects", {
    teamName: project.teamName,
    description: project.description,
    part: project.part,
  });
  return response.data;
};