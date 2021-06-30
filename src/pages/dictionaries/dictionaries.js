import { db } from '../../database/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Link } from '@material-ui/core';

export default function Dictionaries({ user, setSingleDict }) {
    const dictListRef = db.collection('dictionary').where('user', '==', user.email);
    const [dictListSnapshot, loading] = useCollection(dictListRef);

    if (loading) return 'loading...';

    const langCode = {
        en: 'English',
        ar: 'Arabic',
        zh: 'Chinese',
        fr: 'French',
        de: 'German',
        hi: 'Hindi',
        ga: 'Irish',
        it: 'Italian',
        ja: 'Japanese',
        ko: 'Korean',
        pt: 'Portuguese',
        ru: 'Russian',
        es: 'Spanish'
    };

    return (
        <div className="container pt-5">
            <div className="dict-list-title-cont">
                <p className="dict-list-title">Dictionaries</p>
            </div>
            <div className="row">
                {dictListSnapshot?.docs.length > 0 ? (
                    dictListSnapshot?.docs.map((dict, index) => (
                        <div className="col-sm">
                            <Link
                                className="dictionary-wrap"
                                onClick={() => setSingleDict(dict.data().id)}
                                key={index}>
                                <div className="container">
                                    <div className="book">
                                        <div className="front">
                                            <div className="cover">
                                                <p className="num-up">{dict.data().date}</p>
                                                <p className="author">
                                                    {langCode[dict.data().from]} -{' '}
                                                    {langCode[dict.data().to]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="no-dict-msg">
                        <p>You dont have any dictionary yet</p>
                    </div>
                )}
            </div>
        </div>
    );
}
