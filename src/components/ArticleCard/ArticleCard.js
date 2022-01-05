import './ArticleCard.css'

const ArticleCard = ({ title }) => {
  return (
    <div>
      <article className="article-card-container">
        <p>{ title }</p>
      </article>
    </div>
  )
}

export default ArticleCard 