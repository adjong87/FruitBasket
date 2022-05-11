import './App.css';
import React, {useState} from 'react';


function App() {
    const [bananaCounter, setBananaCounter] = useState(0)
    const [aambeienCounter, setAambeienCounter] = useState(0)
    const [appelCounter, setAppelCounter] = useState(0)
    const [kiwiCounter, setKiwiCounter] = useState(0)
    const [voornaam, setVoornaam] = useState('')
    const [achternaam, setAchternaam] = useState('')
    const [leeftijd, setLeeftijd] = useState('')
    const [postcode, setPostcode] = useState('')
    const [bezorgFrequentie, setBezorgFrequentie] = useState('')
    const [bezorgMoment, setBezorgMoment] = useState('overdag')
    const [opmerking, setOpmerking] = useState('')
    const [akkoord, setAkkoord] = useState(false)

    function handleReset() {
        setBananaCounter(0);
        setAambeienCounter(0);
        setAppelCounter(0);
        setKiwiCounter(0);
    }

    function handleSubmit(e) {
        console.log({bananaCounter}, {aambeienCounter}, {appelCounter}, {kiwiCounter}, {voornaam}, {achternaam}, {leeftijd}, {postcode}, {bezorgFrequentie}, {bezorgMoment}, {opmerking});
        e.preventDefault();
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <p>Aambeien</p>
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


            <form>
                <label htmlFor="voornaam">Voornaam</label>
                <input type="text"
                       id="voornaam"
                       value={voornaam}
                       onChange={(e) => setVoornaam(e.target.value)}/>
                <label htmlFor="achternaam">Achternaam</label>
                <input type="text"
                       id="achternaam"
                       value={achternaam}
                       onChange={(e) => setAchternaam(e.target.value)}/>
                <label htmlFor="leeftijd">Leeftijd</label>
                <input type="number"
                       id="leeftijd"
                       placeholder="0"
                       value={leeftijd}
                       onChange={(e) => setLeeftijd(e.target.value)}/>
                <label htmlFor="postcode">Postcode</label>
                <input type="text"
                       id="postcode"
                       value={postcode}
                       onChange={(e) => setPostcode(e.target.value)}/>
                <label htmlFor="bezorgfrequentie">Bezorgfrequentie</label>
                <select name="bezorgfrequentie"
                        id="bezorgfrequentie"
                        value={bezorgFrequentie}
                        onChange={(e) => setBezorgFrequentie(e.target.value)}>
                    <option value="wekelijks">Iedere week</option>
                    <option value="tweewekelijks">Iedere twee weken</option>
                    <option value="maandelijks">Iedere maand</option>
                </select>
                <span>
                    <input
                        type="radio"
                        name="bezorgmoment"
                        id="overdag"
                        value="overdag"
                        checked={bezorgMoment === "overdag"}
                        onChange={(e) => setBezorgMoment(e.target.value)}
                    />
                    <label htmlFor="overdag">Overdag</label>
                    <input
                        type="radio"
                        name="bezorgmoment"
                        id="avond"
                        value="avond"
                        checked={bezorgMoment === "avond"}
                        onChange={(e) => setBezorgMoment(e.target.value)}
                    />
                    <label htmlFor="avond">'s Avonds</label>
                </span>
                <label htmlFor="comment">Opmerkingen</label>
                <textarea id="comment"
                          name="comment"
                          value={opmerking}
                          onChange={(e) => setOpmerking(e.target.value)}
                >
                    Plaats hier eventuele opmerkingen
                </textarea>
                <span>
                    <input type="checkbox"
                           id="akkoord"
                           checked={akkoord}
                           onChange={() => setAkkoord(!akkoord)}
                    />
                    <label htmlFor="akkoord">Ik ga akkoord met de voorwaarden</label>
                </span>

            </form>
            <button id="submit"
                    value="submit"
                    disabled={!akkoord}
                    type="submit"
                    onClick={handleSubmit}>
                Verzend
            </button>
        </>
    );
}

export default App;
