import "./Row.css"

import Pixel from "../Pixel/Pixel"


function Row({ x, currentColor }) {

    function drawPixels(x) {
        const pixels = []

        for (let i = 0; i < x; i++) {
            pixels.push(i)
        }

        return pixels.map(pixel => <Pixel currentColor={ currentColor } key={ pixel }  />)
    }

    return (
        <article className="row">
            { drawPixels(x) }
        </article>
    )
}

export default Row