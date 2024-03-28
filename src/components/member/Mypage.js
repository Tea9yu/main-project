import { useScrollTrigger } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import { Navigate, useNavigate } from 'react-router-dom';
import DateFormat from './DateFormat';
import './mypage.css';

export default function Mypage(setIsLoggedIn) {
	const [recommendList, setRecommendList] = useState([]);
	const [recommendTag, setRecommendTag] = useState([]);
	const [itemsCountPerPage, setItemsCountPerPage] = useState([]);
	const [totalNum, setTotalNum] = useState();
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	
	


	const isLoggedIn = localStorage.getItem("token");
	// console.log("login=", isLoggedIn)

	useEffect(() => {
		getRecommendList(page);
	}, [])
	const getRecommendList = async (pgno) => {

		const resp = await fetch(`http://10.125.121.184:8080/request/${pgno}`, {
			headers: {
				Authorization: isLoggedIn,
			},
			method: 'GET',
		});
		let data = await resp.json();
		if (data.content === null) { return }
		console.log('data=', data);
		setRecommendList(data.content);  // 상품 목록 업데이트
		setItemsCountPerPage(data.pageable.pagesize); // 페이지 상품 개수
		setTotalNum(data.totalElements);  // 전체 상품 수 업데이트
	}

	// 페이지 변경
	const handlePageChange = (page) => {
		console.log("page=", page)
		setPage(page);
		getRecommendList(page);
	}

	// 실제 값 들어가는 부분

	useEffect(() => {
		if (recommendList === null) { return }
		let tag = recommendList.map((item, index) =>
			<div className='flex' key={item + index}>
				<div className='px-6 py-4'>
					<div className="inline-flex justify-center items-center w-8 h-7 bg-black text-white rounded-md mx-2">
						{/* {item.customerNum} */}
						{(totalNum + 1) - (index + 1 + (page - 1) * 10)}
					</div>
				</div>
				<div className='px-6 py-4 mr-56'>
					<img src={`http://10.125.121.184:8080/upload_image/${item.customerNum}/${item.originalFilename}`} alt={item.name}
						className='w-full h-48 object-cover'
					/>
				</div>
				<div className='px-6 py-4 ml-18'>
					<DateFormat requestDate={item.requestDate} />
				</div>
			</div>
		)
		setRecommendTag(tag);

	}, [recommendList]);

	// 로그아웃
	const handleLogout = () => {
		localStorage.removeItem("token");
		// setUser(null) ;
		navigate("/")
		window.location.reload();
	}

	return (
		<div className="pt-10 min-w-[600px] w-full h-full flex flex-col justify-center items-center">
			<div class="w-3/5 h-[30svw]  grid grid-rows-5 grid-flow-col gap-4">
  			<div class="row-start-1 row-span-3 ...">
					<div className='w-full h-full min-w-32 min-h-32 border-8 border-double border-white p-3 shadow-lg'>
						<div className='bg-white w-full h-full'></div>
					</div>
				</div>
				
				<div class=" row-end-6 row-span-3  ...">
				<div className='w-full h-full min-w-32 min-h-32 border-8 border-double border-white p-3 shadow-lg'>
						<div className='bg-white w-full h-full'></div>
					</div>
				</div>
				
				<div class="row-start-2 row-end-4 ...">
				<div className='w-full h-full min-w-32 min-h-32 border-8 border-double border-white p-3 shadow-lg'>
						<button className='bg-white w-full h-full font-bold' onClick={handleLogout}>Logout</button>
					</div>
				</div>
			</div>
			<div className="w-full h-[2rem] sm:h-[2rem] flex">
				{/* <input
					// ref={numberRef}
					type="text"
					className="text-xs sm:text-sm lg:text-base bg-gray-200 border-2 border-gray-200 w-[12rem] sm:w-[17.1rem]"
					placeholder="를 입력해주세요"
				/> */}
				{/* <button onClick={handleSearchNumber} className="text-xs sm:text-sm lg:text-base ml-2 lg:ml-[14px] sm:pt-[8px] sm:pb-[7px] sm:ml-[15px] py-2 lg:p-2 w-[3rem] sm:w-[4rem] lg:w-[5rem] text-white border-2 border-[#1D647A] bg-[#1D647A]">검색</button> */}
			</div>
			{/* <div className="mt-[2rem] w-3/4 flex justify-end">
				<button className='border p-2 rounded-xl items-end hover:bg-[]' onClick={handleLogout}>로그아웃</button>
			</div> */}
			<div className="mt-[2rem] w-full flex flex-col justify-center items-center">


				{/* <div className="flex gap-6 mx-4 bg-orange-400 justify-center">
					<div className='bg-slate-400'>
					
					</div>
					<div className="flex border-2 mt-2 border-gray-200 rounded-md bg-white">
						<div className="h-[25%] sm:flex-col sm:flex sm:items-center lg:text-base"><pre className="bg-[#2C3D4E] text-white text-center sm:w-[10rem] lg:w-[12rem] text-[10px] lg:text-xs border-b-2 lg:py-[6px] border-gray-300 lg:font-bold" >번호</pre>
						 <p className="flex items-center justify-center grow w-full border-b">1</p>						 					 
						 </div>
						<div className="h-[25%] sm:flex-col sm:flex sm:items-center lg:text-base"><pre className="bg-[#2C3D4E] text-white text-center sm:w-[10rem] lg:w-[12rem] text-[10px] lg:text-xs border-b-2 lg:py-[6px] border-gray-300 lg:font-bold" >이미지명</pre>
						 <p className="flex items-center justify-center grow w-full border-b">2</p>						
						 </div>
						<div className="h-[25%] sm:flex-col sm:flex sm:items-center lg:text-base"><pre className="bg-[#2C3D4E] text-white text-center sm:w-[10rem] lg:w-[12rem] text-[10px] lg:text-xs border-b-2 lg:py-[6px] border-gray-300 lg:font-bold" >날짜</pre>
						 <p className="flex items-center justify-center grow w-full border-b">3</p>						 
						 </div>
						<div className="h-[25%] sm:flex-col sm:flex sm:items-center lg:text-base"><pre className="bg-[#2C3D4E] text-white text-center sm:w-[10rem] lg:w-[12rem] text-[10px] lg:text-xs lg:py-[6px] lg:font-bold" >작성자</pre>
						 <p className="flex items-center justify-center grow w-full border-b">4</p>
						 <p className="flex items-center justify-center grow w-full border-b">4</p>
						 <p className="flex items-center justify-center grow w-full border-b">4</p>
						 <p className="flex items-center justify-center grow w-full border-b">4</p>
						 <p className="flex items-center justify-center grow w-full border-b">4</p>
						 </div>
					</div>					
				</div>
				<div>
				{recommendTag}
				</div> */}

				{/* <div className="relative w-3/4 shadow-md sm:rounded-lg border-4 border-black justify-center">
					<div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<div className="border-b-4 border-black text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
							<div className='flex'>
								<div scope="col" className="px-6 py-3">
									번호
								</div>
								<div scope="col" className="px-6 py-3">
									이미지명
								</div>
								<div scope="col" className="px-6 py-3">
									날짜
								</div>
							</div>
						</div>						
						<div>
							{recommendTag}
						</div>
					</div>
				</div> */}

				{/* <div className="relative w-3/4 shadow-md sm:rounded-lg border-4 border-black justify-center">
					<div className="flex bg-gray-200 font-bold">
						<div className="w-1/4 py-2">번호</div>
						<div className="w-2/4 py-2">이미지명</div>
						<div className="w-1/4 py-2">날짜</div>
					</div>
					<div className="mypage-body">
						{recommendTag}
					</div>
				</div> */}

				<div className="relative w-3/4 shadow-md  border-t-4 border-black justify-center">
					<div className="flex  border-black border-b-4 font-bold">
						<div className="w-1/4 py-2 ml-5">번호</div>
						<div className="w-2/4 py-2">이미지명</div>
						<div className="w-1/4 py-2">날짜</div>
					</div>
					<div className="mypage-body">
						{recommendTag}
					</div>
				</div>

				<div className='mb-3'>
				<Pagination
					activePage={page}
					itemCountPerPage={itemsCountPerPage}
					totalItemsCount={totalNum || 0}
					pageRangeDisplayed={5}
					prevPageText={"‹"} // "이전"을 나타낼 텍스트
					nextPageText={"›"} // "다음"을 나타낼 텍스트
					onChange={handlePageChange}
				/>
				</div>
			</div>
		</div>
	)
}
