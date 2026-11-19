import { Link } from 'react-router-dom'
import './ArticleCard.css'

function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <img src={article.image} alt={article.title} className="article-card__image" />
      <div className="article-card__body">
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__text">{article.excerpt}</p>
        <div className="article-card__footer">
          <span className="article-card__date">{article.date}</span>
          <Link to={`/articles/${article.id}`} className="article-card__more">Read more</Link>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
