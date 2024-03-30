import { useScrollTrigger } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import { Navigate, useNavigate } from 'react-router-dom';
import DateFormat from './DateFormat';
import './mypage.css';
import { useSetRecoilState } from 'recoil';
import { ResultAtom } from '../clothes/ResultAtom';
import Loading from '../../UI/Loading';
/* global BigInt */

export default function Mypage(setIsLoggedIn) {
	const [recommendList, setRecommendList] = useState('');
	const [recommendTag, setRecommendTag] = useState('');
	const [itemsCountPerPage, setItemsCountPerPage] = useState('');
	const [loading, setLoading] = useState(false);
	const [totalNum, setTotalNum] = useState(0);
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	const username = localStorage.getItem('username');
	const setPhotoResult = useSetRecoilState(ResultAtom)
	console.log("username", username)



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

		if (!resp.ok) { return }
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

	// Rerendering
	const handleRerender = async (e, item) => {
		e.preventDefault();
		setLoading(true)
		const fileurl = `http://10.125.121.184:8080/upload_image/${item.customerNum}/${item.originalFilename}`;
		const img = new Image();
		img.src = fileurl
		let width = 450
		let height = 450
		let imgSize = { width: width, height: height }
		img.onload = () => {
			if (img.width <= img.height) {
				height = img.height * (450 / img.width)
			}
			else {
				width = img.width * (450 / img.height)
			}
			imgSize = { width: width, height: height }
			console.log('img', img.width)
			console.log('imageSize', imgSize['width'])
		}
		console.log("requestId", item.requestId)
		const resp = await fetch(`http://10.125.121.184:8080/rerender?requestId=${BigInt(item.requestId)}`, {
			headers: {
				Authorization: isLoggedIn,
			},
			method: 'GET',
		});
		setLoading(false)
		if (!resp.ok) { return }
		let data = await resp.json();
		if (data === null) { return }
		// console.log('data=', data);
		data = {
			...data,
			preview: fileurl,
			imgSize: imgSize
		}
		setPhotoResult(data);
		navigate('../rerender')
	}

	// 실제 값 들어가는 부분

	useEffect(() => {
		console.log(recommendList)
		if (recommendList === '') { return }
		let tag = recommendList.map((item, index) =>
			<div className='flex hover:bg-violet-200' key={item + index} >
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
				<button className='mr-10 w-32 border bg-violet-300 rounded-xl p-2' onClick={(e) => handleRerender(e, item)}>결과보기</button>
			</div>
		)
		setRecommendTag(tag);

	}, [recommendList]);

	// 로그아웃
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("username");
		// setUser(null) ;
		navigate("/")
		window.location.reload();
	}
	if (loading) {
		return <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
			<Loading />
		</div>
	}
	return (
		<div className="pt-10 min-w-[600px] w-full h-full flex flex-col justify-center items-center">
			<div class="w-3/5 h-[30svw]  grid grid-rows-5 grid-flow-col gap-4 font-bold font-great text-[2rem] md:text-[3rem]">
				<div class="row-start-1 row-span-3 ...">
					<div className='w-full h-full min-w-32 min-h-32 border-8 border-double border-white p-3 shadow-lg'>
						<div className='bg-white w-full h-full flex justify-center items-center'><span className='text-[1.5rem] mr-2 font-nanum'>user </span>{username}</div>
					</div>
				</div>

				<div class=" row-end-6 row-span-3  ...">
					<div className='w-full h-full min-w-32 min-h-32 border-8 border-double border-white p-3 shadow-lg'>
						<div className='bg-violet-300/60 text-white w-full h-full flex flex-col justify-center items-center'><span className='text-lg font-nanum'>추천 횟수</span>{totalNum}</div>
					</div>
				</div>

				<div class="row-start-2 row-end-4 ...">
					<div className='w-full h-full min-w-32 min-h-32 border-8 border-double border-white p-3 shadow-lg'>
						<button className='bg-white w-full h-full flex justify-center items-center hover:bg-violet-300 hover:text-white	' onClick={handleLogout}>Logout</button>
					</div>
				</div>
			</div>
			<div className="w-full h-[2rem] sm:h-[2rem] flex">
			</div>
			<div className="mt-[2rem] w-full flex flex-col justify-center items-center">

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
