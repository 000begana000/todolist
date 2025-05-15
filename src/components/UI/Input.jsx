import classes from "./Input.module.css";

export default function Input({ label, textarea, task, ...props }) {
  return (
    <p>
      <label className={task ? classes.taskLabel : classes.label}>
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={classes.text} />
      ) : (
        <input {...props} className={task ? classes.task : undefined} />
      )}
    </p>
  );
}
