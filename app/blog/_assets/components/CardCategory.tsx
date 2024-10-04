"use client";
import type { JSX } from "react";
import Link from "next/link";
import { categoryType } from "../content";

// This is the category card that appears in the home page and in the category page
import { usePathname } from "next/navigation";

const CardCategory = ({
  category,
  tag = "h2",
}: {
  category: categoryType;
  tag?: keyof JSX.IntrinsicElements;
}) => {
  const TitleTag = tag;
  const pathname = usePathname();
  const isActive = pathname.includes(`/blog/category/${category.slug}`);

  return (
    <Link
      className={`p-6 rounded-xl border transition-all duration-300 transform hover:shadow-lg hover:scale-102 ${
        isActive
          ? "bg-blue-50 border-blue-200 shadow-md"
          : "bg-white border-gray-100 shadow-sm hover:bg-gray-50"
      }`}
      href={`/blog/category/${category.slug}`}
      title={category.title}
      rel="tag"
    >
      <TitleTag
        className={`text-lg font-semibold transition-colors duration-300 md:text-xl ${
          isActive ? "text-blue-700" : "text-gray-800 group-hover:text-blue-600"
        }`}
      >
        {category?.titleShort || category.title}
      </TitleTag>
      <div
        className={`mt-3 flex items-center ${
          isActive ? "text-blue-600" : "text-gray-500"
        }`}
      >
        <svg
          className="mr-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <span className="text-sm">{0} articles</span>
      </div>
    </Link>
  );
};

export default CardCategory;
