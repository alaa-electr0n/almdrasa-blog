import { createContext, useState, useEffect, useContext } from "react";

const URL = `http://localhost:9000`;
const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [article, setArticle] = useState({});
  const [searchquey, setSearchquery] = useState("");

  //derived State
  const searchCards =
    searchquey.length > 0
      ? displayedCards.filter((card) =>
          card.postTitle.toLowerCase().includes(searchquey.toLowerCase())
        )
      : displayedCards;

  useEffect(
    function () {
      async function fetchPosts() {
        setIsLoading(true);
        try {
          const res = await fetch(`${URL}/blogPosts`);

          const data = await res.json();
          // console.log(data);
          setCards(data);
          setDisplayedCards(data.slice(0, cards.length));
        } catch {
          throw new Error("Error loading Data from json server");
        } finally {
          setIsLoading(false);
        }
      }
      fetchPosts();
    },
    [cards.length]
  );

  async function getArticle(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${URL}/blogPosts/${id}`);

      const data = await res.json();
      setArticle(data);
    } catch {
      throw new Error("Error loading Data from json server");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ArticlesContext.Provider
      value={{
        cards,
        displayedCards,
        setDisplayedCards,
        isLoading,
        showMore,
        setShowMore,
        article,
        getArticle,
        searchCards,
        setSearchquery,
        searchquey,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

function useArticles() {
  const context = useContext(ArticlesContext);
  if (context === undefined)
    throw new Error("You are using Article Context outside its Provider");
  return context;
}

export { ArticlesProvider, useArticles };
