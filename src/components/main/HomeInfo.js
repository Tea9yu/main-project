import React from 'react'
import HomeCards from './HomeCard'

export default function HomeInfo() {
  return (
    <div className='bg-white justify-center items-center p-20 w-full'>
      <div className='w-full flex justify-center items-center'>
        <div>
            <div className='text-4xl line'>사진과 유사한<br/>옷 스타일<br/>추천 시스템</div>
            <div className='pt-10 text-xl'>소비자의 쇼핑을 도와주는<br />의류 추천 서비스입니다.</div>
        </div>
        <div>
					<HomeCards />
        </div>
      </div>
    </div>
  )
}
