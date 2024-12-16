import { useState } from 'react'
import languages from '../data/languages';

function MainComponent() {
    const languagesList = [...languages];
    const [activeLanguage, setActiveLanguage] = useState(languagesList[0]);
    return (
        <>
            <main className='container'>
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
            </main>
        </>
    )
}

export default MainComponent;