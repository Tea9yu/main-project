// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// export default function ClothesFilter() {
// 	const categories = {
// 		아우터: {JP: '점퍼', JK: '자켓', CT: '코트', VT: '베스트', CD: '가디건'},
// 		상의: {TS: '티셔츠', TN: '티셔츠나시', BL: '블라우스', NB:'남방'},
// 		하의: {PT: '바지', DN: '데님', SK: '스커트', LG: '레깅스'},
// 	}
// 	const [mainCategory, setMainCategory] = useState('');
// 	const [subCategories, setSubCategories] = useState([]);
// 	const [clothesList, setClothesList] = useState([]);
	

// 	useEffect(() => {
// 		if (mainCategory) {
// 			fetch(`http://10.125.121.184:8080/product/filter/${mainCategory}`, {
// 				method: 'GET',
// 			})
			
// 			.then(response => response.json())
// 			.then(data => {
// 				// setSubCategories(data);
// 				console.log('data=', data)
// 				const subCategories = data.map(code => categories[mainCategory][code]);
// 				setSubCategories(subCategories);
				
// 			})
// 			.catch(error => {
// 				console.log('에러', error)
// 			});
// 		}
// 	}, [mainCategory]);

// 	const handleMainCategoryClick = (category) => {
// 		setMainCategory(category);
// 		// setSubCategories(categories[category]);
// 	};

// 	// const handleSubCategoryClick = (subCategory) => {
// 	// 	// setSubCategory(subCategory);
// 	// 	console.log(`필터 : ${mainCategory} - ${subCategory}`)
// 	// }

// 	const getClothesList = async (pgno) => {
// 		const resp = await fetch(`http://10.125.121.184:8080/product/items/${pgno}`, {
// 			method: 'GET',
// 		});
// 		let data = await resp.json();      
// 		setClothesList(data.content);  // 상품 목록 업데이트
// 		// setItemsCountPerPage(data.pageable.pageSize); // 페이지 상품 개수
// 		// setTotalNum(data.totalPages);  // 전체 상품 수 업데이트
// 	}

// 	const handleSubCategoryClick = async (subCategory) => {
// 		// 서버에서 특정 서브 카테고리에 해당하는 상품 목록을 가져옵니다.
// 		const response = await fetch(`http://10.125.121.184:8080/product/items/${mainCategory}/${subCategory}`, {
// 			method: 'GET',
// 		});
// 		const data = await response.json();
	
// 		// 상품 목록 상태를 업데이트합니다.
// 		setClothesList(data.content);
// 	};
	
// 	return (
// 		<div className='mt-20 bg-slate-400'>
// 			<div className='flex flex-col'>
// 				{Object.keys(categories).map(category => (
// 					<button key={category} onClick={() => handleMainCategoryClick(category)} className='border p-2 m-1 w-32 bg-white'>{category}</button>
// 				))}
// 			</div>
			
// 			{subCategories.length > 0 && (
// 				<div className='flex'>
// 					{subCategories.map(subCategory => (
// 						<button key={subCategory} onClick={() => handleSubCategoryClick(subCategory)} className='border p-2 m-1 w-32 bg-white'>{subCategory}</button>
// 					))}
// 				</div>
// 			)}
// 		</div>
// 	)
// }


import React, { useState } from 'react'

export default function ClothesFilter() {
	const categories = {
		아우터: ['점퍼', '자켓', '코트', '베스트', '가디건'],
		상의: ['티셔츠', '티셔츠나시', '블라우스', '남방'],
		하의: ['바지', '데님', '스커트', '레깅스'],
	}
	const [mainCategory, setMainCategory] = useState('');
	const [subCategory, setSubCategory] = useState('');
// 유즈스테이트 세개 
	const [upperSel, setUpperSel] = useState(false);
	const [botSel, setBotSel] = useState(false);
	const [outterSel, setOutterSel] = useState(false);
// 
const handleBoolean = (e) => {
	setUpperSel(!upperSel);
	console.log(upperSel);
};
const handleBoolean1 = (e) => {
	setBotSel(!botSel);
	console.log(botSel);
};
const handleBoolean2 = (e) => {
	setOutterSel(!outterSel);
	console.log(outterSel);
};
	const handleMainCategoryClick = (category) => {
		setMainCategory(category);
		setSubCategory('');
	};

	const handleSubCategoryClick = (subCategory) => {
		setSubCategory(subCategory);
		console.log(`필터 : ${mainCategory} - ${subCategory}`)
	}
	return (
		<div className='mt-20 bg-white'>
			<div className='flex flex-col'>
				{/* {Object.keys(categories).map(category => ( */}
					{outterSel 
					// ? 뒤는 참일때 : 뒤는 폴스일떄 
					? <div> <button onClick={() => handleMainCategoryClick(handleBoolean2)} className='border p-2 m-1 w-32'>아우터</button> 
					<p>JP: '점퍼'</p>
					<p>JK: '자켓'</p>
					<p>CT: '코트'</p>
					<p>VT: '베스트'</p>
					<p>CD: '가디건'</p>					
					</div>
						
					:<div> <button onClick={() => handleMainCategoryClick(handleBoolean2)} className='border p-2 m-1 w-32'>아우터</button></div>
					}
					
					<button onClick={() => handleMainCategoryClick(handleBoolean)} className='border p-2 m-1 w-32'>상의</button>
					<button onClick={() => handleMainCategoryClick(handleBoolean1)} className='border p-2 m-1 w-32'>하의</button>
				{/* ))} */}
			</div>
			
			{mainCategory && (
				<div className='flex flex-col '>
					{categories[mainCategory].map(subCategory => (
						<button key={subCategory} onClick={() => handleSubCategoryClick(subCategory)} className='border p-2 m-1 w-32'>{subCategory}</button>
					))}
				</div>
			)}
		</div>
	)
}
