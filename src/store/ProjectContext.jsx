import { createContext, useReducer } from "react";

const ProjectContext = createContext({
  projects: [],
});

function projectReducer() {}

export function ProjectContextProvider({ children }) {
  const [projectsState, dispatchProjectAction] = useReducer(projectReducer, {
    projects: [],
  });

  const cartCtxValue = {
    projects: projectsState.project,
  };

  return (
    <ProjectContext.Provider value={cartCtxValue}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
