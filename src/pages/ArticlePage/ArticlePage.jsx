import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getArticleById } from '../../data/articles'
import './ArticlePage.css'

function ArticlePage() {
  const { id } = useParams()
  const article = getArticleById(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!article) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="article-page">
      <div className="container">
        <img src={article.image} alt={article.title} className="article-page__image" />

        <div className="article-page__content">
          <h1 className="article-page__title">{article.details.title}</h1>

          <div className="article-page__meta">
            <span className="article-page__author">Written by {article.details.author}</span>
            <span className="article-page__date">{article.details.date}</span>
          </div>

          <div className="article-page__body">
            {article.details.sections.map((section) => (
              <section key={section.heading} className="article-page__section">
                <h2 className="article-page__section-title">{section.heading}</h2>
                <p className="article-page__text">{section.text}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ArticlePage
