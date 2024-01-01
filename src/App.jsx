import { useState } from "react";

import Information from "./Information";
import Cv from "./Cv";
import cvInformation from "./data";

function App() {
  const [data, setData] = useState(cvInformation);

  return (
    <>
      <Information data={data} setData={setData} />
      <Cv data={data} />
    </>
  );
}

export default App;
