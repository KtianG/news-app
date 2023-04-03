import css from "./NewsTile.module.css";
import balon from "../../../images/balon.jpeg";

type Props = {
  view: string;
  article: Article;
  open: (article: Article) => void;
};

export const NewsTile: React.FC<Props> = ({ view, article, open }) => {
  const current_view = view;
  const { source, title, description, publishedAt, image } = article;

  return (
    <article
      onClick={() => open(article)}
      className={css[`news--${current_view}`]}
    >
      <img
        onError={(e) => {
          setDefaultImage(e);
        }}
        className={css[`picture--${current_view}`]}
        src={image ? image : balon}
        alt={title}
      />
      <p className={css.title}>{title}</p>

      <p className={css[`description--${current_view}`]}>{description}</p>
      <div className={css[`info--${current_view}`]}>
        <div className={css[`author--${current_view}`]}>
          {source.name ? source.name : "Unknown"}
        </div>
        <div>{publishedAt.substring(0, 10)}</div>
      </div>
    </article>
  );
};

const setDefaultImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  (e.target as HTMLImageElement).src = balon;
};
