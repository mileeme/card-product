/** @jsxImportSource @emotion/react */


import {useState, useRef} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderTabs2 from "./Components/Header/HeaderTabs2";
import Header from "./Components/Header/Header";
// import LohpIndex from "./Components/Lohp/LohpIndex";
// import Discover from "./Components/Discover/Discover";
// import Xdp from "./Components/XDP/Xdp";
import Motion from "./Components/Motion/Motion";
import MotionTest from "./Components/Motion/MotionTest";
import AccordionTest from "./Components/Accordion/AccordionTest";
// import "./Components/Accordion/test.css";

function App() {
  const [Test, setTest] = useState(false);
  const testRef = useRef();

  return (
    <BrowserRouter>
      <HeaderTabs2 />
      <Header />
      <main role="main">
        {/* <Motion /> */}
        {/* <Routes>
          <Route exact path="/" element={<LohpIndex />} />
          <Route exact path="/search" element={<Discover />} />
          <Route exact path="/xdp" element={<Xdp />} />
          <Route exact path="/motion" element={<Motion />} />
        </Routes> */}

        <Routes>
          <Route exact path="/" element={<Motion />} />
          <Route exact path="/motion-test" element={<MotionTest />} />
          <Route exact path="/accordion" element={<AccordionTest />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
