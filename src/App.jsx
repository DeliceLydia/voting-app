import Nav from "./components/nav";
import Candidate from "./components/candidate";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="bg-[#00001C] h-dvh">
        <Nav />
        <Candidate />
      </div>
    </>
  );
};

export default App;
