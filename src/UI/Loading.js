import React from 'react'
import Spinner from '../images/Spinner.gif'

export default function Loading() {
	return (
		<div className='fixed top-0  w-screen h-screen flex flex-col justify-center items-center'>
			<div>
				<img src={Spinner} />
			</div>
			<div className='flex flex-col items-center'>
				<h1 className='mt-10 font-semibold text-3xl'>로딩중입니다.</h1>
			</div>
		</div>
	)
}
