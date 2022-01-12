import './ArticleCard.css'

const ArticleCard = ({ image, category, published_date, title, author, url }) => {
  return (
    <div>
      <a href={ url } target="_blank" rel="noopener noreferrer">
      <article className="article-card-container">
        <p className="article-card__category">{ category }</p>
        <p className="article-card__published-date">{ published_date }</p>
        <div className="crop-image">
          <img src={ image } alt="article depicted" className="article-card__image"></img>
        </div>
        <p className="article-card__title">{ title }</p>
        <p className="article-card__author">{ author }</p>
      </article>
      </a>
    </div>
  )
}

export default ArticleCard 