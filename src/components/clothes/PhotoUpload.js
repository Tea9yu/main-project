import React, { useState } from 'react';

const PhotoUpload = () => {
	const [dragging, setDragging] = useState(false);
	const [image, setImage] = useState(null);

	const handleDragEnter = (e) => {
		e.preventDefault();
		setDragging(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setDragging(false);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
	  e.preventDefault();
	  setDragging(false);
	  const file = e.dataTransfer.files[0];		
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
	  // 파일 처리 로직을 여기에 추가합니다.
	};
	console.log("handleDrop:", image)

	const handleFileUpload = (file) => {
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

	return (
		<div className='flex justify-center '>
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
					<button className='w-full rounded-3xl mt-10 border p-4'>업로드</button>
				</div>
			</div>
		</div>

	);
};

export default PhotoUpload;
