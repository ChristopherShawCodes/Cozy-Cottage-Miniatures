import './Card.css'

import shop from '../Home/Images/shop.jpeg'
import shopIcon from './Images/shop-icon.png'

import inspiration from '../Home/Images/inspiration.jpeg'
import inspirationIcon from './Images/inspiration-icon.png'

import follow from '../Home/Images/follow.jpeg'
import followIcon from './Images/follow-icon.png'




const Card = () => {
  return (
    <div>
        <div class="container">
  <div class="card" data-active>
    <div class="card-icon-container">
      <span className='shop-icon-text'>VIEW SHOP</span>
      <img class="shop-icon" src={shopIcon}/>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil praesentium distinctio possimus aspernatur sed aliquid voluptas doloremque sint iure libero at molestias magnam nostrum, iste et sit qui cumque ab?</p>
    <img class="card-image" src={shop} alt="img" />
  </div>

  <div class="card">
    <div class="card-icon-container">
    <img class="card-icon" src={inspirationIcon}/>
      <span className='card-icon-text'>GET INSPIRED</span>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil praesentium distinctio possimus aspernatur sed aliquid voluptas doloremque sint iure libero at molestias magnam nostrum, iste et sit qui cumque ab?</p>
    <img class="card-image" src={inspiration} alt="img" />
  </div>

    <div class="card">
    <div class="card-icon-container">
    <img class="card-icon" src={followIcon}/>
      <span className='card-icon-text'>
      <a href="https://twitter.com/cozycottagemini" target="_blank" rel='noreferrer'>FOLLOW</a>
      </span>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil praesentium distinctio possimus aspernatur sed aliquid voluptas doloremque sint iure libero at molestias magnam nostrum, iste et sit qui cumque ab?</p>
    <img class="card-image" src={follow} alt="img" />
    </div>
    </div>
    </div>
  )
}

export default Card