import { useScrollTrigger } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import { Navigate, useNavigate } from 'react-router-dom';

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
		setItemsCountPerPage(data.length); // 페이지 상품 개수
		setTotalNum(data.Elements);  // 전체 상품 수 업데이트
	}

	// 페이지 변경
	const handlePageChange = (page) => {
		console.log("page=", page)
		setPage(page);
		getRecommendList(page);
	}

	// 실제 값 들어가는 부분

	useEffect(() => {
		let tag = recommendList.map((item) =>
			<div className='border flex'>
				<div className='px-6 py-4'>
					<div className="inline-flex justify-center items-center w-5 h-5 bg-black text-white rounded-md mx-2">
						{item.customerNum}
					</div>
				</div>
				<div className='px-6 py-4'>
				<img src={`http://10.125.121.184:8080/upload_image/${item.originalFilename}`} alt={item.name}
				className='w-full h-48 object-cover'
				/>
				</div>
				<div className='px-6 py-4'>
					{item.requestDate}
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
		<div className="w-full h-full mt-20 bg-white flex flex-col justify-center items-center">
			<div className="w-full h-[2rem] sm:h-[2rem]">
				{/* <input
					// ref={numberRef}
					type="text"
					className="text-xs sm:text-sm lg:text-base bg-gray-200 border-2 border-gray-200 w-[12rem] sm:w-[17.1rem]"
					placeholder="차량번호를 입력해주세요"
				/> */}
				{/* <button onClick={handleSearchNumber} className="text-xs sm:text-sm lg:text-base ml-2 lg:ml-[14px] sm:pt-[8px] sm:pb-[7px] sm:ml-[15px] py-2 lg:p-2 w-[3rem] sm:w-[4rem] lg:w-[5rem] text-white border-2 border-[#1D647A] bg-[#1D647A]">검색</button> */}
			</div>
			<div className="mt-[2rem] flex ">
				<button className='border p-2 rounded-xl items-center' onClick={handleLogout}>로그아웃</button>
			</div>
			<div className="mt-[2rem] w-full">


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

				<div className="relative w-3/4 shadow-md sm:rounded-lg border-4 border-black justify-center">
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
						{/* tbody는 데이터 본문 10줄 */}
						{<div>
							{recommendTag}
						</div>}
					</div>
				</div>
				<Pagination
					activePage={page}
					itemCountPerPage={10}
					totalItemsCount={totalNum}
					pageRangeDisplayed={5}
					onChange={handlePageChange}
				/>
			</div>
		</div>
	)
}
