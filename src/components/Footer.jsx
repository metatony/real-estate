import React from 'react'
import { desktopLogoUrl } from '../constants/images'
import footerMenu from '../constants/footerMenu'

const Footer = () => {
  return (
    <footer className='py-10 lg:py-20'>
      <section className='grid grid-cols-1 lg:grid-cols-8 text-lg lg:text-xl w-full'>
        
        {/* logo area */}
        <div className='flex flex-col space-y-4 lg:col-span-4 font-light text-[#A4A4A4] lg:w-[428px] w-full'>
          <div><img src={desktopLogoUrl} alt="logo" /></div>
          <p className='text-lg lg:text-xl'>We are dedicated to helping you find the perfect property with ease. Explore a variety of options and let our expert team guide you to your ideal home in a efficient way.</p>
        </div>

        {/* footer links */}
        <div className='lg:col-span-4 w-full'>
          <div className='grid grid-cols-2 lg:grid-cols-4 pt-7 lg:pt-0 lg:justify-items-end gap-10 lg:gap-20 w-full text-lg'>
            {
              footerMenu.map(function(item){
                return(
                  <div key={item.title} className='font-light flex flex-col bg-green'>
                    <p className='pb-6'>{item.title}</p>
                    <div className='flex flex-col space-y-4 text-[#A4A4A4]'>
                      {item.links.map(function(link){
                        return(
                          <a key={link.name} href={link.url}>{link.name}</a>
                        )
                      })}
                  </div>
            </div>
                )
              })
            }
            
            

          </div>
        </div>

      </section>

      <hr className='w-full border-t mt-20 mb-6 border-[#E5E5E5]'/>

      <div className='flex flex-col lg:flex-row justify-between lg:items-center text-[#A4A4A4] font-light space-y-4'>
        <p>&copy; Website built by Metatony 🤖</p>
        <p>Privacy Policy & Terms Of Use</p>

      </div>

    </footer>
  )
}

export default Footer