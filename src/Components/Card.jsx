import React, { useEffect, useState } from 'react'
import { RiUserFollowLine } from "react-icons/ri";


const Card = (player) => {
  


  return (
 <>
 
<div className='flex justify-center items-center m-5'>

  {
   player ? <>

     <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={player.player.avatar? player.player.avatar :'https://via.placeholder.com/400'} alt=""/>
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{player.player.name}</h5>
          <div className='flex justify-between flex-wrap'>
            <div className='flex justify-center gap-4 items-center'>
          <RiUserFollowLine className="text-gray-200"  />
          <p className='text-gray-200'>
            {player.player.followers ? player.player.followers:'No Followers'}
            </p>

            </div>
          <p className='text-gray-200 mx-10'>
          @{player.player.username}
            </p>
          </div>

          {player.player.title ?
          <p className='text-gray-400 mt-2 '>
          Title - {player.player.title}
            </p> :null
          }

       
            <p className='text-gray-500 my-2 '>
          Location - {player.player.location}
            </p>
          
        
      </div>
  </a>
   
   </>: null

  }

  
</div>

 </>
  )
}

export default Card