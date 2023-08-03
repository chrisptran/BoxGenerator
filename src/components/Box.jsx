import React from 'react'

const Box = (props) => {
    return (
        <div style={{display: 'flex'}}>
            {
                props.boxList.map((eachBox, i) => {
                    return (
                        <pre key={i} style={{

                            backgroundColor: eachBox,
                            width: '20px',
                            height: '20px',
                            margin: '4px'
                        }}></pre>
                    )
                })
            }
        </div>
    )
}

export default Box