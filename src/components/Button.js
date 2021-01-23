import React from 'react'

const Button = ({btnText, onClick, className, disable, loading, children}) => {
  return (
    <button onClick={onClick} className={className} disable={disable} loading={loading} >
      { btnText }
      { children }
    </button>
      
    
  )
}

export default Button
