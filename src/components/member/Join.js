import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Checkbox } from '@mui/material';

export default function Join() {
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isValidId, setIsValidId] = useState(false);
	const [isValidIDMsg, setIsValidIDMsg] = useState(null);
	const [selectedValue, setSelectedValue] = useState(false);

	const navigate = useNavigate();

		const handleChange = (e) => {
			e.preventDefault();
			if(selectedValue === true) {
				setSelectedValue(false)
			}
			else {
				setSelectedValue(true);
			}
	};

	// 이메일 중복확인
	const userCheck = () => {
		// 이메일을 입력하지 않았을 경우
		if (userName === '') {
			alert('사용자를 입력해주세요');
			return;
		}

		// axios.get(`http://10.125.121.184:8080/join`)
		axios.get(`http://10.125.121.184:8080/checkDuplicateUser/${userName}`)

			.then(res => {
				if (res.status === 200) {
					setIsValidId(true);
					setIsValidIDMsg(true);
				}
			})
			.catch(err => {
				setIsValidIDMsg(false);
			})
	}

	const handleJoin = (e) => {
		e.preventDefault();

		// // 회원가입 버튼 클릭
		// if (!isValidId) {
		// 	alert("아이디 중복확인을 확인을 완료해주세요.")
		// 	return;
		// }

		// 이메일, 비밀번호 이름이 없을 때
		if (userName === '' || password === '') {
			alert('모든 항목을 입력해주세요');
			return;
		}

		// // 이메일 형식 테스트
		// const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*.[A-Za-z]{2,3}$/;
		// if (!(emailRegEx.test(email))) {
		// 	alert('올바르지 않은 이메일 형식입니다.');
		// 	return;
		// }

		// 비밀번호, 비밀번호 확인이 서로 다를 떄
		if (password !== confirmPassword) {
			alert('비밀번호가 일치하지 않습니다.');
			return;
		}

		// // 비밀번호 형식 테스트
		// const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
		// if (!(passwordRegEx.test(password))) {
		// 	alert('비밀번호는 문자, 숫자, 특수기호가 포함(8~16자)되어야 합니다.')
		// 	return;
		// }

		// Create payload
		const payload = {
			customerNum: userName,
			password: password,			
			agree: "true",
		}


		axios.post(`http://10.125.121.184:8080/join`, payload)
			.then((response)=>{
				console.log(response)
				if (response.status === 200) {
					alert('회원가입 성공')
					// navigate('/login')	// 회원가입 성공시 로그인페이지로 이동
				} else if (response.status === 400) {
					alert('회원가입 실패')
				}}
			).catch((err)=>{
				alert('회원가입 실패')
			});

			

	};

	return (
		<div className='bg-white'>
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">회원가입</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						{/* <div className='flex flex-col'>
							<label for="email" className="block text-sm font-medium leading-6 text-gray-900">이메일<span>
								{
									isValidIDMsg === null
										? ""
										: isValidIDMsg
											? <p className="text-sm text-green-500 ml-2">사용 가능한 아이디입니다.</p>
											: <p className="text-sm text-red-500 ml-2">이미 존재하는 아이디입니다.</p>
								}
								<button onClick={emailCheck} className='border ml-60 p-2 justify-end items-end rounded-xl bg-black text-white w-[25%]'>중복확인</button></span></label>
							<div class="mt-2">
								<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='  이메일를 입력하세요' className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div> */}

						<div>
							<div className="flex items-center justify-between">
								<label for="username" className="flex justify-between items-center text-sm font-medium leading-6 text-gray-900">사용자
								{/* <span>
								{
									isValidIDMsg === null
										? ""
										: isValidIDMsg
											? <p className="text-sm text-green-500 ml-2">사용 가능한 아이디입니다.</p>
											: <p className="text-sm text-red-500 ml-2">이미 존재하는 아이디입니다.</p>
								}
								<button onClick={userCheck} className='border ml-60 p-2 justify-end items-end rounded-xl bg-black text-white w-[25%]'>중복확인</button></span> */}
								</label>
							</div>
							
							<div className="mt-2">
								<input id="username" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='  아이디를 입력하세요' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
							</div>
						</div>
						
						<div>
							<div className="flex items-center justify-between">
								<label for="password" className="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
							</div>
							<div className="mt-2">
								<input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='  문자, 숫자, 특수문자 포함(8~16자)' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
							</div>
						</div>
						
						<div>
							<div className="flex items-center justify-between">
								<label for="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">비밀번호 확인</label>
							</div>
							<div className="mt-2">
								<input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='  문자, 숫자, 특수문자 포함(8~16자)' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
							</div>
						</div>
						<div className='w-full h-1/3 overflow-auto'>
 							<p className='mb-2'>이용약관</p>
 							<textarea readOnly className='w-full h-32 border rounded-md overflow-auto resize-none'>
								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
 							</textarea>
 						</div>
 						<div>
 							<Checkbox
 								checked={selectedValue === true}
 								onClick={handleChange}
 								value="a"
 								name="check-buttons"
 								inputProps={{ 'aria-label': 'A' }}
 							/><span>동의</span> 							
 						</div>
						
						<div>
							<button onClick={handleJoin} className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join</button>
						</div>
					</form>

					<p class="mt-10 text-center text-sm text-gray-500">
					</p>
				</div>
			</div>
		</div>

	)
}




// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useRef } from 'react';

// export default function Join() {

// 	// const email = useRef();
// 	// const userName = useRef();
// 	// const password = useRef();

// 	const [email, setEmail] = useState('');
// 	const [userName, setUserName] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [confirmPassword, setConfirmPassword] = useState('');
// 	const [isValidId, setIsValidId] = useState(false);
// 	const [isValidIDMsg, setIsValidIDMsg] = useState(null);

// 	const navigate = useNavigate();

// 	const [selectedValue, setSelectedValue] = useState('a');

// 	// 이메일, 비밀번호 정규식
// 	const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
// 	const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
	

// 	const handleChange = (event) => {
// 		setSelectedValue(event.target.value);
// 	};

// 	// 이메일 중복확인
// 	const emailCheck = () => {
// 		// 이메일을 입력하지 않았을 경우
// 		if (email.current.value === '') {
// 			alert('이메일을 입력해주세요');
// 			return;
// 		}

// 		axios.get(`http://10.125.121.184:8080/join`)
// 			.then(res => {
// 				if (res.status == 200) {
// 					setIsValidId(true);
// 					setIsValidIDMsg(true);
// 				}
// 			})
// 			.catch(err => {
// 				setIsValidIDMsg(false);
// 			})
// 	}

// 	const handleJoin = async (e) => {
// 		e.preventDefault();

// 		// 회원가입 버튼 클릭
// 		if (!isValidId) {
// 			alert("아이디 중복확인을 확인을 완료해주세요.")
// 			return;
// 		}

// 		// 이메일, 비밀번호 이름이 없을 때
// 		if (email.current.value === '' || password.current.value === '' || userName.current.value === '') {
// 			alert('모든 항목을 입력해주세요');
// 			return;
// 		}

// 		// 이메일 형식 테스트
// 		if (!(emailRegEx.test(email.current.value))) {
// 			alert('올바르지 않은 이메일 형식입니다.');
// 			return;
// 		}

// 		// 비밀번호, 비밀번호 확인이 서로 다를 떄
// 		if (password.current.value !== confirmPassword.current.value) {
// 			alert('비밀번호가 일치하지 않습니다.');
// 			confirmPassword.current.focus();
// 			return;
// 		}

// 		// 비밀번호 형식 테스트
// 		if (!(passwordRegEx.test(password.current.value))) {
// 			alert('비밀번호는 문자, 숫자, 특수기호가 포함되어야 합니다.')
// 			return;
// 		}


