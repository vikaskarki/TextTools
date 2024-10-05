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
        <h1 style={{color: props.mode ==='dark'?'white':'black'}} >{props.heading} </h1>
    <div className="mb-3">
    {/* <label for="textHere" className="form-label">Enter your text below:</label> */}
    <textarea className="form-control" value= {text} onChange={handleOnChange} style={{
              color: props.mode === 'dark' ? 'white' : 'black',
              backgroundColor: props.mode === 'dark' ? '#333' : 'white',
            }} id="myBox" rows="6"></textarea>
    </div>
    <button className="btn primary mx-2" onClick={handleupclick} style={{color: props.mode ==='dark'?'white':'black'}} >Convert to Uppercase</button>
    <button className="btn primary mx-8" onClick={handledownclick} style={{color: props.mode ==='dark'?'white':'black'}}>Convert to Lowercase</button>
    <button className="btn primary mx-8" onClick={handlespeakclick}style={{color: props.mode ==='dark'?'white':'black'}} >Speak</button>
    <button className="btn primary mx-8" onClick={handleclearclick} style={{color: props.mode ==='dark'?'white':'black'}}>Clear Text</button>

    </div>

    <div className="container my-3"  >
      <h3 style={{color: props.mode ==='dark'?'white':'black'}}>Text calculations: </h3>
      <p style={{color: props.mode ==='dark'?'white':'black'}}>{text.split(" ").length} words and {text.length} characters</p> 
      <p style={{color: props.mode ==='dark'?'white':'black'}}>Time taken to read your text: {0.008 * text.split(" ").length} </p> 
      {/* 0.008 * text.split(" ").length garera yeuta word padhna lagne time calculate gareko */}
      {/* text.split(" ").length le text area ma bhayeko words count garcha */}
      {/* //text.length le text area ma bhayeko characters count garcha  */}

    </div>
    </>
  )
}
