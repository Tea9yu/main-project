import React from 'react'

export default function ClothesCard({item}) {
    const imagePath = 'http://10.125.121.184:8080/product_image';
  return (
    <button onClick={()=>window.location.replace(`../detail/${item.productCode}`)}>
      <div className='border bg-white rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0'
                style={{ width: '200px', minWidth: '200px', flex: ' 1 0 auto' }}
              >
                <img src={`${imagePath}/${item.productCode}.jpg`} alt={item.name} className='w-full h-48 object-cover' />
                <h2>{item.name}</h2>
                <p>{parseInt(item.price).toLocaleString('ko-KR')}원</p>
              </div>
    </button>
  )
}
