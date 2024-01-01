import SectionGeneral from "./SectionGeneral";
import Button from "./Button";

function Information({ data, setData }) {
  return (
    <>
      <SectionGeneral title={"General Info"} data={data} setData={setData} />
      <SectionGeneral
        title={"Educational Experience"}
        data={data}
        setData={setData}
      />
      <SectionGeneral title={"Work Experience"} data={data} setData={setData} />
      <Button />
    </>
  );
}

export default Information;
