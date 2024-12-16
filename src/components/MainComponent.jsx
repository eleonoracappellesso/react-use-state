import { useState } from 'react'
import languages from '../data/languages';

function MainComponent() {
    const languagesList = [...languages];

    return (
        <>
            <main className='container'>
                <section>
                    <ul className='d-flex align-items-center flex-wrap'>
                        {languagesList.map((language) => {
                            return <li key={language.id} className='text-bg-warning my-4'>{language.title}</li>
                        })}
                    </ul>
                </section>
            </main>
        </>
    )
}

export default MainComponent;