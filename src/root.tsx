import { Links, Meta, Outlet, Scripts } from "react-router";

import "@/index.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="Lush Sleutsky - Senior Software Engineer based in Philadelphia, PA"
          name="description"
        />
        <meta content="#0a0a0a" name="theme-color" />
        <title>Lush Sleutsky | Senior Software Engineer</title>
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
