
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderTabs from "./Components/Header/HeaderTabs";
import Header from "./Components/Header/Header";
import LohpIndex from "./Components/Lohp/LohpIndex";
import Discover from "./Components/Discover/Discover";
import Xdp from "./Components/XDP/Xdp";

function App() {

  return (
    <BrowserRouter>
      <HeaderTabs />
      <Header />
      <main role="main">
        <Routes>
          <Route exact path="/" element={<LohpIndex />} />
          <Route exact path="/search" element={<Discover />} />
          <Route exact path="/xdp" element={<Xdp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
