import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PlayerPage from "./PlayerPage";

export default function Home() {
  return (
    <div className='bg-[#0f0f0f] text-white h-max tablet:mr-2'>
        
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/video" element={<PlayerPage />} />
          </Routes>
        </BrowserRouter>
        
    </div>
  )
}
