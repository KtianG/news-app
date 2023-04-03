declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png";
declare module "*.jpeg";

type Article = {
  title: string;
  description: string | null;
  content: string | null;
  url: string;
  image: string | null;
  publishedAt: string;

  source: {
    url: string | null;
    name: string | null;
  };
};
