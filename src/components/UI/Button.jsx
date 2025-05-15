import classes from "./Button.module.css";

export default function Button({ button, task, ...props }) {
  return (
    <button {...props} className={task ? classes.task : undefined}>
      {button}
    </button>
  );
}
