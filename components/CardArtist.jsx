"use client"
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { useHover } from "@uidotdev/usehooks";
import { AuroraBackground } from "./aceternity/aurora-background";

export default function CardArtist({ artist }) {
  const [ref, hovering] = useHover();
  if (!artist) return null;

  return (
    <div className={cn(
      "flex-1 min-w-78 rounded-md p-3 border border-gray-700 bg-gray-900 shadow hover:shadow-lg transition-all cursor-pointer",
      "transition-all hover:shadow-xl hover:shadow-gray-400/40 relative top-0 hover:-top-2",
    )} ref={ref}>
      <Link
        href={`/artists/${artist.id}`}
        className="relative"
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
          <h2 className="text-xl font-bold">{artist.name}</h2>
          <Badge>
            {artist.creationDate} {hovering ? <span>hovered</span> : <span>nope</span>}
          </Badge>
        </div>
      </Link>
    </div>

  );
}