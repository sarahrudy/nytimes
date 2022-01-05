import './Header.css'
import NYTlogo from '../../images/the-new-york-times.png'

const Header = () => {
  return (
    <div>
      <img src={ NYTlogo } className="nyt-logo"></img>
    </div>
  )
}

export default Header 