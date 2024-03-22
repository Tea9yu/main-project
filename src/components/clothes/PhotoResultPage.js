// import React, { useEffect, useState } from 'react'

// export default function PhotoResultPage(response) {

// 	const category = {
// 		아우터: { JP: '점퍼', JK: '자켓', CT: '코트', VT: '베스트', CA: '가디건' },
// 		상의: { TS: '티셔츠', TN: '티셔츠나시', KT: '니트', KN: '니트나시', BL: '블라우스', WS: '남방', BN: '블라우스나시', OP: '원피스' },
// 		하의: { PT: '바지', DP: '데님', SK: '스커트', LG: '레깅스' },
// 		세트: { ST: '세트' },
// 	  };
// 	const resp = response.response
// 	//   console.log(response.response)
// 	//   return
  
// 	  const [similar, setSimilar] = useState([]); // 유사상품 상태
// 	  const [recommend, setRecommend] = useState([]); // 추천상품 상태
//     const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리 상태

//     const [recommendUpper, setRecommendUpper] = useState(resp.upper.recommend);
// 	  const [recommendSkirt, setRecommendSkirt] = useState(resp.skirt.recommend);
// 	  const [recommendPants, setRecommendPants] = useState(resp.pants.recommend);
// 	  const [recommendDress, setRecommendDress] = useState(resp.dress.recommend);
    
// 	  // 선택된 카테고리 변경 시 유사상품과 추천상품 데이터를 업데이트합니다.
//     useEffect(() => {
//       fetchProductData(selectedCategory); // 선택된 카테고리에 따라 API 호출
//     }, [selectedCategory]);

//     // 선태고딘 카테고리에 따라 해당 상품 데이터를 서버에서 가져오는 함수
//     const fetchProductData = async (category) => {
//       try {
//         // 서버에서 유사상품과 추천상품 데이터를 가져오는 API를 호출합니다.
//         const resp = await fetch(resp);
//         if (resp.ok) {
//           // 서버에서 받은 JSON 데이터를 상태에 설정합니다.
//           const productData = await resp.json();
//           setSimilar(productData.similar);  // 유사상품 상태 업데이트
//           setRecommend(productData.recommend);  // 추천상품 상태 업데이트
//         } else {
//           alert('상품데이터 수신 실패')
//           return
//         }
//       } catch (error) {
//         console.error('상품데이터 수신 실패', error);
//       }
//     }
	
	
// 		// useEffect(() => {
// 		// 	// 서버에서 추천 상품 및 이미지 데이터를 받아옵니다.
// 		// 	fetchRecommendations();
// 		// }, []);
	
// 		// const fetchRecommendations = async () => {
// 		// 	try {
// 		// 		// 서버에서 추천 상품 및 이미지 데이터를 가져오는 API를 호출합니다.
// 		// 		const response = await fetch();
// 		// 		if (response.ok) {
// 		// 			// 서버에서 받은 JSON 데이터를 추천 상품 상태에 설정합니다.
// 		// 			const recommendProductsData = await response.json();
// 		// 			setRecommend(recommendProductsData);
// 		// 		} else {
// 		// 			throw new Error('Failed to fetch recommendations');
// 		// 		}
// 		// 	} catch (error) {
// 		// 		console.error('Error fetching recommendations:', error);
// 		// 	}
// 		// } 	  
	
// 	  useEffect(() => {
// 		console.log('선택된 카테고리:', selectedCategory);
// 	  }, [selectedCategory]);
	
// 	  // 카테고리 선택 이벤트 핸들러
// 	  const handleCategorySelect = (category) => {
// 		// console.log('selectedCategory',selectedCategory)
// 		setSelectedCategory(category);  // 선택된 카테고리 설정
		
// 	  };
// 	// useEffect(() => {
// 	// 	// 서버에서 추천 상품 및 이미지 데이터를 받아옵니다.
// 	// 	fetchRecommendations();
// 	// }, []);

// 	// const fetchRecommendations = async () => {
// 	// 	try {
// 	// 		// 서버에서 추천 상품 및 이미지 데이터를 가져오는 API를 호출합니다.
// 	// 		const response = await fetch();
// 	// 		if (response.ok) {
// 	// 			// 서버에서 받은 JSON 데이터를 추천 상품 상태에 설정합니다.
// 	// 			const recommendProductsData = await response.json();
// 	// 			setRecommend(recommendProductsData);
// 	// 		} else {
// 	// 			throw new Error('Failed to fetch recommendations');
// 	// 		}
// 	// 	} catch (error) {
// 	// 		console.error('Error fetching recommendations:', error);
// 	// 	}
// 	// } 

