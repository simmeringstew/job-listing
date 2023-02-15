import ToolTag from "./ToolTag";

const ToolTags = ({ tools, addTool }) => {
    if (tools.length === 0) {
        return;
    }
    return(
        <>
            {tools.map(tool =>
            <ToolTag 
                key={tools.indexOf(tool)}
                tool={tool}
                addTool={addTool}
            />
            )}
        </>
    );
}

export default ToolTags;
