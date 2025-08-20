import React from 'react'

const AgentCard = ({image, name, listings}) => {
  return (
    <section className="font-light border-color-gray p-4 lg:p-6">
        <div>
            <img className='w-full' src={image} alt="agent's image" />
        </div>

        <div className="flex justify-between items-center card-header-text pt-3 ">
            <p>{name}</p>
            <p>{listings}</p>
        </div>

        <div>
            <p className="paragraph-text">Real Estate Agent</p>
        </div>
        
        <button className="text-center lg:text-xl mt-3 py-3 border-color-gray w-full hover:bg-[#292929] hover:text-white">View Details</button>

    </section>
  )
}

export default AgentCard