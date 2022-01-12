import './Categories.css'

const Categories = ({ setCategory }) => {

  return (
    <nav className='categories-container'>
      <div className='categories'>
        <button onClick={() => setCategory('arts')}>Arts</button>
        <button onClick={() => setCategory('automobiles')}>Automobiles</button>
        <button onClick={() => setCategory('books')}>Books</button>
        <button onClick={() => setCategory('business')}>Business</button>
        <button onClick={() => setCategory('fashion')}>Fashion</button>
        <button onClick={() => setCategory('food')}>Food</button>
        <button onClick={() => setCategory('health')}>Health</button>
        <button onClick={() => setCategory('home')}>Home</button>
        <button onClick={() => setCategory('insider')}>Insider</button>
        <button onClick={() => setCategory('magazine')}>Magazine</button>
        <button onClick={() => setCategory('nyregion')}>NY Region</button>
        <button onClick={() => setCategory('obituaries')}>Obituaries</button>
        <button onClick={() => setCategory('opinion')}>Opinion</button>
        <button onClick={() => setCategory('politics')}>Politics</button>
        <button onClick={() => setCategory('realestate')}>Real Estate</button>
        <button onClick={() => setCategory('science')}>Science</button>
        <button onClick={() => setCategory('sports')}>Sports</button>
        <button onClick={() => setCategory('sundayreview')}>Sunday Review</button>
        <button onClick={() => setCategory('technology')}>Technology</button>
        <button onClick={() => setCategory('theater')}>Theater</button>
        <button onClick={() => setCategory('t-magazine')}>T-Magazine</button>
        <button onClick={() => setCategory('travel')}>Travel</button>
        <button onClick={() => setCategory('upshot')}>Upshot</button>
        <button onClick={() => setCategory('us')}>US</button>
        <button onClick={() => setCategory('world')}>World</button>
      </div>  
    </nav>
  )
}

export default Categories