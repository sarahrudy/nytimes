import './Articles.css'
import newspaperAndGlasses from '../../images/newspaper-and-glasses.png'
import ArticleCard from '../ArticleCard/ArticleCard'

const Articles = ({ articles }) => {
  const articleCard = articles.map(( article, i) => {
    return (  
      <div className="articles">
        <ArticleCard
          title={article.title}
        />
      </div>
      )
    })

  return (
     <>
     <section className="landing-page-container">
       <div className="h1-and-p">
         <h1 className="landing-h1">Top news stories making headlines.</h1>
         <p className="landing-p">Click on an article below to view full story.</p>
       </div>
       <div>
         <img src={ newspaperAndGlasses } alt="newspaper and glasses" className="newspaper-and-glasses-img"></img>
       </div>
     </section>
     <div className="articles-container">{ articleCard }</div>
     </>
  )
}

export default Articles