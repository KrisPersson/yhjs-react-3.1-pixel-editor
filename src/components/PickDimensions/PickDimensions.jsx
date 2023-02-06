import "./PickDimensions.css"

import { useState } from 'react'


function PickDimensions({ handleDimensionSelection }) {

    const [inputX, setInputX] = useState(0)
    const [inputY, setInputY] = useState(0)

    function handleInput(event) {
        const target = event.target
        let newValue = 0

        if (Number(target.value) > 35) {
            newValue = 35
        } else {
            newValue = Number(target.value)
        }

        if (target.id === 'input-x') {
            setInputX(newValue)
        } else {
            setInputY(newValue)
        }
    }

    return (
        <form onSubmit={ () => handleDimensionSelection(inputX, inputY) } className="pick-dimensions-container">
            <h2>Pick dimensions</h2>
            <label>x <input id='input-x' onChange={ (event) => handleInput(event) } type="number" min='0' max='35' /></label>
            <label>y <input id='input-y' onChange={ (event) => handleInput(event) } type="number" min='0' max='35' /></label>
            <button type='submit'>Start Drawing</button>
        </form>
    )
}

export default PickDimensions