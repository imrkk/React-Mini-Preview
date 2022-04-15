
import './App.css'
import React,{useState} from 'react';
import { Preview } from "./Preview";



function App(){

const [content, setContent] = useState(" INDIA ");
  const [padding, setPadding] = useState(15);
  const [fontSize, setFontSize] = useState(20);


  return (
    <div id="main">
      <div>
        <label>Content </label>
        <input type="text" value={content} onChange={(e)=>setContent(e.target.value)} /> <br />

        <label>padding </label>
        <input type="number" value={padding}  onChange={(e) => setPadding(e.target.value)} /> <br/>

         
        <label>fontSize </label>
        <input type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} /> <br /> <br />
          
        
        
      </div>
      <Preview padding={padding + "px"} fontSize={fontSize + "px"} content={content}/>  
      
    </div>
  )
}


export default App

