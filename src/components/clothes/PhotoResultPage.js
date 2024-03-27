import React, { useEffect, useState } from 'react'
import BarChart from '../../UI/BarChart';

export default function PhotoResultPage(response) {

  const categories = {
    아우터: { JP: '점퍼', JK: '자켓', CT: '코트', VT: '베스트', CA: '가디건' },
    상의: { TS: '티셔츠', TN: '티셔츠나시', KT: '니트', KN: '니트나시', BL: '블라우스', WS: '남방', BN: '블라우스나시', OP: '원피스' },
    하의: { PT: '바지', DP: '데님', SK: '스커트', LG: '레깅스' },
    세트: { ST: '세트' },
  };
  const resp = response.response
  //   console.log(response.response)
  //   return

  const [similar, setSimilar] = useState(resp.upper.similar);
  const [recommendUpper, setRecommendUpper] = useState(resp.upper.recommend);
  const [recommendSkirt, setRecommendSkirt] = useState(resp.skirt.recommend);
  const [recommendPants, setRecommendPants] = useState(resp.pants.recommend);
  const [recommendDress, setRecommendDress] = useState(resp.dress.recommend);

  const [recommendData, setRecommendData] = useState([]);


  const handleCategoryClick = (category) => {
    // 선택된 카테고리에 따라 해당 카테고리의 상품을 설정합니다.
    if (category === '상의') {
      setRecommendData(resp.upper.recommend);
    } else if (category === '치마') {
      setRecommendData(resp.skirt.recommend);
    } else if (category === '바지') {
      setRecommendData(resp.pants.recommend);
    } else if (category === '드레스') {
      setRecommendData(resp.dress.recommend);
    }
    setSelectedCategory(category);
  };

  const [data, setData] = useState([]);
  console.log('resp', resp)

  // const imagePath =process.env.REACT_APP_STATIC_IMAGE;
  const imagePath = 'http://10.125.121.184:8080/product_image';

  const [selectedCategory, setSelectedCategory] = useState('상의'); // 선택된 카테고리 상태 추가

  useEffect(() => {
    console.log('선택된 카테고리:', selectedCategory);
  }, [selectedCategory]);

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
        {resp.upper.style !== -1 && <button onClick={() => handleCategoryClick('상의')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '상의' ? 'bg-gray-200' : ''}`}>상의</button>}
        {resp.skirt.style !== -1 && <button onClick={() => handleCategoryClick('치마')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '치마' ? 'bg-gray-200' : ''}`}>치마</button>}
        {resp.pants.style !== -1 && <button onClick={() => handleCategoryClick('바지')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '바지' ? 'bg-gray-200' : ''}`}>바지</button>}
        {resp.dress.style !== -1 && <button onClick={() => handleCategoryClick('드레스')} className={`border px-4 py-2 rounded-lg ${selectedCategory === '드레스' ? 'bg-gray-200' : ''}`}>드레스</button>}
      </div>      
      {/* 선택된 카테고리에 따라 상품 표시 */}
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendData.map((recommendItem, index) => (
          // 카테고리에 따라 선택된 상품만 표시
          recommendItem.kindId === selectedCategory && (
            <div key={recommendItem.productCode + index} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
              style={{ width: '200px', minWidth: '200px', flex: ' 1 0 auto' }}
            >
              <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
              <h2>{recommendItem.name}</h2>
              <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
            </div>
          )
        ))}
      </div>      
      <h1>{`위 사진의 ${selectedCategory}와 어울리는 추천 상품`}</h1>
      {/* 추천된 상품 리스트와 이미지를 표시합니다. */}
      <h2 className='font-bold'>아우터</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendData.map((recommendItem, index) => {
          // console.log('recommendItem.kind.gkingId', recommendItem.kind.gkindId);
          if (recommendItem.kind.gkindId === "OUT") {
            return (
              <div key={recommendItem.productCode + index} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
                style={{ width: '200px', minWidth: '200px', flex: ' 1 0 auto' }}
              >
                <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
                <h2>{recommendItem.name}</h2>
                <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
              </div>
            )
          }
        })}
        {recommendData.filter(recommendItem => recommendItem.kind.gkindId === "OUT").length === 0 && (
          <p className="text-center">추천상품이 없습니다.</p>
        )}
      </div>
      <h2 className='font-bold'>상의</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendData.map((recommendItem, index) => {
          if (recommendItem.kind.gkindId === "INN") {
            return (
              <div key={recommendItem.productCode + index} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
                style={{ width: '200px', minWidth: '200px', flex: ' 1 0 auto' }}
              >
                <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
                <h2>{recommendItem.name}</h2>
                <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
              </div>
            )
          }
        })}
        {recommendData.filter(recommendItem => recommendItem.kind.gkindId === "INN").length === 0 && (
          <p className="text-center">추천상품이 없습니다.</p>
        )}
      </div>
      <h2 className='font-bold'>하의</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendData.map((recommendItem, index) => {
          if (recommendItem.kind.gkindId === "BOT") {
            return (
              <div key={recommendItem.productCode + index} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
                style={{ width: '200px', minWidth: '200px', flex: ' 1 0 auto' }}
              >
                <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
                <h2>{recommendItem.name}</h2>
                <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
              </div>
            )
          }
        })}
        {recommendData.filter(recommendItem => recommendItem.kind.gkindId === "BOT").length === 0 && (
          <p className="text-center">추천상품이 없습니다.</p>
        )}
      </div>
      <h2 className='font-bold'>세트</h2>
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendData.map((recommendItem, index) => {
          if (recommendItem.kind.gkindId === "SET") {
            return (
              <div key={recommendItem.productCode + index} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
                style={{ width: '200px', minWidth: '200px', flex: ' 1 0 auto' }}
              >
                <img src={`${imagePath}/${recommendItem.productCode}.jpg`} alt={recommendItem.name} className='w-full h-48 object-cover' />
                <h2>{recommendItem.name}</h2>
                <p>{parseInt(recommendItem.price).toLocaleString('ko-KR')}원</p>
              </div>
            )
          }
        })}
        {recommendData.filter(recommendItem => recommendItem.kind.gkindId === "SET").length === 0 && (
          <p className="text-center">추천상품이 없습니다.</p>
        )}
      </div>
    </div>
  )
}

