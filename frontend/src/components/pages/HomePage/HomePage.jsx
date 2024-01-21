import React from 'react';
import './HomePage.css';
import shopping from '../../../assets/logo/shopping_bags.jpg'

function HomePage() {
  return (
    <div className='home-container'>
        <div className='home-wrapper'>
                <img src={shopping} alt="shopping" className='home-image' />
        </div>
    </div>
  )
}

export default HomePage