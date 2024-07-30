'use client';
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { HtmlPage } from "@/app/components/HtmlPage";

export default function Html() {
    const btnsHeader = [
      {
        "href": "./html",
        "name": "HTML"
      },
      {
        "href": "./javascript",
        "name": "JavaScript"
      },
      {
        "href": "./css",
        "name": "CSS"
      }
    ];
    return (
      <main>
        <Header btnsHeader={btnsHeader} />
        <HtmlPage />
        <Footer />
      </main>
    );
  }
  