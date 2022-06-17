import React, { useState } from 'react'


function Form(props) {

    const [text, setText] = useState("");
    const [border, setBorder] = useState('danger')

    const handleInput = (e) => {
        setText(e.target.value)
        if(setText===null){
            setBorder('danger')
        }else{
            setBorder('success')
        }
    }

    const hadleClear = () => {
        setText("");
    }

    const handleUp = (e) => {
        var newText = text.toUpperCase();
        setText(newText);
    }

    const hadleLow = () => {
        var newText = text.toLowerCase();
        setText(newText);
    }


    const handleCleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    return (
        <div className='container my-3' style={{color:props.mode==='dark'?'#fff':'#1b1b1d'}}>
            <h3 className='my-3' >Enter your Text </h3>
            <div className="mb-3 ">
                <textarea className={`form-control  border border-${border}` } style={{backgroundColor:props.mode==='dark'?'#1B1B1D':'#FFF',color:props.mode==='dark'?'#fff':'#1b1b1d'} }  id="text" rows="10" value={text} onChange={handleInput} ></textarea>
            </div>
            <div>
                <button className={`btn btn-${border} mx-2`} onClick={handleUp}> Convert to Uppercase</button>
                <button className={`btn btn-${border} mx-2`} onClick={hadleLow}> Convert to Lowercase</button>
                <button className={`btn btn-${border} mx-2`} onClick={handleCleSpace}> Remove Extra Space</button>
                <button className={`btn btn-${border} mx-2`} onClick={hadleClear}> Clear Text</button>
                <button className={`btn btn-${border} mx-2`} onClick={handleCopy}> Copy Text</button>
            </div>
          <div>
            <p className='my-3'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Character</p>
          </div>  
       

        </div>
    )
}

export default Form