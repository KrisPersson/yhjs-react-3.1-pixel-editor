import "./Pixel.css"

import { useState } from 'react'

function Pixel({ currentColor }) {

    const [localColor, setLocalColor] = useState('transparent')

    function handleClick() {
        setLocalColor(currentColor.hex)
    }

    return (
        <article 
        onClick={ handleClick } 
        className='pixel' 
        style={{background: `${ localColor }`}}>
            
        </article>
    )
}

export default Pixel