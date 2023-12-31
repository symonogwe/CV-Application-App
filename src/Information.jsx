import SectionGeneral from "./SectionGeneral";
import Button from "./Button";

function Information({ data, setData }) {
  return (
    <>
      <SectionGeneral title={"General Info"} data={data} setData={setData} />
      <SectionGeneral title={"Educational Experience"} data={data} />
      <SectionGeneral title={"Work Experience"} data={data} />
      <Button />
    </>
  );
}

export default Information;
