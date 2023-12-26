import React from 'react'

const Square = ({value, index, handleGameClick}) => {
  const handleClick = () => {
    handleGameClick(index)
  }


  return (
    <div className="square" onClick={handleClick}>{value}</div>
  )
}
export default Square
