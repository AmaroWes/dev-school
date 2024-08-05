import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CssPage } from "@/app/components/CssPage";

export default function Css() {
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
        <CssPage />
        <Footer />
      </main>
    );
  }
  