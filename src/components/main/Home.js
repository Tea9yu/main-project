import ImageSlider from '../../UI/ImageSlider';
import TailSelect from '../../UI/TailSelect'
import clothesStore from '../../images/Group 10.png'
import { Link } from "react-router-dom";
import HomeInfo from './HomeInfo';
import jy from '../../images/journey.jpg'
import { Slide } from '@mui/material';

export default function Home() {
	const selSort = ["낮은가격순", "높은가격순"]

	return (
		<div className=" w-full h-full flex flex-col justify-center items-center bg-black">
			{/* <div className='w-full'>
				<img src={clothesStore} alt="nineOnce" className="w-4/5 mx-auto shadow-lg" 
				// style={{ width: '2000px', height: '1000px' }} 
				/>
			</div> */}
			<div className='relative w-full h-screen flex flex-col justify-center items-center font-nanum'>
				<div className='absolute top-[90px] text-[#A5A5A5]'>나만을 위한 옷을 찾는 여정</div>
				<div className='absolute z-30 top-[100px] blur-[0.03rem] sm:text-[9svw] text-[100px]  text-[#FEFEFE]'>CHOICE</div>
				<div className='absolute z-20 top-[200px] flex justify-center items-center  w-[25svw] min-w-64 shadow-[#616e75] shadow-xl  rounded-[6rem]'>
					<img src={jy} alt='journey' className='rounded-[6rem] shadow-inner shadow-transparent' />
				</div>
				<div className='absolute z-10 top-[350px] w-screen h-[0.005rem] shadow-sm shadow-[#e3e2e2] bg-[#757575]'></div>
				<div className='absolute z-30 top-[800px] text-[#FFFFFF]/50 font-garamond flex justify-evenly space-x-20'>
					<div className=' flex flex-col justify-center items-center'>
						<div className='text-sm'>FRONT-END</div>
						<div className='text-lg'>Taegyu Kang</div>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<div className='text-sm'>BACK-END</div>
						<div className='text-lg'>Sangmin Park</div>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<div className='text-sm'>DATA-SCIENCE</div>
						<div className='text-lg'>Jihyeon Ohk</div>
					</div>
				</div>
			</div>
			<div className='w-full mt-10'>
				<ImageSlider />
			</div>
			{/* <div className='w-full mt-10'>
				<Slide />
			</div> */}
			<div className='w-full'>
				<HomeInfo />
			</div>
			{/* <div className='flex justify-start'>
				<div>
					<div>
						<img />
						<Link to='/'><span>nine</span></Link>
					</div>
				</div>
				<div className='flex  gap-10'>
					<div className=''>
						<Link to='/'><span>ABOUT US</span></Link>
					</div>
					<div>
						<Link to='/upload'><span>SEVICE</span></Link>
					</div>
					<div>
						<span>의류</span>
					</div>
				</div>
				<div>
					<div>
						<Link to='/login'><a>로그인</a></Link>
					</div>					
				</div>
			</div>			 */}
			{/* <div className="max-w-4xl mx-auto px-4 py-8">				
				<div className='w-full'>
					<img src={nineOnce} alt="nineOnce" className=" rounded-lg shadow-lg mb-8" style={{ width: '1000px', height: '500px' }} />
				</div>
				<div className='flex justify-center gap-8'>
					<Link><a className='border rounded-full p-4 bg-pink-200 '>전체</a></Link>
					<Link><a className='border rounded-full p-4 bg-pink-200 '>아우터</a></Link>
					<Link><a className='border rounded-full p-4 bg-pink-200 '>상의</a></Link>
					<Link><a className='border rounded-full p-4 bg-pink-200 '>하의</a></Link>					
				</div>
				<div id='카테고리 상품리스트'>
					<div id='상품리스트sort' className='flex justify-end'>
						<TailSelect opItem={selSort} />
					</div>
					<div id='상품리스트cont'>
					</div>
					<div id='페이지네이션'></div>
				</div>
			</div> */}
		</div>
	)
}
