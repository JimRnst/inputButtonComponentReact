import Layout from "./Layout";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="buttons" element={<Buttons />} />
          <Route path="inputs" element={<Inputs />} />
      </Route>
    </Routes>



    // <div className="App">
    //   <SideNav />
    //   <Buttons />
    // </div>
  );
}

export default App;
