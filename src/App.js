import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Homepage, PageNotFound } from './components';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next'
import { Suspense } from 'react';

function App() {

    const { t } = useTranslation();

    return (
        // <Suspense fallback="Loading..">
            <div className='app'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>
                    <div className='routes'>
                        <Routes>
                            <Route exact path='/' element={<Homepage/>} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </div>
                    <div className='footer'>
                    
                    </div>
                </div>
            </div>
        // </Suspense>
  );
}

export default App;
