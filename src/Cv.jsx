export default function Cv({ data }) {
  return (
    <div className="cv-container">
      <h1>MY CV</h1>

      <div className="info-data">
        <div className="cv-general-info-container">
          <h2>General Information</h2>
          <p>Name: {data.generalInfo.name}</p>
          <p>Email: {data.generalInfo.email}</p>
          <p>Phone: {data.generalInfo.phone}</p>
        </div>

        <div className="name-initials">
          <h2>{getNameInitials(data)}</h2>
        </div>
      </div>

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

      <div className="cv-references-container">
        {data.references.map((item) => (
          <div key={item.id} className="cv-reference">
            <h4>Reference {item.id + 1}</h4>
            <p>Name: {item.name}</p>
            <p>Relationship: {item.relationship}</p>
            <p>Email {item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getNameInitials(data) {
  if (data.generalInfo.name) {
    const name = data.generalInfo.name;
    const nameArr = name.split(" ");
    const initials = nameArr.map((item) => {
      const split = item.split("");
      return split[0];
    });

    const joined = initials.join("");
    return joined;

    // console.log(nameArr);
  }
}
