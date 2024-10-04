import Link from "next/link";
import { categoryType } from "../content";

// This is the category badge that appears in the article page and in <CardArticle /> component
const Category = ({
  category,
  extraStyle,
}: {
  category: categoryType;
  extraStyle?: string;
}) => {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary-100 hover:text-primary-800 transition-colors ${
        extraStyle ? extraStyle : ""
      }`}
      title={`Posts in ${category.title}`}
      rel="tag"
    >
      {category.titleShort}
    </Link>
  );
};

export default Category;
