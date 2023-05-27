import React from 'react'
import Category from './Category'
import VideoFeed from './VideoFeed'

export default function Content() {
  return (
    <div className='overflow-hidden tablet:ml-16 ml-0'>
        <Category />
        <VideoFeed />
    </div>
  )
}
