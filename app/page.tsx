import Copy from "./components/Copy";
import Hero from "./components/Hero";
import Tile from "./components/Tile";

export default function Home() {
  return (
    <main>
      <Hero />
      <Copy />
      <Tile
        title="Legacy Portraits"
        image="/images/cov.jpg"
        description="A professionally crafted video tribute."
      />
    </main>
  );
}
