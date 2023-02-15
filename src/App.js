import { useState } from "react";
import data from "./data.json";
import Job from "./components/Job";
import './App.css';

const App = () => {

  const [jobs, setJobs] = useState([...data]);
  const changeJobs = () => {
    let copy = [...data];
    if (role !== "") {
      copy = copy.filter(job => job.role === role);
    }
    if (level !== "") {
      copy = copy.filter(job => job.level === level);
    }
    setJobs(copy);
  }

  const [role, setRole] = useState("");
  const changeRole = (selection) => {
    setRole(selection);
    changeJobs();
  }

  const [level, setLevel] = useState("");
  const changeLevel = (selection) => {
    setLevel(selection);
    changeJobs();
  }
  const [languages, setLanguages] = useState([]);

  const [tools, setTools] = useState([]);

  return(
    <div>
      <div className="top-design" aria-hidden="true"></div>
      <div className="filter-list"></div>
      <main className="container px-5">
        {jobs.map(job =>
        <Job 
        key={job.id} 
        job={job}
        changeRole={changeRole}
        changeLevel={changeLevel}  
        />
        )}
      </main>
    </div>
  );
}

export default App;
