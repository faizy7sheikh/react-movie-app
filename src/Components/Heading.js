import React from 'react'

const Heading = (props) => {
  return (
    <div>
        <div className='row my-2'>
            <h4>{props.heading}</h4>
        </div>
    </div>
  )
}

export default Heading