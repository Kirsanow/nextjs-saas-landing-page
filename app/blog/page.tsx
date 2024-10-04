import { categories, articles } from "./_assets/content";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/app/lib/seo";

export const metadata = getSEOTags({
  title: `${config.appName} Blog | AI for Teachers`,
  description: "Learn how to leverage AI for your teaching",
  canonicalUrlRelative: "/blog",
});

export default async function Blog() {
  const articlesToDisplay = articles
    .sort(
      (a, b) =>
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
    )
    .slice(0, 6);
  return (
    <>
      <section className="mx-auto mt-12 mb-24 max-w-xl text-center md:mb-32">
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-800 lg:text-5xl">
          The {config.appName} Blog
        </h1>
        <p className="text-lg leading-relaxed opacity-80 text-slate-600">
          Get the best tips about how to leverage AI for your teaching
        </p>
      </section>

      <section className="grid gap-8 mb-24 lg:grid-cols-2 md:mb-32">
        {articlesToDisplay.map((article, i) => (
          <CardArticle
            article={article}
            key={article.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>

      <section>
        <p className="mb-8 text-2xl font-bold tracking-tight text-center text-slate-800 lg:text-4xl md:mb-12">
          Browse articles by category
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CardCategory key={category.slug} category={category} tag="div" />
          ))}
        </div>
      </section>
    </>
  );
}
