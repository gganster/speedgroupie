import axios from "axios";
import CardArtist from "@/components/CardArtist";
export default async function Home() {
  const res = await axios.get("https://groupietrackers.herokuapp.com/api/artists");
  const data = await res.data;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Welcome to SpeedGroupie</h1>
      <p className="text-center mt-2">Discover your favorite artists!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((artist) => (
          <CardArtist key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}
