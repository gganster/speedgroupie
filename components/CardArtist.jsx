import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function CardArtist({ artist }) {
  if (!artist) return null;

  return (
    <Link
      href={`/artists/${artist.id}`}
      className={cn(
        "rounded-md p-4 border border-gray-700 bg-gray-900 shadow hover:shadow-lg transition-all cursor-pointer",
        "transition-all hover:shadow-xl hover:shadow-gray-400/40 relative top-0 hover:-top-2",
      )}
      tabIndex="0"
      role="button"
      aria-label={`Artist card for ${artist.name}`}
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="text-white flex items-center justify-between">
        <h2 className="text-xl font-bold mb-2">{artist.name}</h2>
        <Badge>
          {artist.creationDate}
        </Badge>
      </div>
    </Link>
  );
}