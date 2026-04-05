import { BrowserRouter, Routes, Route } from "react-router";

import Home from "@/pages/Home";
import HowIWorkPage from "@/pages/HowIWorkPage";
import WorkPage from "@/pages/WorkPage";

import Layout from "@/components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<WorkPage />} path="/work" />
          <Route element={<HowIWorkPage />} path="/how-i-work" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
