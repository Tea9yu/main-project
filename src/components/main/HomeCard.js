import React from 'react'
import HomeCardItem from './HomeCardItem';
import './HomeCard.css';
import img1 from '../../images/이미지 업로드.PNG'
import img2 from '../../images/추천 결과2.PNG'
import img3 from '../../images/매장.jpg'
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
							text="자신의 옷과 어울리는 옷 추천"
							label='Adventure'
							path='/upload'
						/>
						<HomeCardItem
							src={img2}
							text="추천 받은 옷 상세보기"
							label='Luxury'
							path='/clothes'
						/>
					</ul>
					<ul className='cards__items'>
						<HomeCardItem
							src={img3}
							text='추천 받은 옷 사용자 페이지로 자동 저장'
							label='Mystery'
							path='/mypage'
						/>
						<HomeCardItem
							src={img4}
							text='추천 받은 옷 사용자 페이지로 자동 저장'
							label='Adventure'
							path='/mypage'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default HomeCards;