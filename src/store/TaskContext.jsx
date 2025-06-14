import { createContext, useReducer } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: task => {},
  editTask: (id, task) => {},
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
    const existingTaskIndex = state.tasks.findIndex(
      task => task.id === action.id
    );
    const updatedTasks = [...state.tasks];
    const existingTask = state.tasks[existingTaskIndex];

    const updatedTask = {
      ...existingTask,
      id: existingTask.id,
      projectId: existingTask.projectId,
      description: action.task.description,
      isDone: action.task.isDone,
    };

    updatedTasks[existingTaskIndex] = updatedTask;

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    return { ...state, tasks: updatedTasks };
  }

  if (action.type === "CHECK_IS_DONE") {
    const existingTaskIndex = state.tasks.findIndex(
      task => task.id === action.id
    );

    const updatedTasks = [...state.tasks];
    const existingTask = state.tasks[existingTaskIndex];

    const updatedTask = {
      ...existingTask,
      isDone: !existingTask.isDone,
    };

    updatedTasks[existingTaskIndex] = updatedTask;

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    return { ...state, tasks: updatedTasks };
  }

  return state;
}

export function TaskContextProvider({ children }) {
  const tasksData = JSON.parse(localStorage.getItem("tasks"));

  const [taskState, dispatchTaskAction] = useReducer(taskReducer, {
    tasks: tasksData || [],
  });

  function addTask(task) {
    dispatchTaskAction({ type: "ADD_TASK", task });
  }

  function editTask(id, task) {
    dispatchTaskAction({ type: "EDIT_TASK", id, task });
  }

  function checkIsDone(id) {
    dispatchTaskAction({ type: "CHECK_IS_DONE", id });
  }

  const taskCtx = {
    tasks: taskState.tasks,
    addTask,
    editTask,
    checkIsDone,
  };

  return (
    <TaskContext.Provider value={taskCtx}>{children}</TaskContext.Provider>
  );
}

export default TaskContext;
