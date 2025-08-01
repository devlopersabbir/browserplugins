import { extensions } from "@/constants";
import Stats from "./_components/Stats";
import Hero from "./_components/hero";
import Extension from "./_components/extensions/extension";

export default function HomePage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-background to-muted">
        <Hero />
      </section>

      <Extension />
      {/* Stats Section */}
      <section className="relative py-24 px-6 bg-background">
        <Stats extensions={extensions} />
      </section>
    </div>
  );
}
