import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function Join() {
	const [userName, setUserName] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	const [selectedValue, setSelectedValue] = React.useState('a');

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<div className='bg-white'>
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					{/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">회원가입</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label for="email" className="block text-sm font-medium leading-6 text-gray-900">이메일</label>
							<div class="mt-2">
								<input id="email" name="email" type="email" autocomplete="email" placeholder='  이메일를 입력하세요' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label for="password" className="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
								<div className="text-sm">
									{/* <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
								</div>
							</div>
							<div className="mt-2">
								<input id="password" name="password" type="password" autocomplete="current-password" placeholder='  문자, 숫자, 특수문자 포함(8~16자)' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label for="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">비밀번호 확인</label>
								<div className="text-sm">
									{/* <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
								</div>
							</div>
							<div className="mt-2">
								<input id="confirmPassword" name="confirmPassword" type="confirmPassword" autocomplete="current-confirmPassword" placeholder='  문자, 숫자, 특수문자 포함(8~16자)' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
							<Radio
								checked={selectedValue === 'a'}
								onChange={handleChange}
								value="a"
								name="radio-buttons"
								inputProps={{ 'aria-label': 'A' }}
							/><span>동의</span>
							<Radio
								checked={selectedValue === 'b'}
								onChange={handleChange}
								value="b"
								name="radio-buttons"
								inputProps={{ 'aria-label': 'B' }}
							/><span>비동의</span>
						</div>
						<div>
							<button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join</button>
						</div>
					</form>

					<p class="mt-10 text-center text-sm text-gray-500">
						{/* Not a member? */}
						{/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">회원가입</a> */}
					</p>
				</div>
			</div>
		</div>

	)
}
