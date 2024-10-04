import Image from "next/image";
import Link from "next/link";
import SVGLogo from "./svg-logo";
import artemImg from "../../public/artem.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="px-8 py-24 mx-auto max-w-7xl">
        <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap lg:items-start">
          <div className="flex-shrink-0 mx-auto w-64 text-center md:mx-0 md:text-left">
            <Link
              href="/"
              aria-current="page"
              className="flex gap-2 justify-center items-center md:justify-start"
            >
              <SVGLogo />
              <strong className="text-base font-extrabold tracking-tight text-slate-800 md:text-lg">
                Quillminds
              </strong>
            </Link>
            <p className="mt-3 text-sm text-slate-700">
              AI-powered lesson planning made easy. Create engaging and
              personalized lessons in minutes.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex flex-wrap flex-grow justify-center mt-10 -mb-10 text-center md:mt-0 md:pl-24">
            <div className="px-4 w-full md:w-1/2 lg:w-1/3">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-slate-900 md:text-left">
                LINKS
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mb-10 text-sm text-slate-700 hover:text-slate-900 md:items-start">
                <a
                  href="mailto:contact@quillminds.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover"
                  aria-label="Contact Support"
                >
                  Support
                </a>
                <Link href="/#pricing" className="link link-hover">
                  Pricing
                </Link>
              </div>
            </div>
            <div className="px-4 w-full md:w-1/2 lg:w-1/3">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-slate-900 md:text-left">
                LEGAL
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mb-10 text-sm text-slate-700 hover:text-slate-900 md:items-start">
                <Link href="/tos" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-sm md:mt-16">
          <div className="flex flex-row gap-4 justify-start items-center">
            <Image
              alt="Artem Kirsanov"
              src={artemImg}
              width={48}
              height={48}
              className="object-cover w-12 rounded-full aspect-square"
            />
            <div className="leading-relaxed text-left text-base-content-secondary">
              Hey Curious 👋 I&apos;m{" "}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="font-medium link text-base-content"
              >
                Artem
              </a>
              , the creator of QuillMinds. You can follow my work on{" "}
              <a
                href="https://x.com/kirsnvartem"
                target="_blank"
                rel="noreferrer"
                className="font-medium link text-base-content"
              >
                X.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
