import Image from "next/image";
import Link from "next/link";
import SVGLogo from "./svg-logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap lg:items-start">
          <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
            <Link
              href="/"
              aria-current="page"
              className="flex items-center justify-center gap-2 md:justify-start"
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
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap justify-center text-center md:mt-0 md:pl-24">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="footer-title mb-3 text-sm font-semibold tracking-widest text-slate-900 md:text-left">
                LINKS
              </div>
              <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 md:items-start">
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
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="footer-title mb-3 text-sm font-semibold tracking-widest text-slate-900 md:text-left">
                LEGAL
              </div>
              <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm text-slate-700 hover:text-slate-900 md:items-start">
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
          <div className="flex flex-row items-center justify-start gap-4">
            <Image
              alt="Artem Kirsanov"
              src={
                "https://api.dicebear.com/9.x/miniavs/svg?backgroundColor=b6e3f4"
              }
              width={48}
              height={48}
              className="aspect-square w-12 rounded-full"
            />
            <div className="text-base-content-secondary text-left leading-relaxed">
              Hey Curious 👋 I&apos;m{" "}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="link text-base-content font-medium"
              >
                Artem
              </a>
              , the creator of QuillMinds. You can follow my work on{" "}
              <a
                href="https://x.com/kirsnvartem"
                target="_blank"
                rel="noreferrer"
                className="link text-base-content font-medium"
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
