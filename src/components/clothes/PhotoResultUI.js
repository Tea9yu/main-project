import React, { useEffect, useState } from 'react'

export default function PhotoResultUI() {
	const [recommend, setRecommend] = useState([]);

	useEffect(() => {
		// 서버에서 추천 상품 및 이미지 데이터를 받아옵니다.
		fetchRecommendations();
	}, []);

	const fetchRecommendations = async () => {
		try {
			// 서버에서 추천 상품 및 이미지 데이터를 가져오는 API를 호출합니다.
			const response = await fetch();
			if (response.ok) {
				// 서버에서 받은 JSON 데이터를 추천 상품 상태에 설정합니다.
				const recommendProductsData = await response.json();
				setRecommend(recommendProductsData);
			} else {
				throw new Error('Failed to fetch recommendations');
			}
		} catch (error) {
			console.error('Error fetching recommendations:', error);
		}
	} 

	return (
		<div className="mt-20 bg-white">
      <h1>Recommended Products</h1>
      {/* 추천된 상품 리스트와 이미지를 표시합니다. */}
      {recommend.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <img src={`http://example.com/product_images/${product.productCode}.jpg`} alt={product.name} />
          <p>Price: {product.price}</p>
          <p>Month: {product.month}</p>
          {/* 그 외 상품 정보를 표시할 수 있습니다. */}
        </div>
      ))}
    </div>
	)
}
