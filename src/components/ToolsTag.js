import ToolTag from "./ToolTag";

const ToolTags = ({ tools, addTool }) => {
    if (tools.length === 0) {
        return;
    }
    return(
        <span>
            {tools.map(tool =>
            <ToolTag 
                key={tools.indexOf(tool)}
                tool={tool}
                addTool={addTool}
            />
            )}
        </span>
    );
}

export default ToolTags;
