import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick =()=>{

        // console.log(" upper case was click" + text)
        let newText= text.toLocaleUpperCase()
        setText(newText)
        props.showAlert(" converted to uppercase " , "success")


    }
    const handleLowClick =()=>{

        // console.log(" upper case was click" + text)
        let newText= text.toLocaleLowerCase()
        setText(newText)
        // alert("jbhjf")
        props.showAlert(" converted  to lowercase" , "success")


    }
    const handleLClClick=()=>{

        // console.log(" upper case was click" + text)
        let newText= ""
        setText(newText)
        props.showAlert(" cleared" , "success")


    }
    const cpoy=()=>{

                   
            var copyText = document.getElementById("mybox");
           

            
            copyText.select();
            copyText.setSelectionRange(0, 99999); 

            navigator.clipboard.writeText(copyText.value);
            
            
            alert("Copied the text: " + copyText.value);


    }
    
    const handleOnChange =(event)=>{

        // console.log(" on change")
        setText(event.target.value)


    }
    const [text, setText] = useState("");
    // setText=(" new stste")
    return (
        <>
        <div  className="Ccontainer" style={{color: props.mode==="dark"?"white":"black"}}>




            <h1>{props.heading}</h1>
            <div className="mb-3">
               
                <textarea className="form-control my-5"  value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black"}} id="mybox" rows="8" 
                placeholder=" Enter the Text to Analyzie " ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert To lowwercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLClClick} >Clear</button>
            <button className="btn btn-primary mx-2" onClick={cpoy} >copy to clipboard</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleSpace} >Change word</button> */}

        </div>
        
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>

            <h2>
                Your Text summay
            </h2>
            <p>{text.trim().split(/\s+/).length} words, {text.replace(/ /g,"").length}characters</p>
            <p>{ 0.008*text.split(" ").length} Minutes to Read</p>
            
            <p>{text.split(" ").length - 1}  Spaces</p>
            <h3>Preview</h3>
            <p>{text.length>0? text: " kuch likho upar"}</p>
        </div>









        </>
    )
}
