import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        //console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick =()=>{
        //console.log("Uppercase was clicked")
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClearClick =()=>{
        //console.log("Uppercase was clicked")
        let newText="";
        setText(newText)
    }

    const handleOnChange =(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#13466e', color:props.mode==='light'?'black':'white', borderColor:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split (/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008*text.split (" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"No text to preview"}</p>

    </div>
    </>
  )
}
