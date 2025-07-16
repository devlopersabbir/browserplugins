import Extensions from "../../_components/single-ext/extension";

export default async function ExtensionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative container mx-auto px-4 py-8">
        <Extensions id={id} />
      </div>
    </div>
  );
}
