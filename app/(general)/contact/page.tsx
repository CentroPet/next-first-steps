import  { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Contact',
 description: 'customer contact',
 keywords: ['Contact Page', 'customers', '...']
};

export default function ContactPage() {
    return (
      <>
        <span className="text-7xl flex min-h-screen">Contact Page</span>
      </>
    )
  }