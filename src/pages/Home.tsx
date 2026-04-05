import About from "@/components/About";
import Contact from "@/components/Contact";
import ContributionGraph from "@/components/ContributionGraph";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

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
