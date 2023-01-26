import React from 'react'

const ClubCard = (club) => {
    console.log('clubCard', club)

  return (
    <div className="flex justify-center">

{/* <!-- component --> */}
<div className="max-w-md  py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    {
        club?
  <div className="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={club.club.icon} />
  </div> : null
    }
  <div>
    <h2 className="text-gray-800 text-3xl font-semibold">{club.club.name}</h2>
    <p className="mt-2 text-gray-600">
        {club.club.description}
        </p>

  </div>
  <div>
    <a className="text-indigo-600" href={club.club.join_request}>Join</a>
    <p>@{club.club.id}</p>
    
  </div>
  <div className="flex justify-end mt-4">
    <a href={club.club.url} className="text-xl font-medium text-indigo-500">Visit</a>
  </div>
</div>
    </div>
  )
}

export default ClubCard