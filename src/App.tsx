import "./App.css";
import Hero from "./components/hero/Hero";

import Footer from "./components/footer/Footer";
import AutocompleteSearch from "./components/SearchLogic/AutocompleteSearch";

export default function App() {
  return (
    <div>
      <main>
        <Hero />
        <AutocompleteSearch />
      </main>
      <Footer />
    </div>
  );
}
