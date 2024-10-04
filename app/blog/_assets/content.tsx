import type { JSX } from "react";
import Image, { StaticImageData } from "next/image";

import artemImg from "../../../public/artem.png";
import quillmindsImg from "../../../public/cover.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

export type categoryType = {
  slug: string;
  title: string;
  titleShort?: string;
  description: string;
  descriptionShort?: string;
};

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs: { [key: string]: string } = {
  feature: "feature",
  tutorial: "tutorial",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories: categoryType[] = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.feature,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "New Features",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Features",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Here are the latest features we've added to Quillminds. I'm constantly improving our product to help you teach better.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Latest features added to Quillminds.",
  },
  {
    slug: categorySlugs.tutorial,
    title: "How Tos & Tutorials",
    titleShort: "Tutorials",
    description:
      "Learn how to use Quillminds with these step-by-step tutorials. I'll show you how to teach better and save time.",
    descriptionShort:
      "Learn how to use Quillminds with these step-by-step tutorials.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

export type authorType = {
  slug: string;
  name: string;
  job: string;
  description: string;
  avatar: StaticImageData | string;
  socials?: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
};

// Social icons used in the author's bio.
const socialIcons: {
  [key: string]: {
    name: string;
    svg: JSX.Element;
  };
} = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs: {
  [key: string]: string;
} = {
  marc: "artem",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors: authorType[] = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.marc,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Artem Kirsanov",
    // The job to display in the author's bio. Up to 60 characters.
    job: "Maker of Quillminds",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "Artem is a developer and an entrepreneur. He's built 3 startups in the last  years.He's currently building Quillminds, the #1 Stripe AI tool for teachers.",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: artemImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://twitter.com/kirsnvartem",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/kirsnvartem/",
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/kirsanow",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

export type articleType = {
  slug: string;
  title: string;
  description: string;
  categories: categoryType[];
  author: authorType;
  publishedAt: string;
  image: {
    src?: StaticImageData;
    urlRelative: string;
    alt: string;
  };
  content: JSX.Element;
};

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles: {
  [key: string]: string;
} = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-800",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-slate-800",
  p: "text-slate-700 leading-relaxed",
  ul: "list-inside list-disc text-slate-700 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-slate-50 text-slate-900 p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-slate-50 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles: articleType[] = [
  {
    slug: "ai-tools-for-teaching",
    title: "Revolutionizing Education: AI Tools for Teaching",
    description:
      "Discover how AI is transforming the educational landscape. Learn about innovative tools that can enhance your teaching methods and engage students like never before.",
    categories: [
      categories.find(
        (category) => category.slug === categorySlugs.feature
      ) as categoryType,
    ],
    author: authors.find(
      (author) => author.slug === authorSlugs.marc
    ) as authorType,
    publishedAt: "2023-11-20",
    image: {
      src: quillmindsImg,
      urlRelative: "/cover.png",
      alt: "Quillminds",
    },
    content: (
      <>
        <Image
          src={quillmindsImg}
          alt="Quillminds"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
        />
        <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            Artificial Intelligence is reshaping the educational landscape,
            offering innovative tools that can significantly enhance teaching
            methods and student engagement. This article explores some of the
            most promising AI tools for educators.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>1. AI-Powered Lesson Planning</h3>
          <p className={styles.p}>
            One of the most time-consuming tasks for teachers is lesson
            planning. AI tools can now assist in creating personalized lesson
            plans based on curriculum requirements and student needs. For
            example, Quillminds offers:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>Customizable lesson templates</li>
            <li className={styles.li}>
              Content suggestions based on learning objectives
            </li>
            <li className={styles.li}>
              Automatic alignment with educational standards
            </li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>2. Intelligent Tutoring Systems</h3>
          <p className={styles.p}>
            AI-driven tutoring systems can provide personalized learning
            experiences for students. These systems adapt to each student&apos;s
            pace and learning style, offering:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>Real-time feedback on assignments</li>
            <li className={styles.li}>Adaptive quizzes and exercises</li>
            <li className={styles.li}>
              Progress tracking and performance analytics
            </li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>
            3. Natural Language Processing for Education
          </h3>
          <p className={styles.p}>
            Natural Language Processing (NLP) technologies are being used to
            enhance various aspects of education, including:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>Automated essay grading</li>
            <li className={styles.li}>Language learning applications</li>
            <li className={styles.li}>
              Text-to-speech and speech-to-text tools for accessibility
            </li>
          </ul>
        </section>
      </>
    ),
  },
];
