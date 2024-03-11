import axios from 'axios';
import React from 'react'

export default function PhotoUpload2() {
	const onChangeImg = async (e) => {
		e.preventDefault();

		if (e.target.files) {
			const uploadFile = e.target.files[0]
			const formData = new FormData()
			formData.append('files', uploadFile)
			console.log(uploadFile)

			// await axios({
			// 	method: 'post',
			// 	url: 'http://10.125.121.184:8080/upload',
			// 	data: formData,
			// 	headers: {
			// 		'Content-Type': 'multipart/form-data',
			// 	},
			// 	body: {
			// 		file: uploadFile,
			// 	},
			// 	responseType: "blob",
			// })
			await axios.post('http://10.125.121.184:8080/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: {
					file: uploadFile,
				},
				responseType: 'blob',
			})
			.then(response => {
				console.log(response);
				alert('성공')
			})
			.catch(error => {
				console.error('오류 발생:', error.response);
				alert('실패')
			});
		}
	}

	return (
		<div>
			<form>
				<label htmlFor='profile-upload' />
				<input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg}/>
			</form>
		</div>
	)
}


// import axios from 'axios';
// import React, { useState } from 'react'

// export default function PhotoUpload2() {
// 	const [imagesList, setImagesList] = useState();
// 	const uploadFiles = axios.create({
// 		baseURL: 'http://10.125.121.184:8080/upload',
// 		headers: { "Content-type": "multipart/form-data" },
// 		timeout: 5000,
// 	});

// 	// const onFileChanges = (e) => console.log(e.target.files);
// 	const onFileChanges = ({ target: { files } }) => {
// 		uploadFiles
// 			.post("/upload", { image_file: files[0] })
// 			.then(({ data: { images } }) => setImagesList(images));
// 	};

// 	const downloadFiles = axios.create({
// 		baseURL: 'http://10.125.121.184:8080/upload',
// 		headers: { "Content-type": "application/json; charset=UTF-8" },
// 		responseType: "blob",
// 		timeout: 5000,
// 	});

// 	const onImageListClick = (imageId) => {
// 		downloadFiles.post("/download", { imageId }).then(({ data }) => {
// 			// console.log(data);
// 			const newFile = new File([data], url);
// 		})
// 	}



// 	return (
// 		<div>
// 			<Lists>
// 				{imagesList.map((image, index) => (
// 					<List key={index} onClick={() => onImageListClick(image.imageId)}>
// 						{image.image_name}</List>
// 				))}
// 			</Lists>
// 			<form>
// 				<input type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e) => onFileChanges(e)} />
// 			</form>
// 		</div>
// 	)
// }
