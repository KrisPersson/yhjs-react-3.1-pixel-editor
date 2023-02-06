import "./Editor.css"

import DrawingPanel from "../DrawingPanel/DrawingPanel"

import { ChromePicker } from 'react-color'
import { useState } from 'react'

function Editor({ dimensionX, dimensionY }) {
    const [currentColor, setCurrentColor] = useState('#000')
    const handleOnChange = (color) => {
        setCurrentColor(color)
    }
console.log(currentColor.hex)
    return (
        <section className="editor">
            <ChromePicker color={ currentColor } onChangeComplete={ handleOnChange } />
            <DrawingPanel x={ dimensionX } y={ dimensionY } currentColor={ currentColor } />
        </section>
    )
}

export default Editor