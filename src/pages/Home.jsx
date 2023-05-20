import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';

export default function Home() {
  return (
    <div className='bg-[#0f0f0f] text-white h-screen'>
        <Navbar />
        <Main />
    </div>
  )
}
