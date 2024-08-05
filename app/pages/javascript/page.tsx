import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsPage } from "@/app/components/JsPage";

export default function Javascript() {
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
      <JsPage />
      <Footer />
    </main>
  );
}
