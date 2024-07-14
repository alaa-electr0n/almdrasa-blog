import styles from "./Quote.module.css";
function Quote() {
  return (
    <div className={styles.quoteContainer}>
      <blockquote>
        “ Traveling can expose you to new environments and potential health
        risks, so it's crucial to take precautions to stay safe and healthy. ”
      </blockquote>
    </div>
  );
}

export default Quote;
