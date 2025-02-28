import React from 'react'

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className='flex space-x-2'>
        <img style={{borderRadius: '0 200px 200px 200px' }} src={image} alt="" className='w-[100px]'/>
        <div>
            <h3 className='text-purple-600 font-bold'>{name}-------</h3>
            <p>{recipe}</p>
        </div>
        <p className='text-yellow-500'>${price}</p>
    </div>
  )
}

export default MenuItem