import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome Abu Abdirohman</h1>

      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <a href="?users">Users</a>
          </li>
        </ul>
      </header>
    </>
  );
}
