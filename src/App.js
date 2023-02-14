import { useState } from "react";
import data from "./data.json";
import Job from "./components/Job";
import './App.css';

const App = () => {

  const [jobs, setJobs] = useState([...data]);

  return(
    <div>
      <div className="top-design" aria-hidden="true"></div>
      <main className="container px-5">
        {jobs.map(job =>
        <Job key={job.id} job={job} />
        )}
      </main>
    </div>
  );
}

export default App;
