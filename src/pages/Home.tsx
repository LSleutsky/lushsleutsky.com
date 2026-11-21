import About from "@/components/About";
import Contact from "@/components/Contact";
import ContributionGraph from "@/components/ContributionGraph";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

import { profile } from "@/data/resume";

const title = "Lush Sleutsky | Senior Software Engineer";
const description = "Lush Sleutsky - Senior Software Engineer based in Philadelphia, PA";

export function meta() {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.tagline,
        url: "https://www.lushsleutsky.com/",
        address: { "@type": "PostalAddress", addressLocality: "Philadelphia", addressRegion: "PA" },
        sameAs: profile.social.map((account) => account.url)
      }
    }
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Showcase />
      <Divider />
      <About />
      <Divider />
      <ContributionGraph />
      <Divider />
      <Contact />
    </>
  );
}
