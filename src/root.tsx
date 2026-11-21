import { Links, Meta, Outlet, Scripts, useLocation } from "react-router";

import "@/index.css";

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const canonicalUrl = `https://www.lushsleutsky.com${pathname}`;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="#0a0a0a" name="theme-color" />
        <link href={canonicalUrl} rel="canonical" />
        <meta content={canonicalUrl} property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="https://www.lushsleutsky.com/og.png" property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="summary_large_image" name="twitter:card" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
