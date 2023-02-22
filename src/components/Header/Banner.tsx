import React from 'react'
export const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <img
          src='/images/marvel-logo.webp'
          alt='marvel logo'
          className='marvel-logo'
        />
        <h1 className='banner-title'>Wiki</h1>
      </div>
    </div>
  )
}
