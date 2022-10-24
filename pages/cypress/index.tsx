/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => (
  <nav>
    <Link href="/cypress/about">
      <a>About</a>
    </Link>
  </nav>
);

export default About;
