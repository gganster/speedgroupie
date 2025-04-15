import axios from "axios";
import CardArtist from "@/components/CardArtist";
import Hero from "@/components/hero";

export default async function Home() {
  const res = await axios.get("https://groupietrackers.herokuapp.com/api/artists");
  const data = await res.data;

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((artist) => (
          <CardArtist key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}
