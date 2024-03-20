import React, { useEffect, useState } from 'react'

const response = {
  'upper': {
    'percentage': 0.0,
    'style': -1,
    'season': '봄',
    'kindId': '',
    'similar': [{
      "productCode": "ADC3WS001",
      "name": "S/T프릴NB",
      "kindId": "TS",
      "price": 20700,
      "month": 1
    },
    {
      "productCode": "ADK1JK001",
      "name": "S/T프릴NB",
      "kindId": "JK",
      "price": 21700,
      "month": 2
    },
    {
      "productCode": "ADK1PT005",
      "name": "S/T프릴NB",
      "kindId": "PT",
      "price": 30700,
      "month": 3
    },
    {
      "productCode": "ADK3CA008",
      "name": "S/T프릴NB",
      "kindId": "CA",
      "price": 199000,
      "month": 4
    },
    {
      "productCode": "ADK8JP003",
      "name": "S/T프릴NB",
      "kindId": "JP",
      "price": 279000,
      "month": 5
    }, 
     
    ],
    'recommend': [{
      "productCode": "ADC3WS001",
      "name": "S/T프릴NB",
      "kindId": "TS",
      "price": 20700,
      "month": 1
    }, 
    {
      "productCode": "ADK1JK001",
      "name": "S/T프릴NB",
      "kindId": "JK",
      "price": 21700,
      "month": 2
    }, 
    {
      "productCode": "ADK1PT005",
      "name": "S/T프릴NB",
      "kindId": "PT",
      "price": 30700,
      "month": 3
    }, 
    {
      "productCode": "ADK3CA008",
      "name": "S/T프릴NB",
      "kindId": "CA",
      "price": 199000,
      "month": 4
    }, 
    {
      "productCode": "ADK8JP003",
      "name": "S/T프릴NB",
      "kindId": "JP",
      "price": 279000,
      "month": 5
    }, 
    ],
  },
  'skirt': {
  },
  'pants': {
  },
  'dress': {
  }
}

export default function PhotoResultUI() {
  const [similar, setSimilar] = useState(response.upper.similar);
	const [recommend, setRecommend] = useState(response.upper.recommend);

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
      <h1>Similar Products</h1>
      {/* 추천된 상품 리스트와 이미지를 표시합니다. */}
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
        {similar.map((similarItem) => (
          <div key={similarItem.productCode} className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
          style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
          >
            <img src={`${process.env.PUBLIC_URL}/recommend_images/${similarItem.productCode}.jpg`} alt={similarItem.name} />
            <h2>{similarItem.name}</h2>
            <p>{parseInt(similarItem.price).toLocaleString('ko-KR')}원</p>
          </div>
        ))}
      </div>
      <h1>Recommended Products</h1>
      {/* 추천된 상품 리스트와 이미지를 표시합니다. */}
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-4 min-w-[900px]'>
        {recommend.map((recommendItem) => (
          <div key={recommendItem.productCode} className='border'
          style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
          >
            <img src={`${process.env.PUBLIC_URL}/recommend_images/${recommendItem.productCode}.jpg`} alt={recommendItem.name} />
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


// import Slider from "react-slick";
// import "./slider/slick.css";
// import "./slider/slick-theme.css";
// import PhotoResultUI from "./components/clothes/PhotoResultUI";

// const response = {
//   'upper': {
//     'percentage': 0.0,
//     'style': -1,
//     'season': '봄',
//     'kindId': '',
//     'similar': [{
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 20700,
//       "month": 1
//     },
//     {
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 21700,
//       "month": 2
//     },
//     {
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 30700,
//       "month": 3
//     },
//     {
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 40700,
//       "month": 4
//     },
//     {
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 20700,
//       "month": 5
//     }, 
     
//     ],
//     'recommend': [{
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 20700,
//       "month": 1
//     }, 
//     {
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 21700,
//       "month": 2
//     }, 
//     {
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 30700,
//       "month": 3
//     }, 
//     {
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 40700,
//       "month": 4
//     }, 
//     {
//       "productCode": "ADC3WS001",
//       "name": "S/T프릴NB",
//       "kindId": "TS",
//       "price": 20700,
//       "month": 5
//     }, 
//     ],
//   },
//   'skirt': {
//   },
//   'pants': {
//   },
//   'dress': {
//   }
// }


// export default function Test() {


//   return (
//     <>

//       <div className="mt-20 bg-white">
//         <PhotoResultUI rec={response} />
//         <div>
//           {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
//         </div>
//       </div>

//     </>
//   );
// }



// import Slider from "react-slick";
// import "./slider/slick.css";
// import "./slider/slick-theme.css";
// import PhotoResultUI from "./components/clothes/PhotoResultUI";

// export default function Test() {
//   const response = {
//     'upper': {
//       'percentage': 0.0,
//       'style': -1,
//       'season': '봄',
//       'kindId': '',
//       'similar': [{
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 20700,
//         "month": 1
//       },
//       {
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 21700,
//         "month": 2
//       },
//       {
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 30700,
//         "month": 3
//       },
//       {
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 40700,
//         "month": 4
//       },
//       {
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 20700,
//         "month": 5
//       }, 
       
//       ],
//       'recommend': [{
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 20700,
//         "month": 1
//       }, 
//       {
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 21700,
//         "month": 2
//       }, 
//       {
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 30700,
//         "month": 3
//       }, 
//       {
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 40700,
//         "month": 4
//       }, 
//       {
//         "productCode": "ADC3WS001",
//         "name": "S/T프릴NB",
//         "kindId": "TS",
//         "price": 20700,
//         "month": 5
//       }, 
//       ],
//     },
//     'skirt': {
//     },
//     'pants': {
//     },
//     'dress': {
//     }
//   }

//   return (
//     <>

//       <div className="mt-20 bg-white">
//         <PhotoResultUI rec={response} />
//         <div>
//           {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
//         </div>
//       </div>

//     </>
//   );
// }
