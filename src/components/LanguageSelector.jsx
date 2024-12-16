import { useState } from 'react'
import languages from '../data/languages';

function LanguageSelector() {
    const languagesList = [...languages];
    const [activeLanguage, setActiveLanguage] = useState(null);
    return (
        <>
            <div>
                <ul className='d-flex align-items-center flex-wrap'>
                    {languagesList.map((language) => {
                        return (<li key={language.id} className={`my-4 text-bg-${activeLanguage?.id === language.id ? 'warning' : 'primary'}`}
                            onClick={() => setActiveLanguage(language)} >
                            {language.title}
                        </li>
                        )
                    })}
                </ul>
            </div>
            <div className="card card-body">
                {activeLanguage ? (
                    <>
                        <h2>{activeLanguage.title}</h2>
                        <p>{activeLanguage.description}</p>
                    </>
                ) : (
                    <p>Nessun linguaggio selezionato</p>
                )}
            </div>
        </>
    )
}

export default LanguageSelector;