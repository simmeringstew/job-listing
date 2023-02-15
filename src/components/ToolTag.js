const ToolTag = ({ tool, addTool }) => {

    const handleClick = () => {
        addTool(tool);
    }

    return(
        <button type="button" className="tag-button" onClick={handleClick}>{tool}</button>
    );
}

export default ToolTag;
