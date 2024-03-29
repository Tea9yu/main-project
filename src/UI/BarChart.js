import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const BarChart = (response, handleCategoryClick) => {
	// 카테고리 데이터를 상태로 관리합니다.
	const [categoryData, setCategoryData] = useState([]);

	const resp = response.response

	// API로부터 데이터를 가져오는 함수입니다.
	const fetchDataFromApi = async () => {
		try {
			// API에서 데이터를 가져옵니다.      
			// const data = await resp.json();
			// 가져온 데이터에서 카테고리 데이터를 상태로 설정합니다.
			setCategoryData(resp);
			console.log('data= ', categoryData)
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	// 컴포넌트가 마운트될 때 데이터를 가져옵니다.
	useEffect(() => {
		fetchDataFromApi();
	}, []);

	// 카테고리 데이터가 변경될 때마다 그래프를 다시 그립니다.
	useEffect(() => {
		drawGraph();
	}, [categoryData]);

	// 그래프를 그리는 함수입니다.
	const drawGraph = () => {
		// canvas 요소를 가져옵니다.
		const ctx = document.getElementById('categoryGraph').getContext('2d');

		// 이미 차트가 생성된 경우, 파괴합니다.
		if (window.categoryChart) {
			window.categoryChart.destroy();
		}

		// 카테고리별 데이터를 추출합니다.
		const labels = Object.keys(categoryData);
		const percentages = labels.map(label => categoryData[label].percentage);


		console.log('resp= ', resp)
		console.log('categoryData= ', categoryData)
		console.log('labels= ', labels)
		console.log('percentages ', percentages)

		// Chart.js를 사용하여 파이 차트를 그립니다.
		window.categoryChart = new Chart(ctx, {
			type: 'pie', // 파이 차트를 사용합니다.
			data: {
				// labels: labels, // 라벨을 설정합니다.
				labels: ['상의', '치마', '바지', '드레스'], // 라벨을 설정합니다.
				datasets: [{
					label: '카테고리 비율', // 데이터셋의 라벨을 설정합니다.
					data: percentages, // 각 카테고리의 비율을 설정합니다.
					backgroundColor: [
						'rgba(255, 99, 132, 0.5)', // 각 카테고리의 색상입니다.
						'rgba(54, 162, 235, 0.5)',
						'rgba(255, 206, 86, 0.5)',
						'rgba(75, 192, 192, 0.5)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				// scales: {
				// 	x: {
				// 		beginAtZero: true // x 축이 0부터 시작하도록 설정합니다.
				// },
				// 		y: {
				// 				beginAtZero: true // y 축이 0부터 시작하도록 설정합니다.
				// 		}
				// },
				maintainAspectRatio: false,
				plugins: {
					title: {
						display: true,
						text: '카테고리 비율' // 그래프의 제목을 설정합니다.
					}
				},
				// 클릭 이벤트 핸들러를 추가합니다.
				onClick: (event, elements) => {
					if (elements && elements.length > 0) {
						// 클릭된 요소의 인덱스를 가져옵니다.
						const index = elements[0].index;
						// 클릭된 요소의 라벨을 가져옵니다.
						const label = labels[index];
						// 클릭된 요소의 데이터를 가져옵니다.
						const data = categoryData[label];
						// 클릭된 요소의 데이터를 콘솔에 로그로 출력합니다.
						console.log('Clicked label:', label);
						console.log('Clicked data:', data);
					}
				}
			}
		});
	};

	return (
		<div className='w-1/3 mx-20'>
			{/* 그래프를 그릴 canvas 요소입니다. */}
			<canvas id="categoryGraph" width="400" height="400"></canvas>
		</div>
	);
};

export default BarChart;