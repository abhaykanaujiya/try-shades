import React from 'react'

const Form = (props) => {
  return (
    <div className='form-container'>
      <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} className={props.className} />
      
    </div>
  )
}

export default  Form