import React, { useEffect, useState } from 'react'
import plate from '../../images/namelabel.png'
import { useParams } from 'react-router-dom'
import ClothesCard from './ClothesCard'
import { useRecoilValue } from 'recoil'
import { ResultAtom } from './ResultAtom'


export default function ClothesDetail() {
    const [pdata,setPdata] = useState('')
		const [recommendData,setRecommendData] = useState([])
	  const { productCode } = useParams()
		const [imgSize,setImgSize] = useState({width:300,height:400});
    const photoResult = useRecoilValue(ResultAtom)
		const imagePath = 'http://10.125.121.184:8080/product_image';
    useEffect(() => {
      console.log("photoResult",photoResult)
        const url = 'http://10.125.121.184:8080'
        fetch(url + `/product/${productCode}`, {
            method: 'GET',
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setPdata(data)
            });

						const img = new Image();
						img.src = `${imagePath}/${productCode}.jpg`
						let width = 400
						let height = 400
						img.onload = () => {
							if(img.width<=img.height){
								height = img.height*(450/img.width)
							}
							else{
								width = img.width*(450/img.height)
							}
								setImgSize({width:width,height:height})
								// console.log('img',img.width)
								// console.log('imageSize',imgSize['width'])
						}
    }, [])

		useEffect(() => {
			if(pdata===''){
				return
			}
			const detail ={
				print:pdata.print,
				detail:pdata.detail,
				texture:pdata.texture,
				season:pdata.season,
				kindId:pdata.kind.kindId
			}
			const url = 'http://10.125.121.184:8080/product/detail'
			fetch(url,{
					method: 'POST',
					headers:{
						"Content-Type":"application/json; charset=utf-8"
					},
					body: JSON.stringify(detail)
			})
					.then(response => {
							return response.json();
					})
					.then(data => {
							console.log(data);
							setRecommendData(data.content)
					});
		}, [pdata])

    if(pdata === ''){
        return(
            <></>
        )
    }
    return (
        <div className='flex flex-col w-full justify-center items-center pt-10'>
            <div className='flex flex-col sm:flex-row justify-between space-y-20 sm:space-x-20 items-center font-nanum'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative'>
                        <div className='absolute top-9 left-0 w-full  text-center text-[#dfdfdf]'>{pdata.name}</div>
                        <img src={plate} alt='plate' className='w-36 pb-5' />
                    </div>
                    <div className={`shadow-lg border-[12px] border-double border-white w-[${imgSize['width']*0.5}px] h-[${imgSize['height']*0.5}px]`}>
                    <img src={`${imagePath}/${productCode}.jpg`} alt={pdata.name} className={`w-[${imgSize['width']*0.5}px] h-[${imgSize['height']*0.5}px]`}/>
                    </div>
                </div>
                <div className='bg-[#f6f4f6]/60 text-[#161616]/80  shadow-md  '>
                    <div className='w-full h-2 bg-[#f6f4f9] shadow-md rounded-lg'></div>
                    <div className='p-5 flex flex-col items-center sm:items-start space-y-1'>
                    <div className='text-violet-900/50'>{pdata.kind.kindName}</div>
                    <div className='py-1 pb-3 '>
                    <div className='font-bold px-6 bg-violet-100 rounded-sm w-full sm:w-64'>{pdata.name}</div>
                    </div>
                    <div className=''>가격: {pdata.price}</div>
                    <div>소재: {pdata.texture}</div>
                    <div>프린트: {pdata.print}</div>
                    <div>디테일: {pdata.detail}</div>
                    </div>
                </div>
            </div>
			<div className='m-20'>
						<h1>{`위 사진과 비슷한 상품을 표시합니다.`}</h1>
      {/* 추천된 상품 리스트와 이미지를 표시합니다. */}
      <div className='grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-5 gap-6 min-w-[900px]'>
        {recommendData.map((recommendItem, index) => {
          // console.log('recommendItem.kind.gkingId', recommendItem.kind.gkindId);
          if (recommendItem.productCode !== productCode) {
            return (
							<div key={recommendItem.productCode + index}>
              <ClothesCard item={recommendItem}/>
							</div>
            )
          }
        })}
        {recommendData.length===0 && (
          <p className="text-center">비슷한 상품이 없습니다.</p>
        )}
      </div>

						</div>
        </div>
    )
}