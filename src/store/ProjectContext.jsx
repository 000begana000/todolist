import { createContext, useReducer } from "react";

const ProjectContext = createContext({
  projects: [],
  addProject: project => {},
});

function projectReducer(state, action) {
  if (action.type === "ADD_PROJECT") {
    const newProject = action.project;
    const updatedProjects = [newProject, ...state.projects];

    return { ...state, projects: updatedProjects };
  }

  return state;
}

export function ProjectContextProvider({ children }) {
  const [projectsState, dispatchProjectAction] = useReducer(projectReducer, {
    projects: [],
  });

  function addProject(project) {
    dispatchProjectAction({
      type: "ADD_PROJECT",
      project,
    });
  }

  const cartCtxValue = {
    projects: projectsState.project,
    addProject,
  };

  return (
    <ProjectContext.Provider value={cartCtxValue}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
