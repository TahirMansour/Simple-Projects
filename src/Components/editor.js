import React , {useState} from "react";
import {BsFillArrowUpRightCircleFill} from "react-icons/bs"
import Preview from "./Preview";

function Editor(){

const [enteredText , setEnteredText] = useState('');
const [entireText  , setEntireText]  = useState(['']);

function textHandler (e){
    return(
        setEnteredText(e.target.value),
        checker()
    )
}

function handleKeyPress (e) {
    if(e.key === "Enter"){
        return console.log(`EnteredText = ${enteredText}`);
    }
}

function checker(){
    if(enteredText.startsWith("#1")){
        return setEntireText(<h1>{enteredText.substring(2)}</h1>)
    }if (enteredText.startsWith("#2")){
        return setEntireText(<h2>{enteredText.substring(2)}</h2>)
    }else if (enteredText.startsWith("#3")){
        return setEntireText(<h3>{enteredText.substring(2)}</h3>)
    }
    else if (enteredText.includes("*")){
       var bold = enteredText.slice(enteredText.indexOf("*"),enteredText.indexOf("**")).substring(1) 
       var theFistPartOfTheText = enteredText.slice(0,enteredText.indexOf('*'))
       var theLastPartOfTheText = enteredText.slice(enteredText.indexOf('**')).substring(2)
        return setEntireText(
        <div style={{"display" : "inline-block" , "flexDirection" : "row"}} >
        <p>{theFistPartOfTheText}</p>
        <b>{bold}</b>
        <p>{theLastPartOfTheText}</p>
        </div>)
    }
    else{
        return setEntireText(<p>{enteredText}</p>)
    }
}

return(
    <div className="App">
    <div className = "Editor">
    <div className="toolbar">
            <h3 style={{"margin" : 0 }}> Editor </h3>
            <BsFillArrowUpRightCircleFill />
    </div>
        <textarea
        placeholder="#1 for the h1 , #2 for h2 , #3 for h3 , and *for changing to bold**"
         className = "Textarea" 
         type = "text" 
         value = {enteredText}
         onChange={textHandler} 
         onKeyPress={handleKeyPress}
         />  
         
    </div>
    <Preview  input = {entireText} />
    </div>
    
)
}

export default Editor;

