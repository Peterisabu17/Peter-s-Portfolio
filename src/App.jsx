import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo1 from "./Components/Demo1/Demo1";
import Demo2 from "./Components/Demo2/Demo2";
import Demo3 from "./Components/Demo3/Demo3";

function App() {
  return (
    <>
      {/* <Navbar />
      <Body /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Body />} />
            <Route path="demo1" element={<Demo1 />} />
            <Route path="demo2" element={<Demo2 />} />
            <Route path="demo3" element={<Demo3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
