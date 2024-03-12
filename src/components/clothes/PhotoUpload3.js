import React, { useState } from 'react';

const ImageUpload = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [preview, setPreview] = useState(null);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
		if (event.target.files[0] && event.target.files[0].type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			reader.readAsDataURL(event.target.files[0]);
		} else {
			alert("파일형식이 잘못되었습니다.")
			window.location.reload();
		}

	};

	const handleUpload = async () => {
		const formData = new FormData();
		formData.append('file', selectedFile);

		try {
			const response = await fetch('http://10.125.121.184:8080/upload', {
				method: 'POST',
				body: formData,
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.text();
			console.log('업로드 성공:', data);
			alert('업로드 성공');
		} catch (error) {
			console.error('업로드 실패:', error);
			alert('업로드 실패');
		}
	};

	return (
		<div className='flex justify-center'>
			<div className='m-10'>
				<div style={{ border: `4px dashed ${selectedFile ? 'green' : 'grey'}`, borderRadius: '30px', padding: '10px', width: '500px', height: '600px' }}>
					{preview && <img src={preview} alt='Preview' style={{width: '100%', height:'100%', borderRadius: '20px'}} />}
				</div>
				<div className='mt-5'>
					<input type="file" onChange={handleFileChange} />
				</div>
				<div className='flex justify-center'>
					<button onClick={handleUpload} className='w-full rounded-3xl mt-10 border p-4'>업로드</button>
				</div>
			</div>
		</div>
	);
};

export default ImageUpload;
