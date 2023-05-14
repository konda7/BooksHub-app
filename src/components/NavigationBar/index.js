import './index.css'
import {Link} from 'react-router-dom'

const NavigationBar = () => (
  <nav className="nav-bar">
    <Link to="/">
      <img
        src="https://res.cloudinary.com/dvhrrtgpt/image/upload/v1683966674/72bbea2852e8497fb73196e707ece625_1_xcpjfl.png"
        alt="books hub logo"
        className="bookshub-logo"
      />
    </Link>
    <ul className="nav-list">
      <li>
        <Link to="/" className="nav-list-items">
          Home
        </Link>
      </li>
      <li className="nav-list-items">
        <Link to="/add-new-book" className="nav-list-items">
          Add New Book
        </Link>
      </li>
    </ul>
  </nav>
)

export default NavigationBar
