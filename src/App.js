
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderTabs from "./Components/Header/HeaderTabs";
import Header from "./Components/Header/Header";
import LohpIndex from "./Components/Lohp/LohpIndex";
import SearchResults from "./Components/Discover/SearchResults";

const Testt = () => <div>hello 123</div>
const Testtt = () => <div>hello doom</div>

function App() {

  return (
    <BrowserRouter>
      <HeaderTabs />
      <Header />
      <main role="main">
        <Routes>
          <Route exact path="/" element={<LohpIndex />} />
          <Route exact path="/search" element={<SearchResults />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
