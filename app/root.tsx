import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./styles/globals.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Xala Technologies - Revolutionising the Future" },
    {
      name: "description",
      content:
        "From AI-powered automation to enterprise cloud infrastructure - we architect solutions that transform how organizations operate.",
    },
    { name: "theme-color", content: "#030305" },
    { property: "og:title", content: "Xala Technologies" },
    {
      property: "og:description",
      content: "Revolutionising the Future with AI, Cloud & Web3 Technologies",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Error - Xala Technologies</title>
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-bg">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-text mb-4">
              Something went wrong
            </h1>
            <p className="text-text-muted mb-8">
              We're working on fixing this. Please try again later.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-xala text-bg font-semibold rounded-lg hover:bg-xala-bright transition-colors"
            >
              Go Home
            </a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
