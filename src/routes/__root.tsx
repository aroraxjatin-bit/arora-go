import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-saffron">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-deep-green">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-saffron px-6 py-3 text-sm font-bold text-white shadow-saffron"
          >
            🙏 Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AroraGo — From Here to Anywhere | Char Dham & Himalayan Yatras" },
      { name: "description", content: "Expert-guided Char Dham, Do Dham and Single Dham Yatras by private cab from Delhi. 15,000+ happy pilgrims. Book your sacred Himalayan journey with AroraGo." },
      { name: "author", content: "AroraGo" },
      { property: "og:title", content: "AroraGo — From Here to Anywhere" },
      { property: "og:description", content: "Expert-guided pilgrimages to the sacred Himalayas from Delhi by private cab." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <FloatingButtons />
    </>
  );
}
