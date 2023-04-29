import NewsArticlesGrid from '@/components/NewsArticlesGrid'
import { NewsArticle, NewsResponse } from '@/models/NewsArticle'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { Alert } from 'react-bootstrap'
interface CatagoryNewsPageProps{
    newsArticles:NewsArticle[]
}
export const getStaticPaths:GetStaticPaths=async()=>{
    const catagorySlugs=[
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology"
    ];
    const paths = catagorySlugs.map((slug)=>(
        {
            params:{catagory:slug}
        }
    ))
    return {
        paths,
        fallback:false
    }

}
export const getStaticProps:GetStaticProps<CatagoryNewsPageProps>=async({params})=>{
    const catagory=params?.catagory?.toString();
    const res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${catagory}&apiKey=${process.env.NEWS_API_KEY}`)
    const newsResponse:NewsResponse = await res.json();
    if(!newsResponse){
        return{
            notFound:true
        }
    }
    return {
        props:{
            newsArticles : JSON.parse(JSON.stringify(newsResponse.articles ))
        },
        revalidate: 5*60,
    }
}
export default function CatagoryNewsPage({newsArticles}:CatagoryNewsPageProps) {
  const router =useRouter();
  const catagoryName=router.query.catagory?.toString();
  const title = "Catagory : "+ catagoryName?.slice(0,1).toUpperCase() + catagoryName?.slice(1)
    return (
    <>
    <Head>
        <title key={"title"}>{`${title} -NextJS News App`}</title>
    </Head>
      <main>
        <h1>{title}</h1>
        <Alert>
                    This is page uses <strong>getStaticProps</strong> for very high page loading speed
                    and <strong>incremental static regeneration</strong> to show data not older than <strong>5 minutes</strong>.
                </Alert>
        <NewsArticlesGrid articles={newsArticles}/>
      </main>
    </>
  )
}
