import { createContext, useReducer } from "react";

const ProjectContext = createContext({
  projects: [],
  addProject: project => {},
  checkIsDone: id => {},
  deleteProject: id => {},
});

function projectReducer(state, action) {
  //// addProject - add a project to projects state
  if (action.type === "ADD_PROJECT") {
    const newProject = action.project;
    const updatedProjects = [newProject, ...state.projects];

    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    return { ...state, projects: updatedProjects };
  }

  //// checkIsDone - toggle isDone prop in a state
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

    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    return { ...state, projects: updatedProjects };
  }

  //// deleteProject - delete a project from projects state
  if (action.type === "DELETE_PROJECT") {
    const updatedProjects = state.projects.filter(
      project => project.id !== action.id
    );

    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    return { ...state, projects: updatedProjects };
  }

  return state;
}

export function ProjectContextProvider({ children }) {
  const projectsData = JSON.parse(localStorage.getItem("projects"));

  const [projectsState, dispatchProjectAction] = useReducer(projectReducer, {
    projects: projectsData || [],
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

  function deleteProject(id) {
    dispatchProjectAction({
      type: "DELETE_PROJECT",
      id,
    });
  }

  const cartCtxValue = {
    projects: projectsState.projects,
    addProject,
    checkIsDone,
    deleteProject,
  };

  return (
    <ProjectContext.Provider value={cartCtxValue}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
