import Language from "./Language";

const Languages = ({ languages, removeLanguage }) => {
    if (languages.length === 0) {
        return;
    }
    return(
        <>
            {languages.map(language =>
            <Language 
                key={languages.indexOf(language)}
                language={language}
                removeLanguage={removeLanguage}
            />
            )}
        </>
    );
}

export default Languages;
