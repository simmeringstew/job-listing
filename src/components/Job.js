import New from "./New";
import Featured from "./Featured";
import RoleTag from "./RoleTag";
import LevelTag from "./LevelTag";
import LanguagesTag from "./LanguagesTag";
import ToolsTag from "./ToolsTag";
import "../styles/Job.css";

const Job = ({ job, changeRole, changeLevel, addLanguage, addTool }) => {
    return(
        <article>
            <img src={job.logo} alt={job.company} />
            <section className="listing">
                <div className="company">
                    <h1>{job.company}</h1>
                    <New newStatus={job.new} />
                    <Featured featuredStatus={job.featured} />
                </div>
                <div className="position">
                    <h2>{job.position}</h2>
                </div>
                <div className="information">
                    <span>{job.postedAt}</span>
                    <span>&#183;</span>
                    <span>{job.contract}</span>
                    <span>&#183;</span>
                    <span>{job.location}</span>
                </div>
            </section>
            <hr />
            <section className="tags">
                <RoleTag
                    role={job.role}
                    changeRole={changeRole}
                />
                <LevelTag 
                    level={job.level} 
                    changeLevel={changeLevel}
                />
                <LanguagesTag
                    languages={job.languages}
                    addLanguage={addLanguage}
                />
                <ToolsTag
                    tools={job.tools}
                    addTool={addTool}
                />
            </section>
        </article>
    );
}

export default Job;
