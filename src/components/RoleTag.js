const RoleTag = ({ role, changeRole }) => {

    const handleClick = () => {
        changeRole(role);
    }

    return(
        <button type="button" className="tag-button" onClick={handleClick}>{role}</button>
    );
}

export default RoleTag;
