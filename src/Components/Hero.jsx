import React from 'react'
import Header from './Header'
import Calculator from './Calculator'

const Hero = () => {
  return (
    <div className="rounded-xl shadow-2xl flex flex-col md:flex-row p-10 md:space-x-10   items-center justify-center bg-slate-100">
        <Header/>
        <Calculator/>
        </div>
  )
}

export default Hero
