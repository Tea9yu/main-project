import React, { useRef, useState } from 'react';

const ImageUpload = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [preview, setPreview] = useState(null);
	const [fileName, setFileName] = useState('');	// 파일 이름을 저장할 상태를 추가합니다.

	const fileInput = useRef();	// 파일 입력 요소를 참조할 ref를 생성합니다.

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		// setSelectedFile(event.target.files[0]);
		// if (file && file.type.startsWith('image/')) {
		// 	setFileName(file.name);	// 파일이 선택되면 파일 이름을 저장합니다.
		// 	// const reader = new FileReader();
		// 	// reader.onloadend = () => {
		// 	// 	setPreview(reader.result);
		// 	// };
		// 	// reader.readAsDataURL(file);
		// 	const img = new Image();
		// 	img.src = URL.createObjectURL(file);
		// 	img.onload = () => {
		// 		const canvas = document.createElement('canvas');
		// 		const MAX_WIDTH = 800; // 이미지의 최대 너비를 설정합니다.
		// 		const scaleSize = MAX_WIDTH / img.width; // 이미지의 스케일을 계산합니다.
		// 		canvas.width = MAX_WIDTH; // 캔버스의 너비를 설정합니다.
		// 		canvas.height = img.height * scaleSize; // 캔버스의 높이를 설정합니다.
		// 		const ctx = canvas.getContext('2d');
		// 		ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 캔버스에 이미지를 그립니다.
		// 		canvas.toBlob((blob) => {
		// 			const newFile = new File([blob], file.name, {type: 'image/jpeg'});
		// 			setPreview(URL.createObjectURL(newFile));
		// 			setSelectedFile(newFile);
					
		// 		}, file.type, 1);
		// 	};
		// } 
		// else {
		// 	alert("파일형식이 잘못되었습니다.")
		// 	window.location.reload();
		// }
		if (file && file.type.startsWith('image/')) {
			setFileName(file.name); // 파일이 선택되면 파일 이름을 저장합니다.
			setSelectedFile(file); // 이미지를 변환하지 않고 그대로 저장합니다.
			setPreview(URL.createObjectURL(file));
		} else {
			alert("파일 형식이 잘못되었습니다.");
			window.location.reload();
		}
		
	};

	const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        handleFileChange({target: {files: [file]}});
    };

	const handleUpload = async () => {
		const formData = new FormData();
		formData.append('file', selectedFile);

		try {
			const response = fetch('http://10.125.121.184:8080/giveimage', {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
				method: 'POST',
				body: formData,
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = response.text();
			console.log('업로드 성공:', data);
			alert('업로드 성공');
		} catch (error) {
			console.error('업로드 실패:', error);
			alert('업로드 실패');
		}
	};

	return (
		<div className='flex justify-center mt-10 bg-white'>
      <div className='m-10'>
        <div style={{ border: `4px dashed ${selectedFile ? 'green' : 'grey'}`, borderRadius: '30px', padding: '10px', width: '500px', height: '600px' }} 
					onDragOver={handleDragOver}
					onDrop={handleDrop}
				>
          {preview && <img src={preview} alt='Preview' style={{ width: '100%', height: '100%', borderRadius: '20px' }} />}
        </div>
        <div className='mt-5 flex gap-5 items-center border p-2 rounded-2xl'>
          <input type="file" onChange={handleFileChange} ref={fileInput} style={{ display: 'none' }} /> {/* 파일 입력 요소를 숨깁니다 */}
          <button onClick={() => fileInput.current.click()} className='border rounded-3xl bg-red-400 text-white p-2'>파일 첨부</button> {/* 사용자 정의 버튼을 추가합니다 */}
          {fileName && <p>선택된 파일: {fileName}</p>} {/* 선택한 파일의 이름을 표시합니다 */}
        </div>
        <div className='flex justify-center'>
          <button onClick={handleUpload} className='w-full rounded-3xl mt-10 border p-4'>업로드</button>
        </div>
      </div>
    </div>
	);
};

export default ImageUpload;


// import React, { useRef, useState } from 'react';

// const ImageUpload = () => {
// 	const [selectedFile, setSelectedFile] = useState(null);
// 	const [preview, setPreview] = useState(null);
// 	const [fileName, setFileName] = useState('');	// 파일 이름을 저장할 상태를 추가합니다.

// 	const fileInput = useRef();	// 파일 입력 요소를 참조할 ref를 생성합니다.

// 	const handleFileChange = (event) => {
// 		const file = event.target.files[0];
// 		// setSelectedFile(event.target.files[0]);
// 		if (file && file.type.startsWith('image/')) {
// 			setFileName(file.name);	// 파일이 선택되면 파일 이름을 저장합니다.
// 			// const reader = new FileReader();
// 			// reader.onloadend = () => {
// 			// 	setPreview(reader.result);
// 			// };
// 			// reader.readAsDataURL(file);
// 			const img = new Image();
// 			img.src = URL.createObjectURL(file);
// 			img.onload = () => {
// 				const canvas = document.createElement('canvas');
// 				const MAX_WIDTH = 800; // 이미지의 최대 너비를 설정합니다.
// 				const scaleSize = MAX_WIDTH / img.width; // 이미지의 스케일을 계산합니다.
// 				canvas.width = MAX_WIDTH; // 캔버스의 너비를 설정합니다.
// 				canvas.height = img.height * scaleSize; // 캔버스의 높이를 설정합니다.
// 				const ctx = canvas.getContext('2d');
// 				ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 캔버스에 이미지를 그립니다.
// 				canvas.toBlob((blob) => {
// 					const newFile = new File([blob], file.name, {type: 'image/jpeg'});
// 					setPreview(URL.createObjectURL(newFile));
// 					setSelectedFile(newFile);
					
// 				}, file.type, 1);
// 			};
// 		} else {
// 			alert("파일형식이 잘못되었습니다.")
// 			window.location.reload();
// 		}
		
// 	};

// 	const handleUpload = async () => {
// 		const formData = new FormData();
// 		formData.append('file', selectedFile);

// 		try {
// 			const response = await fetch('http://10.125.121.184:8080/upload', {
// 				method: 'POST',
// 				body: formData,
// 			});

// 			if (!response.ok) {
// 				throw new Error('Network response was not ok');
// 			}

// 			const data = await response.text();
// 			console.log('업로드 성공:', data);
// 			alert('업로드 성공');
// 		} catch (error) {
// 			console.error('업로드 실패:', error);
// 			alert('업로드 실패');
// 		}
// 	};

// 	return (
// 		<div className='flex justify-center mt-10 bg-white'>
//       <div className='m-10'>
//         <div style={{ border: `4px dashed ${selectedFile ? 'green' : 'grey'}`, borderRadius: '30px', padding: '10px', width: '500px', height: '600px' }}>
//           {preview && <img src={preview} alt='Preview' style={{ width: '100%', height: '100%', borderRadius: '20px' }} />}
//         </div>
//         <div className='mt-5 flex gap-5 items-center border p-2 rounded-2xl'>
//           <input type="file" onChange={handleFileChange} ref={fileInput} style={{ display: 'none' }} /> {/* 파일 입력 요소를 숨깁니다 */}
//           <button onClick={() => fileInput.current.click()} className='border rounded-3xl bg-red-400 text-white p-2'>파일 첨부</button> {/* 사용자 정의 버튼을 추가합니다 */}
//           {fileName && <p>선택된 파일: {fileName}</p>} {/* 선택한 파일의 이름을 표시합니다 */}
//         </div>
//         <div className='flex justify-center'>
//           <button onClick={handleUpload} className='w-full rounded-3xl mt-10 border p-4'>업로드</button>
//         </div>
//       </div>
//     </div>
// 	);
// };

// export default ImageUpload;

// import React, { useState } from 'react';

// const ImageUpload = () => {
// 	const [selectedFile, setSelectedFile] = useState(null);
// 	const [preview, setPreview] = useState(null);

// 	const handleFileChange = (event) => {
// 		const file = event.target.files[0];
// 		// setSelectedFile(event.target.files[0]);
// 		if (file && file.type.startsWith('image/')) {
// 			// const reader = new FileReader();
// 			// reader.onloadend = () => {
// 			// 	setPreview(reader.result);
// 			// };
// 			// reader.readAsDataURL(file);
// 			const img = new Image();
// 			img.src = URL.createObjectURL(file);
// 			img.onload = () => {
// 				const canvas = document.createElement('canvas');
// 				const MAX_WIDTH = 800; // 이미지의 최대 너비를 설정합니다.
// 				const scaleSize = MAX_WIDTH / img.width; // 이미지의 스케일을 계산합니다.
// 				canvas.width = MAX_WIDTH; // 캔버스의 너비를 설정합니다.
// 				canvas.height = img.height * scaleSize; // 캔버스의 높이를 설정합니다.
// 				const ctx = canvas.getContext('2d');
// 				ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 캔버스에 이미지를 그립니다.
// 				canvas.toBlob((blob) => {
// 					const newFile = new File([blob], file.name, {type: 'image/jpeg'});
// 					setPreview(URL.createObjectURL(newFile));
// 					setSelectedFile(newFile);
					
// 				}, file.type, 1);
// 			};
// 		} else {
// 			alert("파일형식이 잘못되었습니다.")
// 			window.location.reload();
// 		}
		
// 	};

// 	const handleUpload = async () => {
// 		const formData = new FormData();
// 		formData.append('file', selectedFile);

// 		try {
// 			const response = await fetch('http://10.125.121.184:8080/upload', {
// 				method: 'POST',
// 				body: formData,
// 			});

// 			if (!response.ok) {
// 				throw new Error('Network response was not ok');
// 			}

// 			const data = await response.text();
// 			console.log('업로드 성공:', data);
// 			alert('업로드 성공');
// 		} catch (error) {
// 			console.error('업로드 실패:', error);
// 			alert('업로드 실패');
// 		}
// 	};

// 	return (
// 		<div className='flex justify-center mt-10'>
// 			<div className='m-10'>
// 				<div style={{ border: `4px dashed ${selectedFile ? 'green' : 'grey'}`, borderRadius: '30px', padding: '10px', width: '500px', height: '600px' }}>
// 					{preview && <img src={preview} alt='Preview' style={{ width: '100%', height: '100%', borderRadius: '20px' }} />}
// 				</div>
// 				<div className='mt-5'>
// 					<input type="file" onChange={handleFileChange} />
// 				</div>
// 				<div className='flex justify-center'>
// 					<button onClick={handleUpload} className='w-full rounded-3xl mt-10 border p-4'>업로드</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ImageUpload;
