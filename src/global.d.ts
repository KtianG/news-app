declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png";
declare module "*.jpeg";

type Article = {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};
