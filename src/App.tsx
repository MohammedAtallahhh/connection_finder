// Libraries
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Components
import {
  AddPeople,
  AddRelationships,
  ConnectionFinder,
  Header,
  Home,
} from "./components";

// Styles
import "./App.css";
import usePeople from "./hooks/usePeople";

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
