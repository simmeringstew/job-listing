import { useState, useEffect } from "react";
import data from "./data.json";
import Job from "./components/Job";
import Role from "./components/Role";
import Level from "./components/Level";

import Clear from "./components/Clear";
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
    if (languages.includes(selection)) {
      return;
    }
    setLanguages(languages.concat(selection));
  }

  const [tools, setTools] = useState([]);
  const addTool = (selection) => {
    if (tools.includes(selection)) {
      return;
    }
    setTools(tools.concat(selection));
  }

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
    if (tools.length !== 0) {
      for (let i = 0; i < tools.length; i++) {
        copy = copy.filter(job => job.tools.includes(tools[i]))
      }
    }
    setJobs(copy);
  }, [role, level, languages, tools]);

  return(
    <div>
      <div className="top-design" aria-hidden="true"></div>
      <main className="container px-5">
        <div className="filter-list">
          <div className="filters">
            <Role role={role} changeRole={changeRole} />
            <Level level={level} changeLevel={changeLevel} />
          </div>
          <div className="clear">
            <Clear />
          </div>
        </div>
        {jobs.map(job =>
        <Job 
        key={job.id} 
        job={job}
        changeRole={changeRole}
        changeLevel={changeLevel}
        addLanguage={addLanguage}
        addTool={addTool}
        />
        )}
      </main>
    </div>
  );
}

export default App;
