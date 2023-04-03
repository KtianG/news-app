import css from "./Home.module.css";

export const Home: React.FC = () => {
  return (
    <main className={css.main}>
      <h1 className={css.title}>Simple news app</h1>
      <div className={css.content}>
        <p>
          Welcome to our news app! Stay informed with the latest headlines and
          stories from around the world.
        </p>
      </div>
    </main>
  );
};
