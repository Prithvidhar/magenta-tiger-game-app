'use client';
import { useCallback, useState } from 'react';
import Chessy from './chess'
// Usage
function HumanVSRandom() {
    // Call the hook which returns, current value and the toggler function
    const [isRandom, setIsRandom] = useToggle(false);
    
    return (
        <div> 
        <button onClick={setIsRandom}>{isRandom ? 'Random mode active! (Click again to toggle off)': 'RandomMode (Black is now a CPU player)'}</button>
        <Chessy randy={isRandom}/>
        </div>
       
    );
}
export default HumanVSRandom;
// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
    // Initialize the state
    const [state, setState] = useState(initialState);
    
    // Define and memorize toggler function in case we pass down the component,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle]
}