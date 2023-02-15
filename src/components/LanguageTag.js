const LanguageTag = ({ language, addLanguage }) => {

    const handleClick = () => {
        addLanguage(language);
    }

    return(
        <button type="button" className="tag-button" onClick={handleClick}>{language}</button>
    );
}

export default LanguageTag;
