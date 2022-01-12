import './Header.css'
import NYTlogo from '../../images/the-new-york-times.png'
import dayjs from 'dayjs'

const Header = () => {

  const today = dayjs(new Date())

  return (
    <div className="header-container">
      <img src={ NYTlogo } className="nyt-logo"></img>
      <h1 className="date">{ today.format('dddd, MMMM DD, YYYY') }</h1>
    </div>
  )
}

export default Header 