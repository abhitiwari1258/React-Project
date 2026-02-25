import React from 'react'
const Card = ({name,price,desc,image}) => {
  return (
    <div className="border border-gray-300 rounded-lg bg-gray-100 transition-transform duration-200 hover:scale-105 text-center m-2">
        <img className="w-30 mx-auto mb-3 py-2" src={image} alt="image" />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="font-bold text-green-600">{price}</p>
        <p className="text-sm text-gray-700">{desc}</p>
    </div>
  )
}

export default Card
