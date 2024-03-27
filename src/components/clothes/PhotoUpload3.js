import React, { useEffect, useRef, useState } from 'react';
import Test2 from '../../Test2';
import { LoginStAtom } from '../member/LoginStAtom';
import { useRecoilState } from 'recoil';
import PhotoResultPage from './PhotoResultPage';
import Loading from '../../UI/Loading';
import { useNavigate } from 'react-router-dom';
import BarChart from '../../UI/BarChart';
import EXIF from 'exif-js';
import plate from '../../images/namelabel.png'

const ImageUpload = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [preview, setPreview] = useState(null);
	const [dimensions,setDimensions] = useState(null);
	const [fileName, setFileName] = useState('');	// 파일 이름을 저장할 상태를 추가합니다.
	const [dataA, setDataA] = useState();
	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const isLoggedIn = localStorage.getItem("token");
	const [ishandling, setIshandling] = useState(false);

	const navigate = useNavigate();

	const fileInput = useRef();	// 파일 입력 요소를 참조할 ref를 생성합니다.

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		// setSelectedFile(event.target.files[0]);
		// if (file && file.type.startsWith('image/')) {
		// 	setFileName(file.name);	// 파일이 선택되면 파일 이름을 저장합니다.
			// const reader = new FileReader();
			// reader.onload = () => {
			// 	const img = new Image();
			// if (file) {
			// 	EXIF.getData(file, function() {
			// 	  const width = EXIF.getTag(this, "PixelXDimension");
			// 	  const height = EXIF.getTag(this, "PixelYDimension");
			// 	  setDimensions(( width, height ));
			// 	});
			//   }
			// console.log(dimensions)
			// };
			// reader.readAsDataURL(file);
			// const img = new Image();
			// img.src = URL.createObjectURL(file);
			// img.onload = () => {
			// 	setFileSize([img.width,img.height])
			// }
			// console.log(fileSize)
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
		handleFileChange({ target: { files: [file] } });
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		setLoading(true);	// api 호출전에 true로 변경하여 로딩화면 띄우기


		// 파일을 첨부하지 않은 경우에는 경고 메세지를 띄우고 함수를 종료합니다.
		if (!selectedFile) {
			alert('사진을 첨부해주세요.');
			setLoading(false);	// 파일을 첨부하지 않으면 로딩 상태를 false로 변경하여 로딩화면을 숨깁니다.
			return;
		}


		// try {			
		// navigate('/loading')
		// 로그인 상태를 확인하여 로그인되지 않은 경우 메시지를 표시하고 함수 종료
		if (!isLoggedIn) {
			alert('로그인 후에 이용 할 수 있습니다.');
			window.location.replace("/login");
			setLoading(false);	// 로그인되지 않은 경우 로딩 상태를 false로 변경하여 로딩화면을 숨깁니다.
			return;
		}

		const formData = new FormData();
		formData.append('file', selectedFile);

		const response = fetch('http://10.125.121.184:8080/giveimage', {
			headers: {
				Authorization: isLoggedIn,
			},
			method: 'POST',
			body: formData,
		})
			// let data = await response.json();
			// if (data.content === null) {return}
			// setDataA(res);
			// alert('업로드 성공');
			// setUploadSuccess(true);	// 업로드 성공 시 상태 변경
			// console.log('res',res)
			.then(async (res) => {
				console.log('res', res);
				if (!res) {
					// 응답이 실패한 경우 오류를 throw 합니다.
					alert('응답 오류');
					setLoading(false);
					return
				}
				if (!res.ok) {
					// 응답이 실패한 경우 오류를 throw 합니다.
					alert('업로드 실패');
					setLoading(false);
					return
				}
				let data = await res.json()
				setDataA(data);
				setUploadSuccess(true);	// 업로드 성공 시 상태 변경				
				setLoading(false);	// api 호출 완료 됐을 때 false 로 변경하려 로딩화면 숨김처리				
				// console.log('res',res)
				// navigate(-1);	// 이전화면으로 돌아가기
			}
			)
			.catch(err => {
				console.log("err", err);
				setLoading(false);
			})



		// 	if (response.ok) {
		// 		const res = await response.json();
		// 		setDataA(res);
		// 		alert('업로드 성공');
		// 		setUploadSuccess(true);
		// } else {
		// 		throw new Error('Network response was not ok');
		// }

		// if (!response.ok) {
		// 	throw new Error('Network response was not ok');
		// }

		// } catch (error) {
		// 	console.error('업로드 실패:', error);
		// 	alert('업로드 실패');
		// }

	};

	// useEffect(() => {
	// 	ImageUpload();
	// }, [])

	useEffect(() => {
		console.log('dataA', dataA);
	}, [dataA])

	const fileInputRef = useRef();
	const handleFileButtonClick = () => {
		fileInputRef.current.click();
	};

	if (loading) {
		return <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
			<Loading />
		</div>
	}
	if (uploadSuccess && dataA) {
		return (
			<main className='w-4/5 mx-auto'>
				<div>
				<BarChart response={dataA} />
				</div>
				<div>
				{uploadSuccess && dataA && <PhotoResultPage response={dataA} />}
				</div>
			</main>
		)
	}
	return (
		<div className='flex justify-center mt-10  h-full min-w-[1050px]'>
			<div className='m-10 '>
				<div className='flex flex-col justify-center items-center'>
						<div className='mt-5 flex gap-5 items-center border p-2 rounded-2xl w-full'>
							<input type="file" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} /> {/* 파일 입력 요소를 숨깁니다 */}
							<button className='border-4 border-[#3a3a3a] border-double rounded-sm bg-[#eee6bc] text-[#161616] hover:bg-[#ffecad] hover:text-[#161616]  p-2' onClick={handleFileButtonClick}>파일 첨부</button> {/* 사용자 정의 버튼을 추가합니다 */}
							{fileName && <p>선택된 파일: {fileName}</p>} {/* 선택한 파일의 이름을 표시합니다 */}
						</div>
						
						<div className='shadow-lg rounded-sm px-2 py-2' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderStyle: 'solid', borderColor: selectedFile ? '#769ba3' : 'white', borderWidth: '6px', width: '450px', height: '550px' }}
							onDragOver={handleDragOver}
							onDrop={handleDrop}
						>
							<div className='w-full h-full' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderStyle: 'solid', borderColor: selectedFile ? '#769ba3' : 'white', borderWidth: '6px'}}>
								<div className='w-full h-full flex justify-center items-center'>
							{preview && <img src={preview} alt='Preview' className='flex justify-center items-center h-full max-w-full' />}
							</div>
						</div>
						</div>

						<div className=''>
							<button onClick={handleUpload} className='w-full rounded-3xl p-4' >
							<img src={plate} alt='plate' className='w-44' style={{ borderRadius: '5px' }} />
							</button>
						</div>
					{/* <div className='w-full ml-10'>카테고리</div> */}
				</div>
				<div>
					{uploadSuccess && dataA && <PhotoResultPage response={dataA} />}
				</div>
			</div>
		</div>
	);
};

export default ImageUpload;