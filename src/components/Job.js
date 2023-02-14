import New from "./New";
import Featured from "./Featured";

const Job = ({ job }) => {
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

                </div>
                <div className="information">

                </div>
            </section>
            <section className="tags">

            </section>
        </article>
    );
}

export default Job;
