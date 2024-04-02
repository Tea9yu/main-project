import React from 'react'
import HomeCardItem from './HomeCardItem';
import './HomeCard.css';
import img1 from '../../images/전신.PNG'
import img2 from '../../images/추천 결과2.PNG'
import img3 from '../../images/마이페이지.PNG'
import img4 from '../../images/의류리스트.PNG'

function HomeCards() {
	return (
		<div className='cards'>
			{/* <h1>Check out these EPIC Destinations!</h1> */}
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<HomeCardItem
							src={img1}
							text="자신의 옷이나 착장샷을 업로드하기"
							label='Adventure'
							path='/upload'
						/>
						<HomeCardItem
							src={img2}
							text="업로드한 의류 사진에 대한 추천 받은 옷 상세보기"
							label='Luxury'
							path='/detail/ADK8TS004'
						/>
					</ul>
					<ul className='cards__items'>
						<HomeCardItem
							src={img3}
							text='추천 받은 옷을 사용자 페이지로 자동 저장'
							label='Mystery'
							path='/mypage'
						/>
						<HomeCardItem
							src={img4}
							text='추천해주는 의류 정보를 한 번에 볼 수 있는 리스트'
							label='Adventure'
							path='/clothes'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default HomeCards;