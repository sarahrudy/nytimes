import { useEffect, useState } from 'react'
import { getData } from '../../apiCalls'
import './App.css';

const App = () => {
  const [articles, setArticles ] = useState([])

  useEffect(() => {
    getData('arts')
    .then(data => setArticles(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>The New York Times</p>
      </header>
    </div>
  );
}

export default App;

      // <a
      //     className="App-link"
      //     href="https://www.nytimes.com/"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     NY Times
      //   </a>