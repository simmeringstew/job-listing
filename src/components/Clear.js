const Clear = ({ reset }) => {

    const handleClick = () => {
        reset();
    }

    return(
        <button type="button" name="clear" onClick={handleClick}>Clear</button>
    );
}

export default Clear;
