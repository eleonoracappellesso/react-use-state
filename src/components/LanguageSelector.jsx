import { useState } from 'react'
import languages from '../data/languages';

function LanguageSelector() {
    const languagesList = [...languages];
    const [activeLanguage, setActiveLanguage] = useState(languagesList[0]);
    return (
        <>
            <div>
                <ul className='d-flex align-items-center flex-wrap'>
                    {languagesList.map((language) => {
                        return (<li key={language.id} className={`my-4 text-bg-${activeLanguage.id === language.id ? 'warning' : 'primary'}`}
                            onClick={() => setActiveLanguage(language)} >
                            {language.title}
                        </li>
                        )
                    })}
                </ul>
            </div>
            <div className="card card-body">
                <h2>{activeLanguage.title}</h2>
                <p>{activeLanguage.description}</p>
            </div>
        </>
    )
}

export default LanguageSelector;