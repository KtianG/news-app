import css from "./MainContent.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../reduxtkt/store";

import { getCountryNews } from "../../services/api";
import Modal from "react-modal";

import { NewsTile } from "./NewsTile/NewsTile";
import { Spinner } from "./Spinner/Spinner";
import { NewsModal } from "./NewsModal/NewsModal";

import dummyArticles from "../../data/dummyData.json";

type Props = {
  country: string;
  name: string;
};

export const MainContent: React.FC<Props> = ({ country, name }) => {
  const [news, setNews] = useState(0);
  const [modalState, setModalState] = useState(false);

  const dummyArticle: Article = dummyArticles.pl[0];
  const [currentArticle, setCurrentArticle] = useState(dummyArticle);

  const current_view = useSelector((state: RootState) => state.view);
  const dispatch = useDispatch();

  const openModal: any = (article: Article) => {
    setCurrentArticle(article);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  useEffect(() => {
    getCountryNews(country, dispatch).then((articles) => {
      setNews(articles);
    });
  }, [country, dispatch]);

  const generateNewsTile = (view: string, news: [Article] | number) => {
    if (typeof news === "number") {
      return;
    }
    const layout = news.map((article, index) => {
      return (
        <NewsTile key={index} view={view} article={article} open={openModal} />
      );
    });
    return layout;
  };

  return (
    <main className={css.main}>
      <h1 className={css.title}>News from {name}</h1>
      <div className={css[current_view.value]}>
        {news === 0 ? <Spinner /> : generateNewsTile(current_view.value, news)}
      </div>
      <Modal
        isOpen={modalState}
        onRequestClose={closeModal}
        contentLabel="News"
        className={css.modal}
        overlayClassName={css.overlay}
        ariaHideApp={false}
      >
        <NewsModal article={currentArticle} closeModal={closeModal} />
      </Modal>
    </main>
  );
};
