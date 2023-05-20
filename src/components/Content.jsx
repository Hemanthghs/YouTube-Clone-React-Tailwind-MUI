import React from 'react'
import Category from './Category'
import VideoFeed from './VideoFeed'

export default function Content() {
  return (
    <div className='overflow-hidden'>
        <Category />
        <VideoFeed />
    </div>
  )
}
