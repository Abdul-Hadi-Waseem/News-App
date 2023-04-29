import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle } from "@/models/NewsArticle";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchNewsPage() {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const searchQuery = formData.get("searchQuery")?.toString().trim();
    if (searchQuery) {
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);
        const response = await fetch("/api/search-news?q=" + searchQuery);
        const articles: NewsArticle[] = await response.json();
        setSearchResults(articles);
        setSearchResultsLoading(false);
      } catch (error) {
        console.log(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoadingIsError(false);
      }
    }
  }
  return (
    <>
      <Head>
        <title>Search News - NextJs News App</title>
      </Head>
      <main>
        <h1>Search News</h1>
        <Alert>
          This is page uses <strong>client-side data fetching</strong> to show
          fresh data for every search. Requests are handled by our backend via{" "}
          <strong>API routes</strong>.
        </Alert>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="search-input">
            <Form.Label> Search Query</Form.Label>
            <Form.Control
              name="searchQuery"
              placeholder="E.g Politics,Sports..."
            />
          </Form.Group>
          <Button
            type="submit"
            className="mb-3"
            disabled={searchResultsLoading}>
            Search
          </Button>
        </Form>
        <div className="d-flex flex-column align-items-center">
          {searchResultsLoading && <Spinner animation="border" />}
          {searchResultsLoadingIsError && <p>Something went Wrong</p>}
          {searchResults?.length === 0 && <p>Not Found, Try Again!</p>}
          {searchResults && <NewsArticlesGrid articles={searchResults} />}
        </div>
      </main>
    </>
  );
}
