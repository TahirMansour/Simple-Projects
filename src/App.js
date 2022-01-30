import React from "react";
import "./App.css"
import Editor from "./Components/editor";
import Preview from "./Components/Preview";

function App () {
  return(
    <div className="App">
     <div>
          <Editor />
     </div>
    </div>
  )
}

export default App;