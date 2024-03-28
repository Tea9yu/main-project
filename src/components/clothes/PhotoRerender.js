import React from 'react'
import PhotoResultPage from './PhotoResultPage'
import { useRecoilValue } from 'recoil'
import { ResultAtom } from './ResultAtom'
import BarChart from '../../UI/BarChart'

export default function PhotoRerender() {
    const photoResult = useRecoilValue(ResultAtom)
    if(photoResult===null){
        return <></>
    }
  return (
    <main className='w-4/5 mx-auto'>
				<div className='flex'>
				{<img src={photoResult.preview} alt='Preview' className='flex justify-center items-center h-full max-w-full' />}
				<BarChart response={photoResult} />
				</div>
				<div>
				{<PhotoResultPage response={photoResult} />}
				</div>
			</main>
  )
}
