import "./DrawingPanel.css"

import Row from "../Row/Row"





function DrawingPanel({ x, y, currentColor }) {

    function drawRows(y) {
        const rows = []
        console.log(y)
        for (let i = 0; i < y; i++) {
            rows.push(i)
        }
        // console.log(rows)
        return rows.map(row => <Row currentColor={ currentColor } key={ row } x={ x } />)
    }

    const rows = drawRows(y)

    console.log(rows)
    return (
        <section id='drawing-panel'>
            { drawRows(y) }
        </section>
    )
}

export default DrawingPanel