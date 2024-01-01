export default function Cv({ data }) {
  return (
    <div className="cv-container">
      <h1>MY CV</h1>
      <h2>General Information</h2>
      <p>Name: {data.generalInfo.name}</p>
      <p>Email: {data.generalInfo.email}</p>
      <p>Phone: {data.generalInfo.phone}</p>

      <h2>Educational Information</h2>
      <p>School: {data.educationalInfo.school}</p>
      <p>Title: {data.educationalInfo.title}</p>
      <p>Completed: {data.educationalInfo.dateCompleted}</p>

      <h2>Work Information</h2>
      <p>Company: {data.workInfo.company}</p>
      <p>Position: {data.workInfo.position}</p>
      <p>Responsibility: {data.workInfo.responsibility}</p>
    </div>
  );
}
