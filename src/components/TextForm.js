import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPER CASE.","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case.","success")
    }
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared.","success")

    }
    const handleInverse = () => {
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i]
        }
        setText(newText);
        props.showAlert("Text Inversed.","success")

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);  //It selects the string from range 0 to 9999
        // text.setSelectionRange(0,text.value.length); //It selects the exact length of the string
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard.","success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed.","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const correctWordCount = () => {
        if (text.length === 0) {
            return 0;
        } else {
            return (text.split(" ").length)
        }
    }
    let c = correctWordCount()
    return (
        <>
            <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <div className='container'  >
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea placeholder='Enter Text Here' style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
                    </div>
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UPPER CASE</button>
                    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lower case</button>
                    <button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
                    <button className='btn btn-primary mx-2' onClick={handleInverse}>Inverse</button>
                    <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
                    <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
                <div className='container my-3' >
                    <h2>Your Text Summary</h2>
                    {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
                    <p>{c} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes Read</p>
                    <p>{text.length>0? text:"Enter Something in the text box above to preview it HERE."}</p>
                </div>
            </div>
        </>
    )
}
