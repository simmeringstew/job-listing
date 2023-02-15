const LevelTag = ({ level, changeLevel }) => {

    const handleClick = () => {
        changeLevel(level);
    }

    return(
        <button type="button" className="tag-button" onClick={handleClick}>{level}</button>
    );
}

export default LevelTag;
