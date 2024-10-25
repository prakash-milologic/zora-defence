import React from 'react'
import { FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-[#000000] pt-12 pb-12'>
                <div className="text-4xl mb-4  flex justify-center items-center gap-16 ">
                    <div className='flex gap-6'>
                        <div className='text-[#A58441]  h-[60px] w-[60px] flex justify-center items-center  bg-[#A5844126]'>
                          <FaPhoneAlt className='text-3xl' />
                        </div>
                        <div className=''>
                            <h6 className='text-base opacity-80 font-normal'>Contact Number</h6>
                            <h1 className='lg:text-2xl text-xl font-medium'>0800 043 1699</h1>
                        </div>

                    </div>
                    <div className='flex gap-6'>
                        <div className='text-[#A58441]  h-[60px] w-[60px] flex justify-center items-center  bg-[#A5844126]'>
                           <FaRegEnvelopeOpen className='text-3xl' />
                        </div>
                        <div className=''>
                            <h6 className='text-base opacity-80 font-normal'>Email</h6>
                            <h1 className='lg:text-2xl text-xl font-medium'>info@zoradefence.com</h1>
                        </div>

                    </div>
                </div>

            </div>
  )
}

export default Contact