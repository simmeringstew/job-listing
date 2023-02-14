const Featured = ({ featuredStatus }) => {
    if (featuredStatus) {
        return(
            <span className="featured">FEATURED</span>
        );
    } else return;
}

export default Featured;
