import { Browser } from "@/@types";
import CheckoutPage from "../../_components/checkout/checkout-page";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ browser?: string }>;
}) {
  const { id } = await params;
  const { browser } = await searchParams;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-foreground">
              Complete Your Purchase
            </h1>
            <p className="text-muted-foreground">
              You're just one step away from getting your extension
            </p>
          </div>

          <CheckoutPage id={id} browser={browser as Browser} />
        </div>
      </div>
    </div>
  );
}
