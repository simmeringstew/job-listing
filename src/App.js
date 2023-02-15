import { useState, useEffect } from "react";
import data from "./data.json";
import Job from "./components/Job";
import './App.css';

const App = () => {

  const [jobs, setJobs] = useState([]);

  const [role, setRole] = useState("");
  const changeRole = (selection) => {
    setRole(selection);
  }

  const [level, setLevel] = useState("");
  const changeLevel = (selection) => {
    setLevel(selection);
  }
  const [languages, setLanguages] = useState([]);
  const addLanguage = (selection) => {
    setLanguages(languages.concat(selection));
  }

  const [tools, setTools] = useState([]);

  useEffect(() => {
    let copy = [...data];
    if (role !== "") {
      copy = copy.filter(job => job.role === role);
    }
    if (level !== "") {
      copy = copy.filter(job => job.level === level);
    }
    if (languages.length !== 0) {
      for (let i = 0; i < languages.length; i++) {
        copy = copy.filter(job => job.languages.includes(languages[i]));
      }
    }
    setJobs(copy);
  }, [role, level, languages]);

  return(
    <div>
      <div className="top-design" aria-hidden="true"></div>
      <div className="filter-list">

      </div>
      <main className="container px-5">
        {jobs.map(job =>
        <Job 
        key={job.id} 
        job={job}
        changeRole={changeRole}
        changeLevel={changeLevel}
        addLanguage={addLanguage}
        />
        )}
      </main>
    </div>
  );
}

export default App;
