import { useState } from 'react'
import './App.css'

import Editor from './components/Editor/Editor'
import PickDimensions from './components/PickDimensions/PickDimensions'

function App() {

  const [dimensionX, setDimensionX] = useState(0)
  const [dimensionY, setDimensionY] = useState(0)


  function handleDimensionSelection(x, y) {

    setDimensionX(x)
    setDimensionY(y)

  }
// console.log(`dimensionX is: ${dimensionX}`)
  return (
    <div className="App">
      <h1>KP PIXEL EDITOR</h1>
      { dimensionX !== 0
      && dimensionY !== 0
      ? <Editor dimensionX={ dimensionX } dimensionY={ dimensionY } />
      : <PickDimensions handleDimensionSelection={ handleDimensionSelection } /> 
      }
    </div>
  )
}

export default App
