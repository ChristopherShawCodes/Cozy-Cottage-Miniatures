import './Home.css'
import logo from './Images/logo.png'
import miniature from './Images/miniature.png'
import creative from './Images/creative.png'
import academic from './Images/academic.png'
import professional from './Images/professional.png'
import thanks from './Images/thanks.png'
import why from './Images/why.png'
import Card from '../Card/Card'


const Home = () => {
  return (
    <div>
        <header id="header">
          <nav id="nav-bar">
            <ul className="nav-link__container">
              <li className="nav-list"><a href="https://www.etsy.com/shop/CozyCottageMiniature" target="_blank" rel="noreferrer" className="nav-link">Shop</a></li>
              <li className="nav-list"><a href="#why" className="nav-link">Why miniatures</a></li>
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

    <Card className='card'/>



    <main className="content-container">
      <div className="main-content">
      <div className="story-wrap">
        <div className="story-bg ours" id='shop-img'>
          <div className="story-row">
            <img src={miniature} alt="story start" className="story-img" />
            <h2 className="story-heading">Our Miniatures</h2>
            <p className="story-text">
              Get ready to be charmed by miniature furniture! These tiny pieces add endless cuteness to your dollhouse or model setup. From miniature sofas and bedroom sets to tiny kitchen appliances, each miniature piece is crafted with intricate detail and provides a fun challenge for collectors and hobbyists. Plus, with miniature furniture, you can let your creativity shine as you design and decorate the perfect miniature home.
            </p>
          </div>
        </div>

        <div className="story-bg why" id="why">
          <div className="story-row textLeft">
            <img src={why}alt="story why" className="story-img floatRight" />
            <h2 className="story-heading" id='color-correct'>Why Miniatures ?</h2>
            <p className="story-text">
            Miniature furniture is important for a few reasons. It also serves as a fun and challenging hobby for collectors and enthusiasts, as they search for and arrange the perfect pieces in their miniature world. Finally, miniature furniture allows for creativity and design, as individuals can decorate and create their dream miniature home.
            </p>
          </div>
        </div>

        <div className="story-bg creative">
          <div className="story-row">
            <img src={creative} alt="story creative" className="story-img" />
            <h2 className="story-heading" id='creative'>Creativity</h2>
            <p className="story-text creative">
            Creating and designing with miniature furniture can be a great creative outlet as it allows individuals to let their imagination run wild and design the miniature world of their dreams. It also provides a fun and challenging hobby as collectors and enthusiasts can search for and arrange the perfect pieces to complete their miniature home. Miniature furniture allows for endless possibilities and encourages individuals to think outside the box and get creative with their design choices.
            </p>
          </div>
        </div>

        <div className="story-bg academic">
          <div className="story-row textLeft">
            <img src={academic} alt="story academic" className="story-img floatRight" />
            <h2 className="story-heading" id='academic'>Academic Projects</h2>
            <p className="story-text">
            Miniature furniture can be an important tool in academic projects for a few reasons. It can be used as a teaching aid to help students visualize and understand historical time periods or design concepts. It can also be used by architecture or design students as part of their project planning and prototyping process. Additionally, miniature furniture can be used as part of a research project, such as studying the evolution of furniture design over time or the cultural significance of certain pieces.
            </p>
          </div>
        </div>

        <div className="story-bg professional">
          <div className="story-row">
            <img src={professional} alt="story professional" className="story-img" />
            <h2 className="story-heading">Professional Presentations</h2>
            <p className="story-text">
              Miniature furniture can be a valuable tool for professional presentations. It allows you to effectively communicate design ideas and plans on a small scale, making it easier for clients to envision the finished product. Additionally, using miniature furniture can help to save time and resources during the planning process.            
            </p>
          </div>
        </div>

        <div className="story-bg thanks">
          <div className="story-row textLeft">
            <img src={thanks} alt="story thanks" className="story-img floatRight" />
            <h2 className="story-heading thanks">Thank you</h2>
            <p className="story-text thanks">
            Thank you so much for visiting my website and checking out my adorable miniature furniture collection! I hope you found something that makes you smile, and that you'll come back to see what's new in the miniature world soon.
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
      Cozy Cottage Miniatures &copy; 2023
    </p>
  </footer>


   <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> 
    </div>
  )
}

export default Home