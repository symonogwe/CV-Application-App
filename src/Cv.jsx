export default function Cv({ data }) {
  return (
    <>
      <h1>General Information</h1>
      <p>Name: {data.generalInfo.name}</p>
      <p>Email: {data.generalInfo.email}</p>
      <p>Phone: {data.generalInfo.phone}</p>

      <h1>Educational Information</h1>
      <p>School: {data.educationalInfo.school}</p>
      <p>Title: {data.educationalInfo.title}</p>
      <p>Completed: {data.educationalInfo.dateCompleted}</p>

      <h1>Work Information</h1>
      <p>Company: {data.workInfo.company}</p>
      <p>Position: {data.workInfo.position}</p>
      <p>Responsibility: {data.workInfo.responsibility}</p>
    </>
  );
}
