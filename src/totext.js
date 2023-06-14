import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {useState} from "react";


const App = () => {

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    function clearBox(clrr){
        document.getElementById(clrr).innerHTML = "";
    }

    return (
        <okay>
            <div className="container">
                <h2>Speech To Text Converter</h2>
                <br/>

                <div className="main-content" id="clrr">
                    {transcript}
                </div>

                <div className="btn-style" id="btnn">
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                    <button onclick="clearBox()" >Clear</button>
                </div>

            </div>

        </okay>
    );
};

export default App;