// 		// Create payload
// 		const payload = {
// 			email: email.current.value,
// 			password: password.current.value,
// 			userName: userName.current.value,
// 		}

// 		try {
// 			const response = await axios.post(`http://10.125.121.184:8080/join`,
// 				{
// 					body: JSON.stringify(payload),
// 				}
// 			);

// 			const data = await response.json();

// 			if (response.status === 200) {
// 				alert('회원가입 성공')
// 				navigate('/')	// 회원가입 성공시 홈으로 이동
// 			} else if (response.status === 400) {
// 				alert('회원가입 실패')
// 			}
// 		} catch (error) {
// 			console.error('오류 발생', error)
// 		}
// 	};

// 	return (
// 		<div className='bg-white'>
// 			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
// 				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
// 					{/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
// 					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">회원가입</h2>
// 				</div>			

// 				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// 					<form className="space-y-6" action="#" method="POST">
// 						<div className='flex flex-col'>
// 							<label for="email" className="block text-sm font-medium leading-6 text-gray-900">이메일<span>
// 								{
// 									isValidIDMsg === null
// 										? ""
// 										: isValidIDMsg
// 											? <p className="text-sm text-green-500 ml-2">사용 가능한 아이디입니다.</p>
// 											: <p className="text-sm text-red-500 ml-2">이미 존재하는 아이디입니다.</p>
// 								}
// 								<button onClick={emailCheck} className='border ml-60 p-2 justify-end items-end rounded-xl bg-black text-white w-[25%]'>중복확인</button></span></label>
// 							<div class="mt-2">
// 								<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='  이메일를 입력하세요' className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
// 							</div>
// 						</div>

// 						<div>
// 							<div className="flex items-center justify-between">
// 								<label for="password" className="block text-sm font-medium leading-6 text-gray-900">사용자명</label>
// 								<div className="text-sm">
// 									{/* <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
// 								</div>
// 							</div>
// 							<div className="mt-2">
// 								<input id="username" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='  이름을 입력하세요' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
// 							</div>
// 						</div>
// 						<div>
// 							<div className="flex items-center justify-between">
// 								<label for="password" className="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
// 								<div className="text-sm">
// 									{/* <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
// 								</div>
// 							</div>
// 							<div className="mt-2">
// 								<input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='  문자, 숫자, 특수문자 포함(8~16자)' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
// 							</div>
// 						</div>
// 						<div>
// 							<div className="flex items-center justify-between">
// 								<label for="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">비밀번호 확인</label>
// 								<div className="text-sm">
// 									{/* <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
// 								</div>
// 							</div>
// 							<div className="mt-2">
// 								<input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='  문자, 숫자, 특수문자 포함(8~16자)' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
// 							</div>
// 						</div>
// 						{/* <div className='w-full h-1/3 overflow-auto'>
// 							<p className='mb-2'>이용약관</p>
// 							<textarea readOnly className='w-full h-32 border rounded-md overflow-auto resize-none'>
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd
// 								sadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasdsadfasd

// 							</textarea>
// 						</div>
// 						<div>
// 							<Radio
// 								checked={selectedValue === 'a'}
// 								onChange={handleChange}
// 								value="a"
// 								name="radio-buttons"
// 								inputProps={{ 'aria-label': 'A' }}
// 							/><span>동의</span>
// 							<Radio
// 								checked={selectedValue === 'b'}
// 								onChange={handleChange}
// 								value="b"
// 								name="radio-buttons"
// 								inputProps={{ 'aria-label': 'B' }}
// 							/><span>비동의</span>
// 						</div> */}
// 						<div>
// 							<button onClick={handleJoin} className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join</button>
// 						</div>
// 					</form>

// 					<p class="mt-10 text-center text-sm text-gray-500">
// 						{/* Not a member? */}
// 						{/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">회원가입</a> */}
// 					</p>
// 				</div>
// 			</div>
// 		</div>

// 	)
// }
