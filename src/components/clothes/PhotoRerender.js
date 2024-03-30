import React from 'react'
import PhotoResultPage from './PhotoResultPage'
import { useRecoilValue } from 'recoil'
import { ResultAtom } from './ResultAtom'
import BarChart from '../../UI/BarChart'

export default function PhotoRerender() {
    const photoResult = useRecoilValue(ResultAtom)
	console.log("photoResult",photoResult)
    if(photoResult===null){
		window.location.replace('../upload')
        return <></>
    }
  return (
    <main className='w-4/5 mx-auto mt-16'>
				<div className='flex justify-center items-center'>
				<div className='mt-5 shadow-lg rounded-sm px-2 py-2' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderStyle: 'solid', borderColor: 'white', borderWidth: '6px', width: `${photoResult.imgSize['width']*0.8}px`, height: `${photoResult.imgSize['height']*0.8}px` }}>
							<div className='w-full h-full' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderStyle: 'solid', borderColor: 'white', borderWidth: '6px'}}>
								<div className='w-full h-full flex justify-center items-center'>
							{photoResult.preview && <img src={photoResult.preview} alt='Preview' className='flex justify-center items-center h-full max-w-full' />}
							</div>
						</div>
						</div>
				<BarChart response={photoResult} />
				</div>
				<div>
				{<PhotoResultPage response={photoResult} />}
				</div>
			</main>
  )
}
