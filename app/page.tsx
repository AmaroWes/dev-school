'use client';

import './globals.css';
import { useRouter } from 'next/router';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

export default function Home() {

  const btnsHeader = [
    {
      "href": "pages/html",
      "name": "HTML"
    },
    {
      "href": "pages/javascript",
      "name": "JavaScript"
    },
    {
      "href": "pages/css",
      "name": "CSS"
    }
  ];

  return (
    <main>
      <Header btnsHeader={btnsHeader}/>
      <Hero />
      <Footer />
    </main>
  );
}