// 	return (
// 		<div className="mt-20 bg-white">
//       <div className="flex gap-4 mb-4">
//         {/* 카테고리 버튼들 */}
//         {Object.keys(category).map((category) => (
//           <button
//             key={category}
//             onClick={() => handleCategorySelect(category)}
//             className={`border px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-gray-200' : ''}`}
//           >
//             {category}
//           </button>
//         ))}
//         {/* <button onClick={() => handleCategorySelect('상의')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '상의' ? 'bg-gray-200' : ''}`}>상의</button>
//         <button onClick={() => handleCategorySelect('치마')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '치마' ? 'bg-gray-200' : ''}`}>치마</button>
//         <button onClick={() => handleCategorySelect('바지')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '바지' ? 'bg-gray-200' : ''}`}>바지</button>
//         <button onClick={() => handleCategorySelect('드레스')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '드레스' ? 'bg-gray-200' : ''}`}>드레스</button> */}
//       </div>
//       {/* 선택된 카테고리에 따라 상품 표시 */}
//       <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
//         {recommendUpper.map((recommendItem) => (
//           // 카테고리에 따라 선택된 상품만 표시
//           recommendItem.kindId === selectedCategory && (
//             <div key={recommendItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
//               style={{ width: '200px', minWidth: '200px', flex: ' 1 0 auto' }}
//             >
//               <img src={`${process.env.PUBLIC_URL}/recommend_images/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
//               <h2>{recommendItem.name}</h2>
//               <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
//             </div>
//           )
//         ))}
//       </div>
//       <h1>Similar Products</h1>
//       {/* 추천된 상품 리스트와 이미지를 표시합니다. */}
//       <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
//         {similar.map((similarItem) => (
//           <div key={similarItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
//           style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
//           >
//             <img src={`${process.env.PUBLIC_URL}/recommend_images/${similarItem.productCode}.jpg`} alt={similarItem.name} className='w-full h-48 object-cover'/>
//             <h2>{similarItem.name}</h2>
//             <p>{parseInt(similarItem.price).toLocaleString('ko-KR')}원</p>
//           </div>
//         ))}
//       </div>
//       <h1>Recommended Products</h1>
//       {/* 추천된 상품 리스트와 이미지를 표시합니다. */}
//       <h2 className='font-bold'>아우터</h2>
//       <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
//         {recommendUpper.map((recommendItem) => (
//           <div key={recommendItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
//           style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
//           >
//             <img src={`${process.env.PUBLIC_URL}/recommend_images/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
//             <h2>{recommendItem.name}</h2>
//             <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
//           </div>
//         ))}
//       </div>
//       <h2 className='font-bold'>상의</h2>
//       <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
//         {recommendUpper.map((recommendItem) => (
//           <div key={recommendItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
//           style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
//           >
//             <img src={`${process.env.PUBLIC_URL}/recommend_images/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
//             <h2>{recommendItem.name}</h2>
//             <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
//           </div>
//         ))}
//       </div>
//       <h2 className='font-bold'>하의</h2>
//       <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
//         {recommendUpper.map((recommendItem) => (
//           <div key={recommendItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
//           style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
//           >
//             <img src={`${process.env.PUBLIC_URL}/recommend_images/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
//             <h2>{recommendItem.name}</h2>
//             <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
//           </div>
//         ))}
//       </div>
//       {/* {recommend.map((product, index) => (
//         <div key={index}>
//           <h2>{product.name}</h2>
//           <img src={`http://example.com/product_images/${product.productCode}.jpg`} alt={product.name} />
//           <p>Price: {product.price}</p>
//           <p>Month: {product.month}</p>
          
//         </div>
//       ))} */}
//     </div>
// 	)
// }


import React, { useEffect, useState } from 'react'

