import css from "./MainContent.module.css";

import type { AppDispatch } from "../../reduxtkt/store";
import type { RootState } from "../../reduxtkt/store";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuantity } from "../../reduxtkt/quantity/quantitySlice";

import Modal from "react-modal";

import { getCountryNews } from "../../services/api";

import { NewsTile } from "./NewsTile/NewsTile";
import { Spinner } from "./Spinner/Spinner";
import { NewsModal } from "./NewsModal/NewsModal";

import dummyArticles from "../../data/dummyData.json";

type Props = {
  country: string;
  name: string;
};

export const MainContent: React.FC<Props> = ({ country, name }) => {
  const [news, setNews] = useState<Article[] | number>(0);
  const [modalState, setModalState] = useState<boolean>(false);
  const [currentArticle, setCurrentArticle] = useState<Article>(
    dummyArticles.us[0]
  );

  const current_view = useSelector((state: RootState) => state.view);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    getCountryNews(country, dispatch).then((articles) => {
      setNews(articles);
    });
    return () => {
      setNews(0);
      dispatch(setQuantity(0));
    };
  }, [country, dispatch]);

  const openModal = (article: Article) => {
    setCurrentArticle(article);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const generateNewsTile = (view: string, news: Article[] | number) => {
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
