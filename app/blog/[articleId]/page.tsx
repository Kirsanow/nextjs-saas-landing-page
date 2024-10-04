import Link from "next/link";
import Script from "next/script";
import { articles } from "../_assets/content";
import BadgeCategory from "../_assets/components/BadgeCategory";
import Avatar from "../_assets/components/Avatar";
import { getSEOTags } from "@/app/lib/seo";
import config from "@/config";

export async function generateMetadata({
  params,
}: {
  params: { articleId: string };
}) {
  const article = articles.find((article) => article.slug === params.articleId);
  if (!article) {
    return {};
  }
  return getSEOTags({
    title: article.title,
    description: article.description,
    canonicalUrlRelative: `/blog/${article.slug}`,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      images: [
        {
          url: article.image.urlRelative,
          width: 1200,
          height: 660,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  });
}

export default async function Article({
  params,
}: {
  params: { articleId: string };
}) {
  const article = articles.find((article) => article.slug === params.articleId);
  const articlesRelated = articles
    .filter(
      (a) =>
        a.slug !== params.articleId &&
        a.categories.some((c) =>
          article?.categories.map((c) => c.slug).includes(c.slug)
        )
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
    )
    .slice(0, 3);

  return (
    <>
      {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}
      {article && (
        <Script
          type="application/ld+json"
          id={`json-ld-article-${article.slug}`}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://${config.domainName}/blog/${article.slug}`,
              },
              name: article.title,
              headline: article.title,
              description: article.description,
              image: `https://${config.domainName}${article.image.urlRelative}`,
              datePublished: article.publishedAt,
              dateModified: article.publishedAt,
              author: {
                "@type": "Person",
                name: article.author.name,
              },
            }),
          }}
        />
      )}

      {/* GO BACK LINK */}
      <div>
        <Link
          href="/blog"
          className="link !no-underline text-slate-700 hover:text-slate-800 inline-flex items-center gap-1"
          title="Back to Blog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      <article>
        {/* HEADER WITH CATEGORIES AND DATE AND TITLE */}
        {article && (
          <>
            <section className="my-12 md:my-20 max-w-[800px]">
              <div className="flex gap-4 items-center mb-6">
                {article.categories.map((category) => (
                  <BadgeCategory category={category} key={category.slug} />
                ))}
                <span className="text-slate-700" itemProp="datePublished">
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-800 md:text-5xl lg:text-6xl md:mb-8">
                {article.title}
              </h1>

              <p className="text-slate-700 md:text-lg max-w-[700px]">
                {article.description}
              </p>
            </section>

            <div className="flex flex-col md:flex-row">
              {/* SIDEBAR WITH AUTHORS AND 3 RELATED ARTICLES */}
              <section className="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0 border-slate-200">
                <p className="mb-2 text-sm text-slate-700 md:mb-3">Posted by</p>
                <Avatar article={article} />

                {articlesRelated.length > 0 && (
                  <div className="hidden mt-12 md:block">
                    <p className="mb-2 text-sm text-base-content/80 md:mb-3">
                      Related reading
                    </p>
                    <div className="space-y-2 md:space-y-5">
                      {articlesRelated.map((article) => (
                        <div className="" key={article.slug}>
                          <p className="mb-0.5">
                            <Link
                              href={`/blog/${article.slug}`}
                              className="font-medium link link-hover hover:link-primary"
                              title={article.title}
                              rel="bookmark"
                            >
                              {article.title}
                            </Link>
                          </p>
                          <p className="max-w-full text-sm text-base-content/80">
                            {article.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* ARTICLE CONTENT */}
              <section className="space-y-12 w-full max-md:pt-4 md:pr-20 md:space-y-20">
                {article.content}
              </section>
            </div>
          </>
        )}
      </article>
    </>
  );
}
