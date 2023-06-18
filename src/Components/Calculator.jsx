import React from 'react'
import Table from './Table'


function Calculator() {
  
 

    return (

    <div className='w-1/2 shadow-2xl animate-border rounded-xl inline-block  bg-white bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-[length:400%_400%] p-[3px]'>
        <div className='space-y-8 flex flex-col items-center  p-10 bg-white rounded-xl '>
          <h1 className='mx-auto w-fit text-4xl font-bold'>Data fetcher</h1>
          <h4 className='font-semibold text-sm'>Data of users fetched from <a className='text-blue-500 hover:underline' href='https://dummyjson.com/users'>Link</a></h4>
          <Table/>
        </div>


         <div className='rounded-b-xl p-5 py-5 flex justify-center items-center mt-1'>
                    <h3 className='text-2xl font-bold text-white' >Made By - Aayush Yadav</h3>
        </div>
        

        
        
        


    </div>
  )
}

export default Calculator
