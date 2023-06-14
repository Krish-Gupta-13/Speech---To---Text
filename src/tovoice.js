import React, {useState} from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';

function App() {
  
  const [text, setText] = useState('');
  const {speak} = useSpeechSynthesis();

  const handleonclick = () =>{
    speak({text:text})
  };
  
  return (
   
  <div className="banja">
     <container>
        <segment>

          <h1>Text To Speech Converter</h1>
          <div className="para">
          <textarea className='textAreaStyle' onChange={(e) => {setText(e.target.value)}}></textarea> 
          </div>
 
           <button className='buttonStyle' onClick={()=>{handleonclick()}}>Text To Speech</button> 

        </segment>
    </container>
    </div> 
  
  );
}

export default App;
