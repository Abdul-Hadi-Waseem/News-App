import { NewsArticle } from '@/models/NewsArticle'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NewsArticleEntry from './NewsArticleEntry'
interface NewsArticlesGridProps{
    articles:NewsArticle[]
}
export default function NewsArticlesGrid({articles}:NewsArticlesGridProps) {
  return (
    <div>
      <Row xxl={4} xs={1} sm={2} xl={3} className='g-4'>
        {articles.map(article=>(
            <Col key={article.url}>
                <NewsArticleEntry article={article}/>
            </Col>
        ))}
      </Row>
    </div>
  )
}
