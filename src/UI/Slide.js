import React, { useState, useEffect, useCallback, useRef } from 'react';


export const Main = () => {
	const imageRef = useRef();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slideLength, setSlideLength] = useState(0);
	const imageNames = ['데일리.jpg', '매장.jpg', '매장2.jpg']; // 사용할 이미지 파일의 이름 목록

	useEffect(() => {
		// 이미지 파일의 개수를 가져와서 슬라이드 총 개수 설정
		setSlideLength(imageNames.length);
	}, [imageNames]);

	useEffect(() => {
		console.log('imageRef', imageRef)
		if (imageRef.current) {
			console.log('imageRef.current', imageRef.current)
			// 슬라이드 위치 설정
			imageRef.current.style.marginLeft = `${-currentSlide * 1280}px`;
		}
	}, [currentSlide, imageRef])

	const isCheckActivePrevbutton = useCallback(() => {
		return currentSlide >= 1;
	}, [currentSlide])

	const isCheckActiveNextbutton = useCallback(() => {
		return currentSlide < slideLength - 1;
	}, [currentSlide, slideLength])

	const prevButtonClick = useCallback(() => {
		if (!isCheckActivePrevbutton()) return

		setCurrentSlide(prev => prev - 1)
	}, [isCheckActivePrevbutton])

	const nextButtonClick = useCallback(() => {
		if (!isCheckActiveNextbutton()) return

		setCurrentSlide(prev => prev + 1)
	}, [isCheckActiveNextbutton])

	return (
		<div>
			<div className={'main-img-section'}>
				<ul ref={imageRef} className='slider-list'>
					{/* 이미지 파일의 이름 목록을 기반으로 슬라이드 구성 */}
					{imageNames.map((imageName, index) => (
						<li key={index}>
							<img src={`.././images/${imageName}`} alt={`Slide ${index + 1}`} />
						</li>
					))}
				</ul>
				<button onClick={prevButtonClick} className='btn-arrow btn-prev'></button>
				<button onClick={nextButtonClick} className='btn-arrow btn-next'></button>
			</div>
			...
		</div>
	)
}


// import { useState, useEffect, useCallback, useRef } from 'react';

// export const Main = () => {
// 	const ref = useRef();
// 	const [currentSlide, setCurrentSlide] = useState(0);
// 	const [slideLength, setSlideLength] = useState(0);
// 	const imageNames = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // 사용할 이미지 파일의 이름 목록

// 	useEffect(() => {
// 		// 슬라이드 총 개수 설정
// 		setSlideLength(imageNames.length);
// 	}, [imageNames]);

// 	useEffect(() => {
// 		if (ref.current) {
// 				// 슬라이드 위치 설정
// 				ref.current.style.marginLeft = `${-currentSlide * 1280}px`;
// 		}
// }, [currentSlide, ref])

// 	// useEffect(() => {
// 	// 	ref.current.style.marginLeft = `${-currentSlide * 1280}px`;
// 	// }, [currentSlide])

// 	const isCheckActivePrevbutton = useCallback(() => {
// 		return currentSlide >= 1
// 	}, [currentSlide])

// 	const isCheckActiveNextbutton = useCallback(() => {
// 		return currentSlide < slideLength - 1
// 	}, [currentSlide, slideLength])

// 	const prevButtonClick = useCallback(() => {
// 		if (!isCheckActivePrevbutton()) return

// 		setCurrentSlide(prev => prev - 1)
// 	}, [isCheckActivePrevbutton])

// 	const nextButtonClick = useCallback(() => {
// 		if (!isCheckActiveNextbutton()) return

// 		setCurrentSlide(prev => prev + 1)
// 	}, [isCheckActiveNextbutton])

// 	return (
// 		<div>
// 			<div className={'main-img-section'}>
// 				<ul ref={ref} className='slider-list'>
// 					{/* 이미지 파일의 이름 목록을 기반으로 슬라이드 구성 */}
// 					{imageNames.map((imageName, index) => (
// 						<li key={index}>
// 							<img src={`images/${imageName}`} alt={`Slide ${index + 1}`} />
// 						</li>
// 					))}
// 				</ul>
// 				<button onClick={prevButtonClick} className='btn-arrow btn-prev'></button>
// 				<button onClick={nextButtonClick} className='btn-arrow btn-next'></button>
// 			</div>
// 			...
// 		</div>
// 	)
// }