import React , {useState} from 'react';
import randomColor from 'randomcolor';
import Quotes from './Quotes';
import './App.css';

function App() {

  const quote = Quotes;
  const color = randomColor();
  const [counter , setCounter] = useState(0)
  const [myColor , setMyColor] = useState('')
 
  const onClick = () => {
    if(counter < quote.length -1)
   { 
     return(
    setCounter(counter + 1),
    setMyColor(color)
   )}
   else{
    return setCounter(0)
   }
  }

  return (
    <div className="App" style={{"backgroundColor" : myColor}}>
     <div className='Container'>
      <div className='InsideContainer'>
      <h2 style={{"color" : myColor}}>{quote[counter].name}</h2>
        <h6 id='author' style={{"color" : myColor}}>-{ quote[counter].author}</h6>
          <button onClick={onClick} style={{"backgroundColor":myColor , color:"white" , "borderRadius" : 5}}>New Quote</button>
       </div> 
     </div>
    </div>
  );
}

export default App;
