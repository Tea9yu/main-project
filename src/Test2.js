import React, { useEffect, useState } from 'react'
import PhotoResultPage from './components/clothes/PhotoResultPage'
import BarChart from './UI/BarChart'

export default function Test2() {
  const res = {
    'upper': {
      'percentage': 35.0,
      'style': 10,
      'season': '봄',
      'kindId': '',
      'recommend': [{
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      },
      {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      },
      {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      },
      {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      },
      {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      },
      ],
    },
    'skirt': {
      'percentage': 25.0,
      'style': 8,
      'season': '봄',
      'kindId': '',
      'recommend': [{
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      },
      ],
    },
    'pants': {
      'percentage': 20.0,
      'style': 9,
      'season': '봄',
      'kindId': '',
      'recommend': [{
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      },
      ],
    },
    'dress': {
      'percentage': 20.0,
      'style': 9,
      'season': '봄',
      'kindId': '',
      'recommend': [{
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      }, {
        "productCode": "ADC3WS001",
        "name": "S/T프릴NB",
        "price": 20700,
        "month": 1,
        "category": {
          "categoryId": "A",
          "categoryName": "의류"
        },
        "kind": {
          "kindId": "WS",
          "kindName": "남방",
          "gkindId": "INN"
        }
      },
      ],
    }
  }

  return (
    <div className="mt-20 bg-white">
      <div className='flex flex-col w-full'>
        <div className=''>
          사진
        </div>
        <div className=''>
          {/* <BarChart response={res} /> */}
        </div>
      </div>
      <div>
        {/* <PhotoResultPage response={res} /> */}
      </div>
    </div>
  )
}


