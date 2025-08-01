import { baseURI } from "@/utils";
import SearchFilters from "../filters/search-filters";
import ExtGrid from "./ext-grid";

export default async function Extension() {
  const data = await fetch(`${baseURI}/extension`);
  const extensions = await data.json();
  console.log(extensions);
  return (
    <>
      <section className="relative py-12 px-6 bg-background">
        <SearchFilters />
        {/* <BaseFilters /> */}
      </section>

      {/* Extensions Grid */}
      <section className="relative py-16 px-6 bg-background">
        <ExtGrid />
      </section>
    </>
  );
}
