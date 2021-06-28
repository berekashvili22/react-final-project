import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    const getData = async () => {
        let fromLang = 'en';
        let toLang = 'no';
        let text = 'something to translate';

        const API_KEY = ['AIzaSyCHfnN-dZkU_NjzI767Z1rgCev0coiUY90'];

        let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
        url += '&q=' + encodeURI(text);
        url += `&source=${fromLang}`;
        url += `&target=${toLang}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((res) => res.json())
            .then((response) => {
                console.log('response from google: ', response);
            })
            .catch((error) => {
                console.log('There was an error with the translation request: ', error);
            });
    };

    console.log(getData());

    return <h1>hi react</h1>;
}

export default App;
