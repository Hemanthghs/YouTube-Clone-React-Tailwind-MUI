import React from 'react';

export default function VideoCard({data}) {
  return (
      <div className='w-[338px] hover:cursor-pointer'>
        <div className='relative w-[338px] h-[190px]'>
          <img className='w-[338px] h-[190px] tablet:rounded-[12px]' src={data.thumbnail} alt="" />
          <span className='bg-[#000000df] px-[3px] absolute bottom-[5px] font-medium right-[5px] text-[12px]  rounded-[6px]'>{data.duration}</span>
        </div>
        <div className='mt-3 flex w-[337px]'>
          <div>
            <img className='rounded-full w-[36px] h-[36px] mr-4' src={data.channelLogo} alt="" />
          </div>
          <div className='pl-3'>
            <div className='text-[16px] text-[#f1f1f1] font-medium leading-[22px] text-ellipsis line-clamp-2'>{data.title}</div>
            <div className='text-[14px] mt-1 font-normal leading-5 text-[#aaaaaa]'>
              <div>{data.channel}</div>
              <div>
                <span>{data.views} views</span> •
                <span> {data.date} ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

//337.9 x 190
//337.9 x 100
