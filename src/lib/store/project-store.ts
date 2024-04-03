import { create } from "zustand";
import { v4 as uuid } from "uuid";

export type Status = "Subcribed" | "Unsubscribe";

export type Project = {
  id: string;
  img: string;
  name: string;
  description: string;
  likes: number;
  dislikes: number;
  status?: Status;
};

export type State = {
  projects: Project[];
};

const projectData = [
  {
    id: uuid(),
    img: "https://github.com/shadcn.png",
    name: "Gmail",
    description: "lermgvi tqiteyfg efiwtg",
    likes: 20,
    dislikes: 40,
  },
  {
    id: uuid(),
    img: "https://github.com/shadcn.png",
    name: "Office",
    description: "lermgvi tqiteyfg",
    likes: 50,
    dislikes: 10,
  },
  {
    id: uuid(),
    img: "https://github.com/shadcn.png",
    name: "Office",
    description: "lermgvi tqiteyfg",
    likes: 50,
    dislikes: 10,
  },
];

export type ProjectActions = {
  toggleLikeDislike: (id: string, active: boolean) => void;
  toggleLike: (id: string, active: boolean) => void;
};

export const useProjectStore = create<State & ProjectActions>()((set) => ({
  projects: projectData,
  toggleLikeDislike: (id: string, active: boolean) =>
    set((state) => {
      const updatedProjects = state.projects.map((project) => {
        if (project.id === id && !active) {
          return {
            ...project,
            dislikes: project.dislikes + 1,
          };
        } else if (project.id === id && active) {
          return {
            ...project,
            dislikes: project.dislikes - 1,
          };
        }

        return project;
      });
      return { projects: updatedProjects };
    }),
  toggleLike: (id: string, active: boolean) =>
    set((state) => {
      const updatedProjects = state.projects.map((project) => {
        if (project.id === id && !active) {
          return {
            ...project,
            likes: project.likes + 1,
          };
        } else if (project.id === id && active) {
          return {
            ...project,
            likes: project.likes - 1,
          };
        }

        return project;
      });
      return { projects: updatedProjects };
    }),
}));
