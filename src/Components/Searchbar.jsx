import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import ClubCard from './ClubCard'

const Searchbar = () => {

    // const  [search , setSearch] = useState('')
    const [clubData, setClubData]= useState()
    const [playerData, setPlayerData]= useState()

 

    const getClubData = async(clubName='italys-finest')=>{
        const {data} = await axios.get(`https://api.chess.com/pub/club/${clubName}` )
        // console.warn(clubs,'clubs<<<<')
        setClubData(data)
    }

    const getPlayerData = async(player)=>{
        const playerName = player.split(" ").join("")
        console.log('>>>>>>>>>>>>>>>>.',playerName)
        const {data} = await axios.get(`https://api.chess.com/pub/player/${playerName}` )
        setPlayerData(data)
        return data
    }

    const submitForm = (e)=>{
        e.preventDefault()
        let val = e.target.searchqr.value
        // setSearch(val)
        getPlayerData(val)
        getClubData(val)
     }


    useEffect(()=>{   

        getClubData()
        getPlayerData()

    },[])
        console.log("club",clubData)
        console.log(playerData)


  return (
  <>
  <div className='flex flex-col gap-6 justify-center  w-4/6'>
<div id='search-bar'>
<form onSubmit={(e)=>submitForm(e)}>
    <div className="flex">

   

        <div className="relative w-full">
            <input type="search" id="search-dropdown"  name='searchqr'  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for chess" required />
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
</div>

<div id='cards'>
    {playerData?<>
    <Card player={playerData}/>
    
    </>:null}

</div>

<div id='cards'>
    {clubData ?<>
    <ClubCard club={clubData}/>   
    </>:null}

</div>

<div>

    {/* {clubData? <>
    {
        clubData.clubs[0].slice(0,4).map((club)=>
           (<h1>{club.name}</h1>))
    }
    </>:null} */}
</div>

  </div>




  </>
  )
}

export default Searchbar