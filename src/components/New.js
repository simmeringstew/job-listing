const New = ({ newStatus }) => {
    if (newStatus) {
        return(
            <span className="new">NEW!</span>
        );
    } else return;
}

export default New;
