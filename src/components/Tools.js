import Tool from "./Tool";

const Tools = ({ tools, removeTool }) => {
    if (tools.length === 0) {
        return;
    }
    return(
        <>
            {tools.map(tool =>
            <Tool 
                key={tools.indexOf(tool)}
                tool={tool}
                removeTool={removeTool}
            />
            )}
        </>
    );
}

export default Tools;
