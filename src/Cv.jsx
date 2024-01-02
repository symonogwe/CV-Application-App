export default function Cv({ data }) {
  return (
    <div className="cv-container">
      <h1>MY CV</h1>
      <h2>General Information</h2>
      <p>Name: {data.generalInfo.name}</p>
      <p>Email: {data.generalInfo.email}</p>
      <p>Phone: {data.generalInfo.phone}</p>

      <div className="cv-education-container">
        {data.educationalInfo.map((item) => (
          <div key={item.id} className="cv-education">
            <h4>School Information {item.id + 1}</h4>
            <p>School: {item.school}</p>
            <p>Title: {item.title}</p>
            <p>Completed: {item.dateCompleted}</p>
          </div>
        ))}
      </div>

      <h2>Work Information</h2>
      <p>Company: {data.workInfo.company}</p>
      <p>Position: {data.workInfo.position}</p>
      <p>Responsibility: {data.workInfo.responsibility}</p>
    </div>
  );
}
