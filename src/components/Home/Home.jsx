import React, { useEffect, useState } from "react";
import CardNoticias from "../CardNoticias/CardNoticias";
import * as c from "./style";

export default function Home() {
  const apiKey = "1d2733d7d1fe408d869869d76e1c51e3";
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar notícias");
      }
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <c.ContainerRender>
      {news.map((article, index) => (
        <CardNoticias
          key={index}
          title={article.title}
          description={article.description}
          author={article.author}
          image={article.urlToImage}
          handleClick={handleClick}
          goNews={article.url}
        />
      ))}
    </c.ContainerRender>
  );
}
