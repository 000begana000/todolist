import classes from "./Input.module.css";

export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {textarea ? (
        <textarea {...props} className={classes.text} />
      ) : (
        <input {...props} />
      )}
    </p>
  );
}
