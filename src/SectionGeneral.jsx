import Input from "./Input";
import { TextArea } from "./Input";
import AddButton from "./AddButton";

export default function SectionGeneral({ title, data, setData }) {
  // General Info Onchange handlers
  function handleName(e) {
    setData({
      ...data,
      generalInfo: { ...data.generalInfo, name: e.target.value },
    });
  }

  function handleEmail(e) {
    setData({
      ...data,
      generalInfo: { ...data.generalInfo, email: e.target.value },
    });
  }

  function handlePhone(e) {
    setData({
      ...data,
      generalInfo: { ...data.generalInfo, phone: e.target.value },
    });
  }

  // Educational Info onChange handlers
  function handleSchool(e) {
    const targetId = e.target.id;
    const targetObject = data.educationalInfo[targetId];
    targetObject.school = e.target.value;

    const newData = { ...data };
    newData.educationalInfo[targetId] = targetObject;

    setData(newData);
  }

  function handleTitle(e) {
    const targetId = e.target.id;
    const targetObject = data.educationalInfo[targetId];
    targetObject.title = e.target.value;

    const newData = { ...data };
    newData.educationalInfo[targetId] = targetObject;
    setData(newData);
  }

  function handleSchoolDate(e) {
    const targetId = e.target.id;
    const targetObject = data.educationalInfo[targetId];
    targetObject.dateCompleted = e.target.value;

    const newData = { ...data };
    newData.educationalInfo[targetId] = targetObject;
    setData(newData);
  }

  // Work Info onChange handlers
  function handleCompany(e) {
    const targetId = e.target.id;
    const targetObject = data.workInfo[targetId];
    targetObject.company = e.target.value;

    const newData = { ...data };
    newData.workInfo[targetId] = targetObject;

    setData(newData);
  }

  function handlePosition(e) {
    const targetId = e.target.id;
    const targetObject = data.workInfo[targetId];
    targetObject.position = e.target.value;

    const newData = { ...data };
    newData.workInfo[targetId] = targetObject;

    setData(newData);
  }

  function handleResponsibility(e) {
    const targetId = e.target.id;
    const targetObject = data.workInfo[targetId];
    targetObject.responsibility = e.target.value;

    const newData = { ...data };
    newData.workInfo[targetId] = targetObject;

    setData(newData);
  }

  function handleSkill(e) {
    const targetId = e.target.id;
    const targetObject = data.skills[targetId];
    targetObject.skill = e.target.value;

    const newData = { ...data };
    newData.skills[targetId] = targetObject;

    setData(newData);
  }

  // Add section button functionality
  function addEducationSection() {
    const arrayLength = data.educationalInfo.length;
    const nextId = arrayLength;

    const newObject = {
      school: "",
      title: "",
      dateCompleted: "",
      id: nextId,
    };

    const newData = { ...data };
    newData.educationalInfo.push(newObject);

    setData(newData);
  }

  function addWorkSection() {
    const arrayLength = data.workInfo.length;
    const nextId = arrayLength;

    const newObject = {
      company: "",
      position: "",
      responsibility: "",
      id: nextId,
    };

    const newData = { ...data };
    newData.workInfo.push(newObject);

    setData(newData);
  }

  function addSkill() {
    const arrayLength = data.skills.length;
    const nextId = arrayLength;

    const newObject = {
      skill: "",
      id: nextId,
    };

    const newData = { ...data };
    newData.skills.push(newObject);

    setData(newData);
  }

  if (title === "General Info") {
    return (
      <div className="general-info-container">
        <h2>{title}</h2>
        <Input
          label={"Name"}
          type={"text"}
          value={data.generalInfo.name}
          onChange={handleName}
        />
        <Input
          label={"Email"}
          type={"email"}
          value={data.generalInfo.email}
          onChange={handleEmail}
        />
        <Input
          label={"Phone"}
          type={"number"}
          value={data.generalInfo.phone}
          onChange={handlePhone}
        />
      </div>
    );
  } else if (title === "Educational Experience") {
    return (
      <div className="educational-info-container">
        <h2>{title}</h2>
        {data.educationalInfo.map((item) => {
          return (
            <div key={item.id} className="education-block">
              <Input
                label={"School"}
                type={"text"}
                value={item.school}
                onChange={handleSchool}
                id={item.id}
              />
              <Input
                label={"Title"}
                type={"text"}
                value={item.title}
                onChange={handleTitle}
                id={item.id}
              />
              <Input
                label={"Completed Date"}
                type={"date"}
                value={item.dateCompleted}
                onChange={handleSchoolDate}
                id={item.id}
              />
            </div>
          );
        })}
        <AddButton sectionName={"education"} onClick={addEducationSection} />
      </div>
    );
  } else if (title === "Work Experience") {
    return (
      <div className="work-info-container">
        <h2>{title}</h2>
        {data.workInfo.map((item) => {
          return (
            <div key={item.id} className="work-block">
              <Input
                label={"Company"}
                type={"text"}
                value={item.company}
                onChange={handleCompany}
                id={item.id}
              />
              <Input
                label={"Position"}
                type={"text"}
                value={item.position}
                onChange={handlePosition}
                id={item.id}
              />
              <TextArea
                label={"Responsibility"}
                value={item.responsibility}
                onChange={handleResponsibility}
                id={item.id}
              />
            </div>
          );
        })}
        <AddButton sectionName={"Work"} onClick={addWorkSection} />
      </div>
    );
  } else if (title === "Skills Info") {
    return (
      <div className="skills-info-container">
        <h2>{title}</h2>
        {data.skills.map((item) => {
          return (
            <div key={item.id} className="skill-block">
              <Input
                label={"Skill"}
                type={"text"}
                value={item.skill}
                onChange={handleSkill}
                id={item.id}
              />
            </div>
          );
        })}
        <AddButton sectionName={"Skill"} onClick={addSkill} />
      </div>
    );
  }
}
