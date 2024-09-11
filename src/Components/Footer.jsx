import React from 'react'

const Footer = () => {
    const details=[
    {
        name:'Vaideeshwaran',num:'6381841171'
    },
    {
        name:'Seshadhri',num:'8668153061'
    },
    {
        name:'Kathiyan',num:'6369672695'
    },
    {
        name:'Dinesh',num:'7550270150'
    },
    ]
    return (
    <div className='h-fit bg-black text-white w-[100%] flex flex-col gap-[10px] p-2'>
        <p className='w-[100%] text-center'>Contact Us</p>
        <div className='w-[90%]  mx-auto flex flex-wrap justify-between'>
     {details.map((item,index)=>(
        <div className='flex flex-col p-5 '>
        <p className='hover:underline cursor-pointer'>{item.name}</p>
        <p>{item.num}</p>
        </div>
     ))}
     </div>
    </div>
  )
}

export default Footer