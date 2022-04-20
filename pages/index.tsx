// import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
// import styles from '../styles/Home.module.css';

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
