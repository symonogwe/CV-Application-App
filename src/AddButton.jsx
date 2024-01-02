function AddButton({ sectionName, onClick }) {
  return <button onClick={onClick}>Add {sectionName}</button>;
}

export default AddButton;
