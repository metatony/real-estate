import React from 'react'

const AgentCard = (props) => {
  return (
    <section className="font-light border border-[#E5E5E5] rounded-2xl p-4  lg:p-6">
        <div>
            <img className='w-full' src={props.image} alt="agent's image" />
        </div>

        <div className="flex justify-between items-center pt-3 lg:text-xl ">
            <p>{props.name}</p>
            <p>{props.listings}</p>
        </div>

        <div>
            <p className="text-[#A4A4A4]">Real Estate Agent</p>
        </div>
        
        <button className="text-center lg:text-xl mt-3 py-3 border border-[#E5E5E5] w-full rounded-xl hover:bg-[#292929] hover:text-white">View Details</button>

    </section>
  )
}

export default AgentCard