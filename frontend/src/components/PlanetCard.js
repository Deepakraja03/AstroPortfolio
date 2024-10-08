import React from 'react'


const PlanetCard = ({ imgSrc, title, description, imgWidth, imgHeight }) => {
  return (
    <div className='relative top-[50%] mb-20 px-5'>
      <div className=' sm:pl-20 md:pl-40 lg:pl-60 absolute top-[-20%] sm:top-[-30%]'>
        <img
          src={imgSrc}
          style={{ width: imgWidth, height: imgHeight }}
          alt={title}
        />
      </div>
      <div className='border-2 rounded-lg sm:mx-20 md:mx-40 lg:mx-60 px-10 py-10 border-amber-500'>
        <div>
          <h1 className='reddit-sans font-semibold text-xl pl-8'>{title}</h1>
          <p className='quicksand-font pl-8'>{description}</p>
        </div>
      </div>
    </div>
  )
}

  

export default PlanetCard