import axios from 'axios';
import React, { useState } from 'react';

const PhotoUpload = () => {
	const [dragging, setDragging] = useState(false);	// 드래그 상태를 관리하는 상태
	const [image, setImage] = useState(null);	// 업로드할 이미지를 관리하는 상태
	const [imaget, setImaget] = useState(null);

	// 드래그 이벤트 핸들러
	const handleDragEnter = (e) => {
		e.preventDefault();
		setDragging(true);	// 드래그 상태를 true로 설정
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setDragging(false);	// 드래그 상태를 false로 설정
	};

	const handleDragOver = (e) => {
		e.preventDefault();	// 기본 드래그 이벤트를 취소
	};

	const handleDrop = (e) => {
	  e.preventDefault();	// 기본 드래그 이벤트를 취소
	  setDragging(false);	// 드래그 상태를 false로 설정
	  const file = e.dataTransfer.files[0];	// 드롭된 파일을 가져옴
	  if (file && file.type.startsWith('image/')) {	// 파일이 이미지인 경우만
	    const reader = new FileReader();	// FileReader 객체를 생성
	    reader.onloadend = () => {
	      setImage(reader.result);	// 이미지를 상태에 저장
	    };
	    reader.readAsDataURL(file);		// 파일을 읽어 데이터 URL로 변환합니다.
	  } else {
			alert("파일형식이 잘못되었습니다.")
	    console.log('Please drop an image file.');
			window.location.reload();	// 페이지 새로고침
	  }
	  // 파일 처리 로직을 여기에 추가합니다.
	};
	// console.log("handleDrop:", image)

	const handleFileUpload = (file) => {
		console.log("handleFileUpload", file)
		setImaget(file) ;
		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result); 
			};
			reader.readAsDataURL(file);
		} else {
			alert("파일형식이 잘못되었습니다.")
			console.log('Please drop an image file.');
			window.location.reload();
		}
	};

	const handleFileChange = (e) => {
		handleFileUpload(e.target.files[0]);
	};

	const handleUpload = async () => {
		console.log("file",imaget)
		const formData = new FormData();
		// formData.append("image", image);	// img는 서버에서 이미지 파일을 참조하는데 사용하는 키이다.
		formData.append("file", imaget); 

		try { 
			const response = await axios.post(`http://10.125.121.184:8080/upload`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				// type: 'appication/json',
				// body: {
				// 	file: imaget,
				// },
				// responseType: 'blob',
			});

			// const response = await axios({
			// 	method: 'post',
			// 	url: 'http://10.125.121.184:8080/upload',
			// 	data: { formData },
			// 	headers: {
			// 		'Content-Type': 'multipart/form-data', 
			// 	},
			// 	body: {file : image},
			// });
			console.log('업로드 성공:', response);
			alert("업로드 성공");
		} catch (error) {
			console.error("업로드 실패:", error);
			alert("업로드 실패");
		}
	}

	return (
		<div className='flex bg-white justify-center mt-10 '>
			<div className='m-10'>
				<div
					onDragEnter={handleDragEnter}
					onDragLeave={handleDragLeave}
					onDragOver={handleDragOver}
					onDrop={handleDrop}
					style={{ border: `2px dashed ${dragging ? 'green' : 'black'}`, padding: '10px', width: '500px', height: '600px' }}
				>
					{image && <img src={image} alt="Dropped" style={{ width: '100%', height: '100%' }} />}
					{/* {dragging ? <div>Drop the file here</div> : <div>Drag a file here</div>} */}


				</div>
				<div className='mt-5'>
					<input type="file" onChange={handleFileChange} />
					{/* <p>{image ? `File name: ${image[0].name}` : "no files uploaded yet"}</p> */}
				</div>
				<div className='flex justify-center'>
					<button onClick={handleUpload}  className='w-full rounded-3xl mt-10 border p-4'>업로드</button>
				</div>
			</div>
		</div>

	);
};

export default PhotoUpload;
