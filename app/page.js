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
          <div className="flex flex-wrap gap-4 p-4">
            {data.map((artist) => (
              <CardArtist key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
