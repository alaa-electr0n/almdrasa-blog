import { useEffect } from "react";
import styles from "./ArticleLayout.module.css";
import { useArticles } from "../../contexts/ArticlesContexts";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import ArticleHeader from "../ArticleHeader/ArticleHeader";

import FakeContent from "../FakeContent/FakeContent";
import FakeSecondPart from "../FakeContent/FakeSecondPart";
import AdsComponent from "../AdsComponent/AdsComponent";

function ArticleLayout() {
  const { getArticle, isLoading } = useArticles();

  const { id } = useParams();

  useEffect(
    function () {
      getArticle(id);
    },
    [id]
  );

  return (
    <main className={styles.articleLayout}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <article className={styles.article}>
            <ArticleHeader />
            <FakeContent />
            <AdsComponent />
            <FakeSecondPart />
          </article>
        </>
      )}
    </main>
  );
}

export default ArticleLayout;
