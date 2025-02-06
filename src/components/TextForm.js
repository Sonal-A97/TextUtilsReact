import React, { useState } from 'react'

export default function TextForm(props) {
  console.log(props)
    const [text, setText] = useState("Enter Text here...");
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick =() => {
      setText(text.toLocaleLowerCase());
    }

    const handleClearText = () => {
      setText('');
    }

    const handleColorChange = (event) => {
      let f = document.getElementById('myBox');
      console.log(f)
      f.style.color = 'red';
      setText(text);
    }

    const handleCopyText = () => {
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/); 
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
      
        setText(event.target.value);
    }
    let myStyle = {color: 'white', backgroundColor: '#232B2B'}
    if (props.mode === 'dark') {
         myStyle = {color: 'white', backgroundColor: '#232B2B'}
    } else {
         myStyle = {color: 'black', backgroundColor: 'white'}

    }

  return (
    <>
    <div className="container" style={myStyle}>
    <h1  >{props.heading}</h1>
    {/* <label for="myBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control mb-2" id="myBox" rows="3" value={text} onChange={handleOnChange}></textarea>
    <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary m-2" onClick={handleClearText}>Clear Text</button>
    <button className="btn btn-primary m-2" onClick={handleColorChange}>Change Color</button>
    <button className="btn btn-primary m-2" onClick={handleCopyText}>Copy Text</button>
    <button className="btn btn-primary m-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-2" style={myStyle}>
        <h1 >Your Text Summary</h1>
        <p>{text === '' ? 0 : text.trimEnd().split(' ').length} words, {text.length} characters</p> 
        <p>{text.split(" ").length * 0.08 } Minutes read.</p>
        <h2 >Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
