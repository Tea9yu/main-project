import React, { useEffect, useState } from 'react'
import PhotoResultPage from './components/clothes/PhotoResultPage'

export default function Test2() {
  const res = {
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
    'pants': {
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
    'dress': {
      // 'percentage': 0.0,
      // 'style': -1,
      // 'season': '봄',
      // 'kindId': '',
      // 'similar': [{
      //   "productCode": "ADC3WS001",
      //   "name": "S/T프릴NB",
      //   "kindId": "TS",
      //   "price": 20700,
      //   "month": 1
      // },
      // {
      //   "productCode": "ADK1JK001",
      //   "name": "S/T프릴NB",
      //   "kindId": "JK",
      //   "price": 21700,
      //   "month": 2
      // },
      // {
      //   "productCode": "ADK1PT005",
      //   "name": "S/T프릴NB",
      //   "kindId": "PT",
      //   "price": 30700,
      //   "month": 3
      // },
      // {
      //   "productCode": "ADK3CA008",
      //   "name": "S/T프릴NB",
      //   "kindId": "CA",
      //   "price": 199000,
      //   "month": 4
      // },
      // {
      //   "productCode": "ADK8JP003",
      //   "name": "S/T프릴NB",
      //   "kindId": "JP",
      //   "price": 279000,
      //   "month": 5
      // }, 
       
      // ],
      // 'recommend': [{
      //   "productCode": "ADC3WS001",
      //   "name": "S/T프릴NB",
      //   "kindId": "TS",
      //   "price": 20700,
      //   "month": 1
      // }, 
      // {
      //   "productCode": "ADK1JK001",
      //   "name": "S/T프릴NB",
      //   "kindId": "JK",
      //   "price": 21700,
      //   "month": 2
      // }, 
      // {
      //   "productCode": "ADK1PT005",
      //   "name": "S/T프릴NB",
      //   "kindId": "PT",
      //   "price": 30700,
      //   "month": 3
      // }, 
      // {
      //   "productCode": "ADK3CA008",
      //   "name": "S/T프릴NB",
      //   "kindId": "CA",
      //   "price": 199000,
      //   "month": 4
      // }, 
      // {
      //   "productCode": "ADK8JP003",
      //   "name": "S/T프릴NB",
      //   "kindId": "JP",
      //   "price": 279000,
      //   "month": 5
      // }, 
      // ],
    }
  }

	return (
		<div className="mt-20 bg-white">
      <PhotoResultPage response = {res}/>
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
