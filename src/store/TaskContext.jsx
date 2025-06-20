import { createContext, useReducer } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: task => {},
  editTask: (id, task) => {},
  deleteTask: id => {},
  checkIsDone: id => {},
});

function taskReducer(state, action) {
  if (action.type === "ADD_TASK") {
    const newTask = action.task;
    const updatedTasks = [newTask, ...state.tasks];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    return { ...state, tasks: updatedTasks };
  }

  if (action.type === "EDIT_TASK") {
    //...
  }

  if (action.type === "DELETE_TASK") {
    //...
  }

  if (action.type === "CHECK_IS_DONE") {
    //...
  }

  return state;
}

export function TextContextProvider({ children }) {
  const tasksData = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, dispatchTaskAction] = useReducer(taskReducer, {
    tasks: tasksData || [],
  });

  function addTask(task) {
    dispatchTaskAction({ type: "ADD_TASK", task });
  }

  function editTask(id, task) {
    dispatchTaskAction({ type: "EDIT_TASK", id, task });
  }

  function deleteTask(id) {
    dispatchTaskAction({ type: "DELETE_TASK", id });
  }

  function checkIsDone(id) {
    dispatchTaskAction({ type: "CHECK_IS_DONE", id });
  }

  const taskCtx = {
    tasks,
    addTask,
    editTask,
    deleteTask,
    checkIsDone,
  };
  return (
    <TextContext.Provider value={taskCtx}>{children}</TextContext.Provider>
  );
}

export default TaskContext;
