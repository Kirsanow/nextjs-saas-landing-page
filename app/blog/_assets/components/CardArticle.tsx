import type { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import BadgeCategory from "./BadgeCategory";
import Avatar from "./Avatar";
import { articleType } from "../content";

// This is the article card that appears in the home page, in the category page, and in the author's page
const CardArticle = ({
  article,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}: {
  article: articleType;
  tag?: keyof JSX.IntrinsicElements;
  showCategory?: boolean;
  isImagePriority?: boolean;
}) => {
  const TitleTag = tag;

  return (
    <article className="overflow-hidden rounded-xl border shadow-sm transition-shadow duration-300 ease-in-out bg-slate-50/80 hover:shadow-md border-slate-100">
      {article.image?.src && (
        <Link
          href={`/blog/${article.slug}`}
          className="block overflow-hidden"
          title={article.title}
          rel="bookmark"
        >
          <figure className="relative h-48 md:h-64">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              layout="fill"
              objectFit="cover"
              priority={isImagePriority}
              placeholder="blur"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </figure>
        </Link>
      )}
      <div className="p-6">
        {/* CATEGORIES */}
        {showCategory && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.categories.map((category) => (
              <BadgeCategory category={category} key={category.slug} />
            ))}
          </div>
        )}

        {/* TITLE WITH RIGHT TAG */}
        <TitleTag className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
          <Link
            href={`/blog/${article.slug}`}
            className="transition-colors duration-200 hover:text-blue-600"
            title={article.title}
            rel="bookmark"
          >
            {article.title}
          </Link>
        </TitleTag>

        <div className="space-y-4 text-slate-600">
          {/* DESCRIPTION */}
          <p className="line-clamp-3">{article.description}</p>

          {/* AUTHOR & DATE */}
          <div className="flex justify-between items-center text-sm">
            <Avatar article={article} />

            <span itemProp="datePublished" className="text-slate-500">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArticle;
