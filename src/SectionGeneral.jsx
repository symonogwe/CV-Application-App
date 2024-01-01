import Input from "./Input";
import { TextArea } from "./Input";

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
    setData({
      ...data,
      educationalInfo: { ...data.educationalInfo, title: e.target.value },
    });
  }

  function handleSchoolDate(e) {
    setData({
      ...data,
      educationalInfo: {
        ...data.educationalInfo,
        dateCompleted: e.target.value,
      },
    });
  }

  // Work Info onChange handlers
  function handleCompany(e) {
    setData({
      ...data,
      workInfo: { ...data.workInfo, company: e.target.value },
    });
  }

  function handlePosition(e) {
    setData({
      ...data,
      workInfo: { ...data.workInfo, position: e.target.value },
    });
  }

  function handleResponsibility(e) {
    setData({
      ...data,
      workInfo: { ...data.workInfo, responsibility: e.target.value },
    });
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
              />
              <Input
                label={"Completed Date"}
                type={"date"}
                value={item.dateCompleted}
                onChange={handleSchoolDate}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="work-info-container">
        <h2>{title}</h2>
        <Input
          label={"Company"}
          type={"text"}
          value={data.workInfo.company}
          onChange={handleCompany}
        />
        <Input
          label={"Position"}
          type={"text"}
          value={data.workInfo.position}
          onChange={handlePosition}
        />
        <TextArea
          label={"Responsibility"}
          value={data.workInfo.responsibility}
          onChange={handleResponsibility}
        />
      </div>
    );
  }
}
