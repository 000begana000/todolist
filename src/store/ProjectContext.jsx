import { createContext, useReducer } from "react";

const ProjectContext = createContext({
  projects: [],
  addProject: project => {},
  checkIsDone: id => {},
});

function projectReducer(state, action) {
  if (action.type === "ADD_PROJECT") {
    const newProject = action.project;
    const updatedProjects = [newProject, ...state.projects];

    return { ...state, projects: updatedProjects };
  }

  if (action.type === "CHECK_IS_DONE") {
    const existingProjectIndex = state.projects.findIndex(
      project => project.id === action.id
    );
    const updatedProjects = [...state.projects];
    const existingProject = state.projects[existingProjectIndex];
    const updatedProject = {
      ...existingProject,
      isDone: !existingProject.isDone,
    };

    updatedProjects[existingProjectIndex] = updatedProject;

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

  function checkIsDone(id) {
    dispatchProjectAction({
      type: "CHECK_IS_DONE",
      id,
    });
  }

  const cartCtxValue = {
    projects: projectsState.projects,
    addProject,
    checkIsDone,
  };

  return (
    <ProjectContext.Provider value={cartCtxValue}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
