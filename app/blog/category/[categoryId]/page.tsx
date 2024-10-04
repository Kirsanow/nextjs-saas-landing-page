import { categories, articles } from "../../_assets/content";
import CardArticle from "../../_assets/components/CardArticle";
import CardCategory from "../../_assets/components/CardCategory";
import { getSEOTags } from "@/app/lib/seo";
import config from "@/config";

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}) {
  const category = categories.find(
    (category) => category.slug === params.categoryId
  );

  return getSEOTags({
    title: `${category?.title} | Blog by ${config.appName}`,
    description: category?.description,
    canonicalUrlRelative: `/blog/category/${category?.slug}`,
  });
}

export default async function Category({
  params,
}: {
  params: { categoryId: string };
}) {
  const category = categories.find(
    (category) => category.slug === params.categoryId
  );
  const articlesInCategory = articles
    .filter((article) =>
      article.categories.map((c) => c.slug).includes(category?.slug || "")
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <>
      <section className="mx-auto mt-12 mb-24 max-w-3xl text-center md:mb-32">
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-800 lg:text-5xl md:mb-12">
          {category?.title}
        </h1>
        <p className="mx-auto max-w-xl opacity-80 text-slate-700 md:text-lg">
          {category?.description}
        </p>
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-slate-800 lg:text-4xl md:mb-12">
          Most recent articles in {category?.title}
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {articlesInCategory.map((article) => (
            <CardArticle
              key={article.slug}
              article={article}
              tag="h3"
              showCategory={false}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-slate-800 lg:text-4xl md:mb-12">
          Other categories you might like
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories
            .filter((c) => c.slug !== category?.slug)
            .map((category) => (
              <CardCategory key={category.slug} category={category} tag="h3" />
            ))}
        </div>
      </section>
    </>
  );
}
