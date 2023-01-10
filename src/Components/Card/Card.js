import './Card.css'

import shop from './Images/shop-img.avif'
import shopIcon from './Images/shop-icon.png'

import inspiration from './Images/insp.avif'
import inspirationIcon from './Images/inspiration-icon.png'

import follow from '../Home/Images/follow.jpeg'
import followIcon from './Images/follow-icon2.png'




const Card = () => {


  return (
    <div>
        <div class="container">

            <div class="card staged-active" >
                <div class="card-icon-container shop-container">
                    <img class="card-icon" src={shopIcon} id='shop-icon' alt='card-icon'/>
                    <span className='shop-icon-text'>
                        <a href="https://www.etsy.com/shop/CozyCottageMiniature" target="_blank" rel='noreferrer'>SHOP</a>
                    </span>                
                </div>
                <p>
                "Welcome to our online miniature furniture shop! Here you'll find a wide selection of beautifully crafted and carefully detailed miniature furniture pieces.
                <br></br>
                If you love miniatures or are in need of some unique and charming decor for your next project, be sure to check out my online miniature furniture shop. I'm sure you'll find something you love!"
                </p>                <img class="card-image" src={shop} alt="img" />
            </div>

            <div class="card">
                <div class="card-icon-container">
                    <img class="card-icon" src={inspirationIcon} alt='card-icon'/>
                    <span className='card-icon-text'>
                        <a href="https://www.instagram.com/cozycottageminiatures/" target="_blank" rel='noreferrer'></a>
                    </span>
                </div>
                <p>
                    "If you're looking for some inspiration or new ideas, come check out our miniature inspiration board!
                    <br></br> 
                    You never know what might spark your creativity."
                </p>                
                <img class="card-image" src={inspiration} alt="img" />
            </div>

            <div class="card">
                <div class="card-icon-container">
                    <img class="card-icon" src={followIcon} alt='card-icon'/>
                    <span className='card-icon-text'>
                        <a href="https://twitter.com/cozycottagemini" target="_blank" rel='noreferrer'></a>
                    </span>
                </div>
                <p>
                "If you love all things miniature, be sure to follow our social media account! We post all sorts of adorable and fascinating miniature-themed content."
                </p>
                <img class="card-image" src={follow} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Card