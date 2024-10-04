import Link from "next/link";
import Image from "next/image";
import { articleType } from "../content";

// This is the author avatar that appears in the article page and in <CardArticle /> component
const Avatar = ({ article }: { article: articleType }) => {
  return (
    <Link
      href={`#`}
      title={`Posts by ${article.author.name}`}
      className="inline-flex gap-2 items-center group"
      rel="author"
    >
      <span itemProp="author">
        <Image
          src={article.author.avatar}
          // alt={`Avatar of ${article.author.name}`}
          alt=""
          className="object-cover object-center w-7 h-7 rounded-full"
          width={28}
          height={28}
        />
      </span>
      <span className="group-hover:underline">{article.author.name}</span>
    </Link>
  );
};

export default Avatar;
