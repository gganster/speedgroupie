import axios from "axios";
import CardArtist from "@/components/CardArtist";
import Hero from "@/components/hero";
import { AuroraBackground } from "@/components/aceternity/aurora-background";

export default async function Home() {
  const res = await axios.get("https://groupietrackers.herokuapp.com/api/artists");
  const data = await res.data;

  return (
    <div>
      <div className="relative">
        <div className="absolute top-0">
          <Hero />
          <div className="flex flex-wrap gap-x-4 gap-y-8 p-4 max-w-7xl mx-auto">
            {data.map((artist) => (
              <CardArtist key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
