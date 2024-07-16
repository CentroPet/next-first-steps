import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Descriptions',
 keywords: ['About Page', 'Cat', 'Dog', '...']
 
};

export default function AboutPage() {
  return (
      <span className="text-7xl flex min-h-screen">About Page</span>
  )
}