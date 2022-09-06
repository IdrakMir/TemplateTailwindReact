import React from 'react'
import filter from '../../data/filters.json'

const Filters = () => {
  return (
    <>
    {filter.map((filter) => (
      <li className='my-1'><label><input type="checkbox" name="" id="" className='mr-1 w-6 h-6' /><span className='relative -top-1 pointer-events-none text-black text-lg'>{filter.category}</span></label></li>
    ))}

    </>
  )
}

export default Filters