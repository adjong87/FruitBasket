import './App.css';
import React, {useState} from 'react';


function App() {
    const [bananaCounter, setBananaCounter] = useState(0)
    const [aambeienCounter, setAambeienCounter] = useState(0)
    const [appelCounter, setAppelCounter] = useState(0)
    const [kiwiCounter, setKiwiCounter] = useState(0)

    function handleReset() {
        setBananaCounter(0);
        setAambeienCounter(0);
        setAppelCounter(0);
        setKiwiCounter(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <span><p>Aambeien</p>
        <button
            type="button"
            onClick={() => setAambeienCounter(aambeienCounter - 1)}
            disabled={aambeienCounter === 0}
        >
            -
        </button>
                {aambeienCounter}
                <button
                    type="button"
                    onClick={() => setAambeienCounter(aambeienCounter + 1)}>
            +
        </button>
        </span>
            <p>Bananen</p>
            <button
                type="button"
                onClick={() => setBananaCounter(bananaCounter - 1)}
                disabled={bananaCounter === 0}>

                -
            </button>
            {bananaCounter}
            <button
                type="button"
                onClick={() => setBananaCounter(bananaCounter + 1)}
            >
                +
            </button>

            <p>Appels</p>
            <button
                type="button"
                onClick={() => setAppelCounter(appelCounter - 1)}
                disabled={appelCounter === 0}
            >
                -
            </button>
            {appelCounter}
            <button
                type="button"
                onClick={() => setAppelCounter(appelCounter + 1)}>
                +
            </button>

            <p>Kiwi's</p>
            <button
                type="button"
                onClick={() => setKiwiCounter(kiwiCounter - 1)}
                disabled={kiwiCounter === 0}>
                -
            </button>
            {kiwiCounter}
            <button
                type="button"
                onClick={() => setKiwiCounter(kiwiCounter + 1)}>
                +
            </button>
            <button
                type="button"
                onClick={handleReset}>
                reset
            </button>

        </>
    );
}

export default App;
