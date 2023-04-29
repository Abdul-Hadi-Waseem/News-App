import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import placeholderImg from "@/assets/images/placeholderImg.jpg";
import styles from "@/styles/NewsArticleEntry.module.css"
interface NewsArticleEntryProps {
  article: NewsArticle;
}
export default function NewsArticleEntry({
  article: { title, description, url, urlToImage },
}: NewsArticleEntryProps) {
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage : undefined
      
  return (
    <a href={url}>
      <Card className="h-100">
        <Image
          src={validImageUrl || placeholderImg}
          alt="Placeholder Image"
          width={500}
          height={200}
          className={`card-img-top ${styles.image}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}
