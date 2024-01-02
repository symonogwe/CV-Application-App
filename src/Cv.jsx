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

      <div className="cv-work-container">
        {data.workInfo.map((item) => (
          <div key={item.id} className="cv-work">
            <h4>Work Information {item.id + 1}</h4>
            <p>Company: {item.company}</p>
            <p>Position: {item.position}</p>
            <p>Responsibility: {item.responsibility}</p>
          </div>
        ))}
      </div>

      <div className="cv-skill-container">
        {data.skills.map((item) => (
          <div key={item.id} className="cv-skill">
            <h4>Skill {item.id + 1}</h4>
            <p>{item.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
