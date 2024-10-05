import React, { useState } from 'react';

export default function About(props) {

// const [myStyle, setMyStyle] = useState(
//     {
//         color: 'white',
//         backgroundColor: 'black' 
//     }    
// )

// const [btntext, setBtnText] = useState("Enable Dark Mode")
     

//    const toggleStyle= ()=>{
//     if(myStyle.color === 'black'){
//         setMyStyle({
//             color: 'white',
//             backgroundColor: 'black',
//             border: "2px solid white",
//         })
//         setBtnText ("Enable Light Mode")
//     }
//     else{
//         setMyStyle({
//             color: 'black',
//         backgroundColor: 'white'
//         }) 
//         setBtnText ("Enable Dark Mode")
//     }
// }

    return (
                <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
                    <h1 className='my-3'>About Us </h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={{color: props.mode ==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>DESCRIPTION</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body " style={{color: props.mode ==='dark'?'white':'black'}}>
                Text tools are powerful software applications or online utilities designed to help users manipulate, analyze, and enhance written content. These tools serve various purposes, from simple tasks like counting characters and words, formatting text, or converting cases, to more complex functions like grammar and spelling checks, keyword analysis, and content optimization. Many text tools are used by writers, students, developers, and content creators to streamline their workflows and ensure the quality of their written material. 
                They are often integrated into larger platforms or exist as standalone apps, accessible from web browsers or through software installations.
                In the modern digital age, text tools are invaluable for ensuring precision and clarity in communication. Developers and content creators also rely on specialized text tools for coding purposes, such as JSON formatters, HTML minifiers, or Markdown editors, which help improve the readability and structure of their code. Whether you're preparing an essay, coding a website, or writing content for a blog, text tools can save time, minimize errors, and optimize the output for specific platforms or audiences.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{color: props.mode ==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>PHOTOS</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{color: props.mode ==='dark'?'white':'black'}}>
                    
                </div>
                </div>
            </div>
            
            <div className='container'>

            {/* <button onClick={toggleStyle} className="btn btn-primary my-3" >{btntext}</button>  */}
            {/* use btn btn-primary to create bootstrap style button. */}

            </div>

           

            
            </div>
                </div>
  )
}
