
import { useState } from "react";
import NormalMode from "./components/NormalMode";
import TerminalMode from "./components/TerminalMode";
// Main portfolio page composition.
const App = () => {
    const [isNormalMode, setIsNormalMode] = useState(true);
    return (
        <>
        <div className="mode-toggle">
            
            <button onClick={()=>setIsNormalMode(prev=>!prev)} draggable={true} className="mode-toggle-btn">
               {isNormalMode?<p> &gt; <span>_</span> switch to terminal</p>:<p><span>X</span> exit terminal</p>} 
            </button>
             
        </div>
        {isNormalMode ? <NormalMode/>:<TerminalMode/>}
        </>
    );

}
export default App;