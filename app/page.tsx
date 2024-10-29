// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center text-white justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-purple-900">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Coffee Shops</h1>
        <Link href="/user">Click me!</Link>
      </main>
    </div>
  );
}
