import { useEffect, useState } from 'react'
import { getData } from '../../apiCalls'
import './App.css';
import Header from '../Header/Header'
import Articles from '../Articles/Articles'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import Footer from '../Footer/Footer'

const App = () => {
  const [articles, setArticles ] = useState([])
  const [error, setError ] = useState(null)

  useEffect(() => {
    getData('home')
    .then(data => setArticles(data.results))
    .catch(error => setError(error))
  }, [])

  return (
    <div className="App">
      <Header />
      <Articles articles={ articles } />
      <ArticleDetails />
      <Footer />
    </div>
  );
}

export default App;