import { featuredArticle, articles } from '../../data/articles'
import FeaturedArticle from '../FeaturedArticle/FeaturedArticle'
import ArticleCard from '../ArticleCard/ArticleCard'
import './Articles.css'

function Articles() {
  return (
    <section className="articles" id="articles">
      <div className="container">
        <FeaturedArticle article={featuredArticle} />

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
