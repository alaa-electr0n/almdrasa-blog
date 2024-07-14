import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import styles from "./MainLayout.module.css";
import Button from "../Button/Button";
import { shuffleArray } from "../../utilities/utilfunctions";
import { useArticles } from "../../contexts/ArticlesContexts";

function MainLayout() {
  const {
    cards,
    isLoading,
    showMore,
    setShowMore,
    setDisplayedCards,
    searchCards: displayedCards,
  } = useArticles();

  function handleMoreArticles() {
    const shuffledArray = shuffleArray(cards);
    const moreArticles = shuffledArray.slice(0, 5);

    setDisplayedCards(displayedCards.concat(moreArticles));
    setShowMore(true);
  }

  function handleLessArticles() {
    setDisplayedCards(cards.slice());
    setShowMore((show) => !show);
  }

  return (
    <main className={styles.mainContent}>
      {isLoading && <Loader />}
      {!isLoading && displayedCards.length > 0 && (
        <>
          {displayedCards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
          <Button
            type={!showMore ? "show" : "hide"}
            onClick={showMore ? handleLessArticles : handleMoreArticles}
          >
            {showMore ? "Show Less" : "Load More"}
          </Button>
        </>
      )}
    </main>
  );
}

export default MainLayout;
