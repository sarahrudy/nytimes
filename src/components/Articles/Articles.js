import './Articles.css'
import newspaperAndGlasses from '../../images/newspaper-and-glasses.png'
import ArticleCard from '../ArticleCard/ArticleCard'

const Articles = ({ articles }) => {
  const articleCard = articles.map(( article, i) => {
    return (  
      <div className="articles">
        <ArticleCard
          key={ i }
          image={ article.multimedia[0].url}
          category={ article.section }
          published_date={ article.published_date}
          title={ article.title }
          author={ article.byline }
          url={ article.url }
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
       <div className="newspaper-and-glasses-img-container">
         <img src={ newspaperAndGlasses } alt="newspaper and glasses" className="newspaper-and-glasses-img"></img>
       </div>
     </section>
     <div className="articles-container">{ articleCard }</div>
     </>
  )
}

export default Articles