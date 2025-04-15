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
      "group flex-1 min-w-78 transition-all cursor-pointer",
      "transition-all relative top-0 hover:-top-2",
    )} ref={ref}>
      <Link
        href={`/artists/${artist.id}`}
        className="relative text-center flex flex-col justify-center items-center"
        tabIndex="0"
        role="button"
        aria-label={`Artist card for ${artist.name}`}
      >
        <img
          src={artist.image}
          alt={artist.name}
          className="h-48 w-48 rounded-full mb-4 group-hover:shadow-2xl group-hover:shadow-gray-600 transition-all duration-200"
        />
        <h2 className="text-xl font-bold mb-2 text-gray-200" >{artist.name}</h2>
      </Link>
    </div>

  );
}