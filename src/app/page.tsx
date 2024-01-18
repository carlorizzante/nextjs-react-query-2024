import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-24">
      <h1>TanStack Query / React Query</h1>
      <p>With NextJs</p>
      <nav className="mt-6">
        <ul>
          <li><Link href="/web-dev-simplified">Web Dev Simplified</Link></li>
          <li><Link href="/code-genix">Code Genix</Link></li>
        </ul>
      </nav>
    </main>
  )
}
