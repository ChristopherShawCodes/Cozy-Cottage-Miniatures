import './Home.css'
import logo from './Images/logo.png'
import shop from './Images/shop.jpeg'
import inspiration from './Images/inspiration.jpeg'
import follow from './Images/follow.jpeg'
import miniature from './Images/our-miniatures.png'
import creative from './Images/creative.png'
import academic from './Images/academic.png'
import thanks from './Images/thanks.png'
import why from './Images/why.png'

const Home = () => {
  return (
    <div>
        <header id="header">
    <nav id="nav-bar">
      <ul className="nav-link__container">
        <li className="nav-list"><a href="#shop" className="nav-link">our miniatures</a></li>
        <li className="nav-list"><a href="#inspired" className="nav-link">get inspired</a></li>
        <li className="nav-list"><a href="#follow" className="nav-link">Follow us</a></li>
      </ul>
    </nav>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <img src={logo} alt="Logo" id="header-img" />
        <span className="heading-primary-main">Cozy Cottage<span id="coverLine"> miniatures</span></span>
        <span className="heading-primary-sub">That warm cozy feeling in a small package. </span>
      </h1>
    </div>
 
  </header>

  <main className="content-container">
    <div className="main-content">

      
      <div className="main__content-flex">

        <div className="flex-container" id='shop'>
          <div className="flexbox shop">
            <img src={shop} alt='shop'></img>
            <p>shopping sentence lorem inlsum asfl;jsl;kfjs;lfjl;skjfsf;kljsflk;j</p>
            <a href='https://www.etsy.com/shop/CozyCottageMiniature?ref=simple-shop-header-name&listing_id=1385277771' target='_blank' rel='noreferrer'>
              <button onclick="this.focus()" className="learn-more">
                View Shop</button></a>
          </div>
        </div>

        <div className="flex-container" id='inspired'>
          <div className="flexbox shop" id='inspiration'>
            <img src={inspiration} alt='inspiration'></img>
            <p>inspiration sentence lorem inlsum asfl;jsl;kfjs;lfjl;skjfsf;kljsflk;j</p>
            <a href='https://twitter.com/cozycottagemini' target='_blank' rel='noreferrer'><button onclick="this.focus()" className="learn-more inspired ">Get Inspired</button></a>
          </div>
        </div>

        <div className="flex-container" id='follow'>
          <div className="flexbox shop">
            <img src={follow} alt='follow'></img>
            <p >follow sentence lorem inlsum asfl;jsl;kfjs;lfjl;skjfsf;kljsflk;j</p>
          <a href='https://twitter.com/cozycottagemini' target='_blank' rel='noreferrer'>
          <button onclick="this.focus()" className="learn-more">
            Follow Us</button></a>
          </div>
        </div>
      </div>


      <div className="story-wrap">
        <div className="story-bg">
          <div className="story-row">
            <img src={miniature} alt="story start" className="story-img" />
            <h2 className="story-heading">Our Miniatures</h2>
            <p className="story-text">
              We started in the '70s as Stewart Brothers Coffee, brewing surprisingly smooth coffee with just a 12-pound peanut roaster on Seattle's Pier 70.
            </p>
          </div>
        </div>

        <div className="story-bg ship">
          <div className="story-row textLeft">
            <img src={why}alt="story ship" className="story-img floatRight" />
            <h2 className="story-heading">Why Miniatures ?</h2>
            <p className="story-text">
              Our passion for miniatures runs deep. It's a great way to be creative and let your imagination run. We enjoy bringing life to smaller items.
            </p>
          </div>
        </div>

        <div className="story-bg seattle">
          <div className="story-row">
            <img src={creative} alt="story seattle" className="story-img" />
            <h2 className="story-heading creative">Be Creative</h2>
            <p className="story-text creative">
              We entered a competition to name the “best cup of coffee in Seattle," and when our notably smooth taste earned us the coffee crown, we changed our name to Seattle’s Best Coffee.
            </p>
          </div>
        </div>

        <div className="story-bg cat">
          <div className="story-row textLeft">
            <img src={academic} alt="story cat" className="story-img floatRight" />
            <h2 className="story-heading">Academic Projects</h2>
            <p className="story-text">
              Our inaugural signature blend was named for a cat named Henry who liked to warm up next to the roasters. Henry's Blend® became the first of the excellent Seattle's Best Coffee roasts and flavors that followed.
            </p>
          </div>
        </div>

        <div className="story-bg bag">
          <div className="story-row">
            <img src={thanks} alt="story bag" className="story-img" />
            <h2 className="story-heading">Thank you</h2>
            <p className="story-text">
              In the more than 45 years since, it's been a labor of love. We've perfected our signature roasting process while living up to our name and staying true to our roots in stores across the country.
            </p>
          </div>
        </div>
      </div>
  
      <div classNameName='connect-container'>
        <h1>Let's Connect</h1>
      </div>
      <section className="contact-section">
        <p className="contact-text">
        feel free to drop us a quick email with any questions or just to say 'hi'
          <span className="emoji">💌️</span>
        </p>
        <form action="submit" method="GET" id="form">
          <a href='mailto: cozycottageminiatures@gmail.com' className='send'>
            <span id='submit'>
              Send Email
            </span>
          </a>
        </form>
      </section>
    </div>
  </main>
  <div className="footer-gap"></div>
  <footer id="footer">
      <img src={logo} alt="" className="footer-img" />
    <p className="footer-text">
      Cozy Cottage Miniatures &copy; 2022
    </p>
  </footer>


   <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> 
    </div>
  )
}

export default Home