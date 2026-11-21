import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/Layout.tsx", [
    index("pages/Home.tsx"),
    route("work", "pages/WorkPage.tsx"),
    route("how-i-work", "pages/HowIWorkPage.tsx"),
    route("*", "pages/NotFoundPage.tsx")
  ])
] satisfies RouteConfig;
