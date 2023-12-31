import { useState } from "react";

import "./App.css";
import Information from "./Information";
import Cv from "./Cv";
import cvInformation from "./data";

function App() {
  const [data, setData] = useState(cvInformation);
  return (
    <>
      <Information />
      <Cv data={data} />
    </>
  );
}

export default App;
