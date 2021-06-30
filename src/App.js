import './App.css';
import { useState, useEffect } from 'react';
import Navigation from './components/navigation/navigation';
import Home from './pages/home/home';
import Dictionaries from './pages/dictionaries/dictionaries';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from './database/firebase';
import Login from './pages/login/login';
import Loading from './components/loading/loading';
import TranslateProviderComponent from './providers/TranslateProvider';
import Dictionary from './pages/dictionaries/dictionary';

function App() {
    const [user, loading] = useAuthState(auth);
    const [dictionaryId, setDictionaryId] = useState(false);
    const [page, setPage] = useState({
        Dictionaries: false,
        Dictionary: false,
        Home: true
    });

    useEffect(() => {
        if (user) {
            db.collection('users').doc(user.uid).set(
                {
                    email: user.email,
                    photoUrl: user.photoURL
                },
                { merge: true }
            );
        }
    }, [user]);

    if (loading) return <Loading />;
    if (!user) return <Login />;

    const onPageChange = (pageKey) => {
        const updatePages = { ...page };
        Object.keys(page).forEach((key) => {
            if (key === pageKey) {
                updatePages[pageKey] = true;
            } else {
                updatePages[key] = false;
            }
        });
        setPage(updatePages);
    };

    const setSingleDict = (id) => {
        console.log('hi');
        setDictionaryId(id);
        onPageChange('Dictionary');
    };

    return (
        <TranslateProviderComponent>
            <div className="">
                <Navigation onPageChange={onPageChange} pages={page} user={user} />
                <div className="container">
                    {page.Home && <Home user={user} />}
                    {page.Dictionaries && (
                        <Dictionaries user={user} setSingleDict={setSingleDict} />
                    )}
                    {page.Dictionary && <Dictionary id={dictionaryId} />}
                </div>
            </div>
        </TranslateProviderComponent>
    );
}

export default App;
