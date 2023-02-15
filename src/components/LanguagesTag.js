import LanguageTag from "./LanguageTag";

const LanguagesTag = ({ languages, addLanguage }) => {
    if (languages.length === 0) {
        return;
    }
    return(
        <span>
            {languages.map(language =>
            <LanguageTag 
                key={languages.indexOf(language)}
                language={language}
                addLanguage={addLanguage}
            />
            )}
        </span>
    );
}

export default LanguagesTag;
