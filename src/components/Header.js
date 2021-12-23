import React from 'react'
import { BsFillMoonFill} from "react-icons/bs"
function Header({handleToggleDarkMode}) {
    return (
        <div className ="header">
            <h1>Notes</h1>
            <BsFillMoonFill
            onClick ={()=>
                handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)}
            className ="save">Toggle</BsFillMoonFill>
            
        </div>
    )
}

export default Header
