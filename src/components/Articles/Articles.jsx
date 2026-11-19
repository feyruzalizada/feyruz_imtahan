import { articles } from '../../data/articles'
import ArticleCard from '../ArticleCard/ArticleCard'
import './Articles.css'

function Articles() {
  return (
    <section className="articles" id="articles">
      <div className="container">
        <div className="articles__grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
