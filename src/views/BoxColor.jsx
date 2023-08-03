import React, {useState} from 'react'
import Color from '../components/Color'
import Box from '../components/Box'

const BoxColor = () => {

    const [currentBox, setCurrentBox] = useState('')
    const [boxList, setBoxList] = useState([])

    const receiveNewBox = (newBox) => {
        setCurrentBox(newBox)
        setBoxList([...boxList, newBox])

    }

    return (
        <div>
            <Color onNewBox={receiveNewBox} />
            <Box box={currentBox} boxList={boxList} />
        </div>
    )
}

export default BoxColor