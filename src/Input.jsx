export default function Input({ label, type }) {
  return (
    <>
      <label htmlFor={label}>
        {label}:{"  "}
        <input type={type} name={label} id={label} />
      </label>
    </>
  );
}

export function TextArea({ label }) {
  return (
    <>
      <label htmlFor={label}>
        {label}: {"  "}
        <textarea></textarea>
      </label>
    </>
  );
}
