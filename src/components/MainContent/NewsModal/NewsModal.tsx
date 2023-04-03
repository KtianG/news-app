import css from "./NewsModal.module.css";

type Props = {
  article: Article;
  closeModal: () => void;
};

export const NewsModal: React.FC<Props> = ({ article, closeModal }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={closeModal}>
        &#10005;
      </button>

      <p className={css.author}>{article.author}</p>
      <h2 className={css.title}>{article.title}</h2>

      <p className={css.content}>
        {article.content ? article.content : "No content provided"}
      </p>

      <div className={css.source}>
        <a
          className={css.link}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};
