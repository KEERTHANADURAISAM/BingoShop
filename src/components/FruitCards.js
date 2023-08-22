import React from 'react'

const FruitCards = ({item}) => {
    console.log(item)
  return (
    <div>
     <p>{item.name}</p>
       
    </div>
  )
}

export default FruitCards