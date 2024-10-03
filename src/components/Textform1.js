import React, {useState} from 'react'

// const [text, setText] = useState('enter text here');

export default function Textform1(props) {

  const handleupclick = ()=>{
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase ();
    setText(newtext)
  }

  const handledownclick = ()=>{
    console.log("lowercase was clicked" + text);
    let newtext = text.toLowerCase ();
    setText(newtext)
  }

// this function lets computer to speak the words you type.
const handlespeakclick = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

  const handleclearclick = ()=>{
    console.log("clear was clicked" + text);
    let newtext = ''; // text clear garna kunai built in function use garirakhnu pardaina. '' matrai rakhe pugcha.
    setText( newtext)
  }

  const handleOnChange = (event)=>{ //yo function create bhayesi maile text form bhitra lekhna milxa.
    console.log("on changed");
    setText(event.target.value) //esle mero default settext ma raheko value lai change garna paye or 
                                // textform bhitra default value lai overwrite garna paye.
  }
  
  const [text, setText] = useState(''); // text lai function "setText" banayera useState hook use gareko.
    // settext ko value jun thau ma chainxa, rakhera value update garna milxa.
    // ways to change the value of text 
    // text=(new text); is the wrong way of changing the text, you need to use the function made.
    // setText("new text"); is the correct way of changing the text as you used the function 'setText'

  return (
    <>
    <div className="container" >
        <h1>{props.heading} </h1>
    <div className="mb-3">
    {/* <label for="textHere" className="form-label">Enter your text below:</label> */}
    <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white'}} id="textHere" rows="6"></textarea>
    </div>
    <button className="btn primary mx-2" onClick={handleupclick} >Convert to Uppercase</button>
    <button className="btn primary mx-8" onClick={handledownclick} >Convert to Lowercase</button>
    <button className="btn primary mx-8" onClick={handlespeakclick} >Speak</button>
    <button className="btn primary mx-8" onClick={handleclearclick} >Clear Text</button>

    </div>

    <div className="container my-3">
      <h3 >Text calculations:</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p> 
      <p>time taken to read your text: {0.008 * text.split(" ").length} </p> 
      {/* 0.008 * text.split(" ").length garera yeuta word padhna lagne time calculate gareko */}
      {/* text.split(" ").length le text area ma bhayeko words count garcha */}
      {/* //text.length le text area ma bhayeko characters count garcha  */}

    </div>
    </>
  )
}
