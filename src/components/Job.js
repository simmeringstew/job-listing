import New from "./New";
import Featured from "./Featured";
import RoleTag from "./RoleTag";
import LevelTag from "./LevelTag";

const Job = ({ job, changeRole, changeLevel }) => {
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
            </section>
        </article>
    );
}

export default Job;
