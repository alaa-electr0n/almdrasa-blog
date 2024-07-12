import styles from "./Card.module.css";
function Card({ card }) {
  const { authorName, authorPic, postTitle, postImage, postDate, catagory } =
    card;
  return (
    <div className={styles.cardContainer}>
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
    </div>
  );
}

export default Card;
