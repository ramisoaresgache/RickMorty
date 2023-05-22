import Card from "./components/Card";
import Landing from "./components/landing";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Card />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
