import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";
import { NewsArticle } from "@/models/NewsArticle";
import { NewsResponse } from "@/models/NewsArticle";
import NewsArticleEntry from "@/components/NewsArticleEntry";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { Alert } from "react-bootstrap";


export const getServerSideProps: GetServerSideProps<NewsResponse> = async () => {
 ///await new Promise(r=>setTimeout(r,3000))
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { articles: newsResponse.articles }
  }

}

export default function BreakingNewsPage({ articles }: NewsResponse) {
  return (
    <>
      <Head>
        <title key="title">Breaking News - NextJS News App</title>
      </Head>
      <main>
        <h1>Breaking News</h1>
        <Alert>
          This page uses <strong>getServerSideProps</strong> to fetch data server-side on every request.
          This allows search engines to crawl the page content and <strong>improves SEO</strong>.
        </Alert>
       <NewsArticlesGrid articles={articles}/>
      </main>
    </>
  )
}
