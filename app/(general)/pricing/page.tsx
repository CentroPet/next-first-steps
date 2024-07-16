import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Precing',
  description: 'Pricing off 20%',
  keywords: [ 'Precing Page', 'With discount 10%']


};

export default function PricingPage() {
    return (
      <>
        <span className="text-7xl flex min-h-screen">Pricing Page</span>
      </>
    )
  }