import SectionGeneral from "./SectionGeneral";
import Button from "./Button";

function Information() {
  return (
    <>
      <SectionGeneral title={"General Info"} />
      <SectionGeneral title={"Educational Experience"} />
      <SectionGeneral title={"Work Experience"} />
      <Button />
    </>
  );
}

export default Information;
