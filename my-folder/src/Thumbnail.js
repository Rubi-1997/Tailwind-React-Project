import React from 'react'

const Thumbnail = () => {
  return (
    <div className='flex justify-center'>
      <div className='md:flex p-4'>
      <div><img className='h-48 w-full  md:rounded-s md:rounded-e-none sm:rounded md:h-full md:w-48 object-cover' src="https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img></div>
      <div className=' bg-gray-200 rounded-e-lg p-3'><h1 className='uppercase md:text-red-400'>sweet ice-cream</h1>
      <p className='hover:text-red-500'>lorem img elements must have an img elements must have animg elements must have animg elements must have an lorem img elements must have an img elements must have animg elements must have animg elements must have an</p>
      <p className='text-slate-400'>15/dec</p>
      </div>
      </div>
    </div>
  )
}

export default Thumbnail