import './FeaturedArticle.css'

function FeaturedArticle({ article }) {
  return (
    <article className="featured">
      <div className="featured__content">
        <h2 className="featured__title">{article.title}</h2>
        <p className="featured__text">{article.excerpt}</p>
        <div className="featured__footer">
          <span className="featured__date">{article.date}</span>
          <span className="featured__more">Read more</span>
        </div>
      </div>
      <img src={article.image} alt={article.title} className="featured__image" />
    </article>
  )
}

export default FeaturedArticle
