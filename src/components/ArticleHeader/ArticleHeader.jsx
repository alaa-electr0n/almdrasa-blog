import { useArticles } from "../../contexts/ArticlesContexts";
import styles from "./ArticleHeader.module.css";
function ArticleHeader() {
  const { article } = useArticles();

  const { catagory, postDate, postTitle, authorPic, authorName } = article;

  return (
    <>
      <label className={styles.catagory}>{catagory}</label>
      <h1 className={styles.articleTitle}>{postTitle}</h1>
      <div className={styles.authorRow}>
        <img className={styles.authorImg} src={authorPic} alt={postTitle} />
        <p className={styles.authorName}>{authorName}</p>
        <p className={styles.postDate}>{postDate}</p>
      </div>
      <img
        className={styles.articleLandscape}
        src="/assets/inpost-image-1.png"
        alt={postTitle}
      />
    </>
  );
}

export default ArticleHeader;