export default function PhotoResultPage(response) {

	const category = {
		아우터: { JP: '점퍼', JK: '자켓', CT: '코트', VT: '베스트', CA: '가디건' },
		상의: { TS: '티셔츠', TN: '티셔츠나시', KT: '니트', KN: '니트나시', BL: '블라우스', WS: '남방', BN: '블라우스나시', OP: '원피스' },
		하의: { PT: '바지', DP: '데님', SK: '스커트', LG: '레깅스' },		
	  };
	const resp = response.response
	//   console.log(response.response)
	//   return

	  const [similar, setSimilar] = useState(resp.upper.similar);
	  const [recommendUpper, setRecommendUpper] = useState(resp.upper.recommend);
	  const [recommendSkirt, setRecommendSkirt] = useState(resp.skirt.recommend);
	  const [recommendPants, setRecommendPants] = useState(resp.pants.recommend);
	  const [recommendDress, setRecommendDress] = useState(resp.dress.recommend);

    const handleCategoryClick = (category) => {
      // 선택된 카테고리에 따라 해당 카테고리의 상품을 설정합니다.
      if (category === '상의') {          
          setRecommendUpper(resp.upper.recommend);
      } else if (category === '치마') {          
          setRecommendSkirt(resp.skirt.recommend);
      } else if (category === '바지') {          
          setRecommendPants(resp.pants.recommend);
      } else if (category === '드레스') {          
          setRecommendDress(resp.dress.recommend);
      }
      setSelectedCategory(category);
  };
    
	  const [data, setData] = useState([]);
    console.log('resp',resp)
	
    // const imagePath =process.env.REACT_APP_STATIC_IMAGE;
    const imagePath ='http://10.125.121.184:8080/product_image';
    
		// useEffect(() => {
		// 	// 서버에서 추천 상품 및 이미지 데이터를 받아옵니다.
		// 	fetchRecommendations();
		// }, []);
	
		// const fetchRecommendations = async () => {
		// 	try {
		// 		// 서버에서 추천 상품 및 이미지 데이터를 가져오는 API를 호출합니다.
		// 		const response = await fetch();
		// 		if (response.ok) {
		// 			// 서버에서 받은 JSON 데이터를 추천 상품 상태에 설정합니다.
		// 			const recommendProductsData = await response.json();
		// 			setRecommend(recommendProductsData);
		// 		} else {
		// 			throw new Error('Failed to fetch recommendations');
		// 		}
		// 	} catch (error) {
		// 		console.error('Error fetching recommendations:', error);
		// 	}
		// } 
	
	  const [selectedCategory, setSelectedCategory] = useState('상의'); // 선택된 카테고리 상태 추가
	
	  useEffect(() => {
		console.log('선택된 카테고리:', selectedCategory);
	  }, [selectedCategory]);
	
	  // 카테고리 선택 이벤트 핸들러
	  const handleCategorySelect = (category) => {
		// console.log('selectedCategory',selectedCategory)
		setSelectedCategory(category);
		
	  };
	// useEffect(() => {
	// 	// 서버에서 추천 상품 및 이미지 데이터를 받아옵니다.
	// 	fetchRecommendations();
	// }, []);

	// const fetchRecommendations = async () => {
	// 	try {
	// 		// 서버에서 추천 상품 및 이미지 데이터를 가져오는 API를 호출합니다.
	// 		const response = await fetch();
	// 		if (response.ok) {
	// 			// 서버에서 받은 JSON 데이터를 추천 상품 상태에 설정합니다.
	// 			const recommendProductsData = await response.json();
	// 			setRecommend(recommendProductsData);
	// 		} else {
	// 			throw new Error('Failed to fetch recommendations');
	// 		}
	// 	} catch (error) {
	// 		console.error('Error fetching recommendations:', error);
	// 	}
	// } 

	return (
		<div className="mt-20 bg-white">
      <div className="flex gap-4 mb-4">
        {resp.upper.style!==-1&&<button onClick={() => handleCategoryClick('상의')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '상의' ? 'bg-gray-200' : ''}`}>상의</button>}
        {resp.skirt.style!==-1&&<button onClick={() => handleCategoryClick('치마')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '치마' ? 'bg-gray-200' : ''}`}>치마</button>}
        {resp.pants.style!==-1&&<button onClick={() => handleCategoryClick('바지')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '바지' ? 'bg-gray-200' : ''}`}>바지</button>}
        {resp.dress.style!==-1&&<button onClick={() => handleCategoryClick('드레스')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '드레스' ? 'bg-gray-200' : ''}`}>드레스</button>}
      </div>
      {/* 선택된 카테고리에 따라 상품 표시 */}
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
        {recommendUpper.map((recommendItem) => (
          // 카테고리에 따라 선택된 상품만 표시
          recommendItem.kindId === selectedCategory && (
            <div key={recommendItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
              style={{ width: '200px', minWidth: '200px', flex: ' 1 0 auto' }}
            >
              <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
              <h2>{recommendItem.name}</h2>
              <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
            </div>
          )
        ))}
      </div>
      {/* <h1>Similar Products</h1>
      
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
        {similar.map((similarItem) => (
          <div key={similarItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
          style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
          >
            <img src={`${imagePath}/${similarItem.productCode}.jpg`} alt={similarItem.name} className='w-full h-48 object-cover'/>
            <h2>{similarItem.name}</h2>
            <p>{parseInt(similarItem.price).toLocaleString('ko-KR')}원</p>
          </div>
        ))}
      </div> */}
      <h1>Recommended Products</h1>
      {/* 추천된 상품 리스트와 이미지를 표시합니다. */}
      <h2 className='font-bold'>아우터</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
        {recommendUpper.map((recommendItem) => (
          <div key={recommendItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
          style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
          >
            <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />            
            <h2>{recommendItem.name}</h2>
            <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
          </div>
        ))}
      </div>
      <h2 className='font-bold'>상의</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
        {recommendUpper.map((recommendItem) => (
          <div key={recommendItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
          style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
          >
            <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
            <h2>{recommendItem.name}</h2>
            <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
          </div>
        ))}
      </div>
      <h2 className='font-bold'>하의</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
        {recommendUpper.map((recommendItem) => (
          <div key={recommendItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
          style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
          >
            <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
            <h2>{recommendItem.name}</h2>
            <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
          </div>
        ))}
      </div>
      {/* {recommend.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <img src={`http://example.com/product_images/${product.productCode}.jpg`} alt={product.name} />
          <p>Price: {product.price}</p>
          <p>Month: {product.month}</p>
          
        </div>
      ))} */}
    </div>
	)
}

// import React, { useEffect, useState } from 'react';

// export default function PhotoResultPage({ response }) {

//   const [selectedCategory, setSelectedCategory] = useState('상의');
//   const [recommendUpper, setRecommendUpper] = useState([]);
//   const [recommendSkirt, setRecommendSkirt] = useState([]);
//   const [recommendPants, setRecommendPants] = useState([]);
//   const [recommendDress, setRecommendDress] = useState([]);

//   const imagePath ='http://10.125.121.184:8080/product_image';

//   useEffect(() => {
//     if (!response) return;
//     // response.upper가 배열인지 확인하고 필터링합니다.
//   if (Array.isArray(response.upper)) {
//     setRecommendUpper(response.upper.filter(item => item.style !== -1));
//   } else {
//     console.error('response.upper is not an array');
//     // response.upper가 배열이 아닌 경우에 대한 처리 로직 추가
//     // 예를 들어, 기본값으로 빈 배열을 설정할 수 있습니다.
//     setRecommendUpper([]);
//   }
//   if (Array.isArray(response.skirt)) {
//     setRecommendSkirt(response.skirt.filter(item => item.style !== -1));
//   } else {
//     console.error('response.upper is not an array');
//     // response.upper가 배열이 아닌 경우에 대한 처리 로직 추가
//     // 예를 들어, 기본값으로 빈 배열을 설정할 수 있습니다.
//     setRecommendSkirt([]);
//   }
//   if (Array.isArray(response.pants)) {
//     setRecommendPants(response.pants.filter(item => item.style !== -1));
//   } else {
//     console.error('response.upper is not an array');
//     // response.upper가 배열이 아닌 경우에 대한 처리 로직 추가
//     // 예를 들어, 기본값으로 빈 배열을 설정할 수 있습니다.
//     setRecommendPants([]);
//   }
  
//   if (Array.isArray(response.dress)) {
//     setRecommendDress(response.dress.filter(item => item.style !== -1));
//   } else {
//     console.error('response.upper is not an array');
//     // response.upper가 배열이 아닌 경우에 대한 처리 로직 추가
//     // 예를 들어, 기본값으로 빈 배열을 설정할 수 있습니다.
//     setRecommendDress([]);
//   }

//     // // 각 카테고리에 대한 추천 상품 데이터를 설정합니다.    
//     // setRecommendUpper(response.upper.filter(item => item.style !== -1));
//     // setRecommendSkirt(response.skirt.filter(item => item.style !== -1));
//     // setRecommendPants(response.pants.filter(item => item.style !== -1));
//     // setRecommendDress(response.dress.filter(item => item.style !== -1));
//   }, [response]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="mt-20 bg-white">
//       <div className="flex gap-4 mb-4">
//         {['상의', '치마', '바지', '드레스'].map((category) => (
//           <button
//             key={category}
//             onClick={() => handleCategoryClick(category)}
//             className={`border px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-gray-200' : ''}`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       {/* 선택된 카테고리에 따라 추천 상품 표시 */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {selectedCategory === '상의' && recommendUpper.map((recommendItem) => (
//           <div key={recommendItem.productCode} className="border rounded-lg p-4">
//             <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className="w-full h-48 object-cover" />
//             <h2>{recommendItem.name}</h2>
//             <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
//           </div>
//         ))}
//         {selectedCategory === '치마' && recommendSkirt.map((recommendItem) => (
//           <div key={recommendItem.productCode} className="border rounded-lg p-4">
//             <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className="w-full h-48 object-cover" />
//             <h2>{recommendItem.name}</h2>
//             <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
//           </div>
//         ))}
//         {selectedCategory === '바지' && recommendPants.map((recommendItem) => (
//           <div key={recommendItem.productCode} className="border rounded-lg p-4">
//             <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className="w-full h-48 object-cover" />
//             <h2>{recommendItem.name}</h2>
//             <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
//           </div>
//         ))}
//         {selectedCategory === '드레스' && recommendDress.map((recommendItem) => (
//           <div key={recommendItem.productCode} className="border rounded-lg p-4">
//             <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className="w-full h-48 object-cover" />
//             <h2>{recommendItem.name}</h2>
//             <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
