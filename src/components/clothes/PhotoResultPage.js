import React, { useEffect, useState } from 'react'
import BarChart from '../../UI/BarChart';
import ClothesCard from './ClothesCard';

export default function PhotoResultPage(response) {
  const categories = {
    JP: '점퍼', JK: '자켓', CT: '코트', VT: '베스트', CA: '가디건', 
    TS: '티셔츠', TN: '티셔츠나시', KT: '니트', KN: '니트나시', BL: '블라우스', WS: '남방', BN: '블라우스나시', OP: '원피스',
     PT: '바지', DP: '데님', SK: '스커트', LG: '레깅스' ,
     ST: '세트',
  };
  const resp = response.response
  //   console.log(response.response)
  //   return

  const [recommendList, setRecommendList] = useState([]);
  const [recommendData, setRecommendData] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('상의');
  useEffect(()=>{
    if (resp.upper.style !== -1) {
      setSelectedCategory('상의');
      setRecommendList(resp.upper.recommend);
      setRecommendData(resp.upper);
    } else if(resp.skirt.style !== -1) {
      setSelectedCategory('치마');
      setRecommendList(resp.skirt.recommend);
      setRecommendData(resp.skirt);
    } else if (resp.pants.style !== -1) {
      setSelectedCategory('바지');
      setRecommendList(resp.pants.recommend);
      setRecommendData(resp.pants);
    } else if (resp.dress.style !== -1) {
      setSelectedCategory('드레스');
      setRecommendList(resp.dress.recommend);
      setRecommendData(resp.dress);
    }
  },[])
  


  const handleCategoryClick = (category) => {
    // 선택된 카테고리에 따라 해당 카테고리의 상품을 설정합니다.
    if (category === '상의') {
      setRecommendList(resp.upper.recommend);
      setRecommendData(resp.upper);
    } else if (category === '치마') {
      setRecommendList(resp.skirt.recommend);
      setRecommendData(resp.skirt);
    } else if (category === '바지') {
      setRecommendList(resp.pants.recommend);
      setRecommendData(resp.pants);
    } else if (category === '드레스') {
      setRecommendList(resp.dress.recommend);
      setRecommendData(resp.dress);
    }
    setSelectedCategory(category);
  };

  const [data, setData] = useState([]);
  console.log('resp', resp)

  // const imagePath =process.env.REACT_APP_STATIC_IMAGE;
  const imagePath = 'http://10.125.121.184:8080/product_image';
 // 선택된 카테고리 상태 추가

  // 카테고리 선택 이벤트 핸들러
  const handleCategorySelect = (category) => {
    // console.log('selectedCategory',selectedCategory)
    setSelectedCategory(category);

  };

  return (
    <div className="mt-20 ">
      <div className='flex gap-5'>
      {/* <div>
				<BarChart response={response} />
				</div> */}
      </div>
      
      <div className="flex gap-4 mb-4">
        {resp.upper.style !== -1 && <button onClick={() => handleCategoryClick('상의')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '상의' ? 'bg-violet-300' : 'bg-white'}`}>상의</button>}
        {resp.skirt.style !== -1 && <button onClick={() => handleCategoryClick('치마')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '치마' ? 'bg-violet-300' : 'bg-white'}`}>치마</button>}
        {resp.pants.style !== -1 && <button onClick={() => handleCategoryClick('바지')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '바지' ? 'bg-violet-300' : 'bg-white'}`}>바지</button>}
        {resp.dress.style !== -1 && <button onClick={() => handleCategoryClick('드레스')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '드레스' ? 'bg-violet-300' : 'bg-white'}`}>드레스</button>}
      </div>
      <div className='w-1/4 justify-center  items-center mb-10 min-w-72'>
      <div className='bg-[#f6f4f6]/60 text-[#161616]/80  shadow-md  '>
                    <div className='w-full h-2 bg-[#f6f4f9] shadow-md rounded-lg'></div>
                    <div className='p-5 flex flex-col items-start space-y-1'>
                    <div className='text-violet-900/50'>{categories[recommendData.kindId]}</div>                 
                    <div className='py-1 pb-3 '>
                    <div className='font-bold px-6 bg-violet-100 rounded-sm w-64'>{selectedCategory}</div>
                    </div>
                    <div>소재: {recommendData.texture}</div>
                    <div>프린트: {recommendData.print}</div>
                    <div>디테일: {recommendData.detail}</div>
                    </div>
                </div> 
                </div>   
                
      {/* 선택된 카테고리에 따라 상품 표시 */}
      {/* <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendList.map((recommendItem, index) => (
          // 카테고리에 따라 선택된 상품만 표시
        (
            <div key={recommendItem.productCode + index} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
              style={{ width: '200px', minWidth: '200px', flex: ' 1 0 auto' }}
            >
              <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
              <h2>{recommendItem.name}</h2>
              <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
            </div>
          )
        ))}
      </div>       */}
      <h1 className='text-xl font-bold mb-8 flex justify-start items-start p-1'><div className='p-1'>위 사진의 </div><span className='bg-violet-500 rounded-md text-white ml-2 p-1'>{selectedCategory}</span><div className='p-1'>와 어울리는 추천 상품</div></h1>
      {/* 추천된 상품 리스트와 이미지를 표시합니다. */}
      <h2 className='font-bold'>아우터</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendList.map((recommendItem, index) => {
          // console.log('recommendItem.kind.gkingId', recommendItem.kind.gkindId);
          if (recommendItem.kind.gkindId === "OUT") {
            return (
              <div key={recommendItem.productCode + index}>
               <ClothesCard item={recommendItem}/>
              </div>
            )
          }
        })}
        {recommendList.filter(recommendItem => recommendItem.kind.gkindId === "OUT").length === 0 && (
          <p className="text-center">추천상품이 없습니다.</p>
        )}
      </div>
      <h2 className='font-bold'>상의</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendList.map((recommendItem, index) => {
          if (recommendItem.kind.gkindId === "INN") {
            return (
              <div key={recommendItem.productCode + index}>
               <ClothesCard item={recommendItem}/>
              </div>
            )
          }
        })}
        {recommendList.filter(recommendItem => recommendItem.kind.gkindId === "INN").length === 0 && (
          <p className="text-center">추천상품이 없습니다.</p>
        )}
      </div>
      <h2 className='font-bold'>하의</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendList.map((recommendItem, index) => {
          if (recommendItem.kind.gkindId === "BOT") {
            return (
              <div key={recommendItem.productCode + index}>
               <ClothesCard item={recommendItem}/>
              </div>
            )
          }
        })}
        {recommendList.filter(recommendItem => recommendItem.kind.gkindId === "BOT").length === 0 && (
          <p className="text-center">추천상품이 없습니다.</p>
        )}
      </div>
      <h2 className='font-bold'>세트</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendList.map((recommendItem, index) => {
          if (recommendItem.kind.gkindId === "SET") {
            return (
              <div key={recommendItem.productCode + index}>
               <ClothesCard item={recommendItem}/>
              </div>
            )
          }
        })}
        {recommendList.filter(recommendItem => recommendItem.kind.gkindId === "SET").length === 0 && (
          <p className="text-center">추천상품이 없습니다.</p>
        )}
      </div>
    </div>
  )
}

