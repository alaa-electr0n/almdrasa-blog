import { Link } from "react-router-dom";
import styles from "./Card.module.css";
function Card({ card }) {
  const {
    authorName,
    authorPic,
    postTitle,
    postImage,
    postDate,
    catagory,
    id,
  } = card;

  const urlTitle = postTitle.split(" ").join("-").toLowerCase();

  // console.log(urlTitle);
  return (
    <div className={styles.cardContainer}>
      <Link to={`/${id}/${urlTitle}`}>
        <div className={styles.card}>
          <img className={styles.cardImg} src={postImage} />
          <label className={styles.category}>{catagory}</label>
          <h3 className={styles.cardTitle}>{postTitle}</h3>
          <div className={styles.authorRow}>
            <img className={styles.authorImg} src={authorPic} />
            <p className={styles.authorName}>{authorName}</p>
            <p className={styles.postDate}>{postDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
