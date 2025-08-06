import { baseURI } from "@/utils";
import SearchFilters from "../filters/search-filters";
import ExtGrid from "./ext-grid";
import { ExtensionSchema } from "../../schemas/extension.schema";

export default async function Extension() {
  const data = await fetch(`${baseURI}/extensions`);
  const extensions = (await data.json()) as ExtensionSchema[];
  return (
    <>
      <section className="relative py-12 px-6 bg-background">
        <SearchFilters />
        {/* <BaseFilters /> */}
      </section>

      {/* Extensions Grid */}
      <section className="relative py-16 px-6 bg-background">
        <ExtGrid extensions={extensions} />
      </section>
    </>
  );
}
