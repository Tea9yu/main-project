import React from 'react'

export default function AdminPage() {
	return (
		<div className='mt-20'>
			<div className='flex flex-col gap-5'>
				<h1>구매데이터</h1>
				<div className='flex'>
					<div className='flex gap-5'>
						<div>
							구매데이터1
						</div>
						<div>
							구매데이터2
						</div>
					</div>
				</div>
				<h1>추천 데이터</h1>
				<div className='flex gap-5'>
					<div>
						추천데이터1
					</div>
					<div>
						추천데이터2
					</div>
				</div>
			</div>
			<div>
				매출액
			</div>
			<div className='flex gap-5'>
				<div>
					박스1
				</div>
				<div>
					박스2
				</div>
			</div>
		</div>
	)
}
