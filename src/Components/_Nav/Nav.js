import './Nav.css'
import 'animate.css';

const Nav = () => {
  return (
    <div>
         <nav id="nav-bar">
            <ul className="nav-link__container">
              <li className="nav-list"><a href="https://www.etsy.com/shop/CozyCottageMiniature" target="_blank" rel="noreferrer" className="nav-link">View Shop</a></li>
              <li className="nav-list"><a href="#why" className="nav-link">Why miniatures</a></li>
              <li className="nav-list"><a href="https://twitter.com/cozycottagemini" target="_blank" rel="noreferrer" className="nav-link">Follow us</a></li>
            </ul>
          </nav>
    </div>
  )
}

export default Nav