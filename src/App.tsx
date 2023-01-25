// Libraries
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Components
import {
  AddPeople,
  AddRelationships,
  ConnectionFinder,
  Header,
} from "./components";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<AddPeople />} />
        <Route path="/add-relationships" element={<AddRelationships />} />
        <Route path="/find-connection" element={<ConnectionFinder />} />
      </Routes>
    </>
  );
}

export default App;
