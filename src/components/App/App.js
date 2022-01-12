import { useEffect, useState } from 'react'
import { getData } from '../../apiCalls'
import './App.css';
import Header from '../Header/Header'
import Categories from '../Categories/Categories'
import Articles from '../Articles/Articles'
import Footer from '../Footer/Footer'

const App = () => {
  const [articles, setArticles ] = useState([])
  const [error, setError ] = useState(null)

  const setCategory = (category) => {
    getData(category)
    .then(data => setArticles(data.results))
    .catch(error => setError(error))
  }

  useEffect(() => {
    setCategory('world')
  }, [])

  return (
    <div className="App">
      <Header />
      <Categories setCategory={ setCategory } />
      <Articles articles={ articles } />
      <Footer />
    </div>
  );
}

export default App;