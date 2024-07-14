import { useArticles } from "../../contexts/ArticlesContexts";
import Quote from "../Quote/Quote";
import styles from "./AdsComponent.module.css";
function AdsComponent() {
  const { article } = useArticles();
  return (
    <div className={styles.adsContainer}>
      <Quote />
      <img src={`${article.postImage}`} />
      <div className={styles.ads}>
        <span>advertisment</span>
        <span>You can place Ads</span>
        <span>750x100</span>
      </div>
    </div>
  );
}

export default AdsComponent;
