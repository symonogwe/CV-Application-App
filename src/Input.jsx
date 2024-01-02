export default function Input({ label, type, value, onChange, id }) {
  return (
    <>
      <label htmlFor={id}>
        {label}:{"  "}
        <input
          type={type}
          name={label}
          id={id}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}

export function TextArea({ label, value, onChange, id }) {
  return (
    <>
      <label htmlFor={label}>
        {label}: {"  "}
        <textarea id={id} value={value} onChange={onChange}></textarea>
      </label>
    </>
  );
}
