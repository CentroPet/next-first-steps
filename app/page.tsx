// import Image from "next/image";
// Page pasa por layout, no aparece en todas las paginas 
// pero el root layout si entro

import Link from "next/link";


export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-24">
      <span className="text-5xl">
        Hello World
      </span>

      <Link href={'/about'}>About Page</Link>
    </main>
  );
}



