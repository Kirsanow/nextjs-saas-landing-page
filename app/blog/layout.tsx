import { Suspense } from "react";
import Footer from "@/app/components/footer";
import { Header } from "../components/header";

export default async function LayoutBlog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense>
        <Header />
      </Suspense>

      <main className="p-8 mx-auto max-w-6xl min-h-screen">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}
