export default function Input({ label, type, value, onChange }) {
  return (
    <>
      <label htmlFor={label}>
        {label}:{"  "}
        <input
          type={type}
          name={label}
          id={label}
          value={value}
          onChange={onChange}
        />
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
