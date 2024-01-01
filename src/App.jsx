import { useState } from "react";

import Information from "./Information";
import Cv from "./Cv";
import cvInformation from "./data";

function App() {
  const [data, setData] = useState(cvInformation);

  return (
    <div className="app">
      <Information data={data} setData={setData} />
      <Cv data={data} />
    </div>
  );
}

export default App;
