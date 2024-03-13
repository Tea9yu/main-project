import React from 'react'
import HomeCardItem from './HomeCardItem';
import  './HomeCard.css';
import img1 from '../../images/clothesStore.jpg'
import img2 from '../../images/데일리.jpg'
import img3 from '../../images/매장.jpg'
import img4 from '../../images/쇼핑.jpg'

function HomeCards() {
    return (
        <div className='cards'>
            {/* <h1>Check out these EPIC Destinations!</h1> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <HomeCardItem 
                         src = {img1}
                         text = "Expore the hidden waterfall deep inside the Amazon Jungle"
                         label = 'Adventure'
                         path='/upload'
                        />    
                        <HomeCardItem 
                         src = {img2}
                         text = "Travel through the Islands of Bali in a Private Cruise"
                         label = 'Luxury'
                         path='/services'
                        />
                    </ul>    
                    <ul className='cards__items'>
                        <HomeCardItem
                        src={img3}
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                        />
                        <HomeCardItem
                        src={img4}
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/services'
                        />                        
                    </ul>    
                </div>
            </div>            
        </div>
    );
}

export default HomeCards;