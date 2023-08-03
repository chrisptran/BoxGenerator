import React, {useState} from 'react'
import '../index.css';

const Color = (props) => {

    const [box, setBox] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewBox(box)
    }

    return (
        <div className='colorBox'>
            <h1 className='color'>Color</h1>
            <form className='formBox' onSubmit={handleSubmit}>
                <textarea
                    rows="2"
                    cols="10"
                    onChange={e => setBox(e.target.value)}
                    value={box}
                ></textarea>
                <input type='submit' value='Add Box' />
            </form>
        </div>
    )
}

export default Color